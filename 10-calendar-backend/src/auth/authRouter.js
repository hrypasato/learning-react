const { Router } = require("express");
const { check } = require('express-validator');
const authController = require('./authController');
const { validator } = require('../midlewares/fieldsValidator');
const { validarJWT } = require("../midlewares/jwtValidator");

const router = Router();

 /**
  * hostmane/api/auth
  */

router.post("/",
    [
        check('email', 'Email incorrecto').isEmail(),
        check('password', 'Password debe tener minimo 6 caracteres').isLength({ min:6 }),
        validator,
    ], 
    authController.loginUser);

router.post("/new", 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Email incorrecto').isEmail(),
        check('password', 'Password debe tener minimo 6 caracteres').isLength({ min:6 }),
        validator,
    ], 
    authController.createUser);

router.post("/renew", validarJWT ,authController.refreshToken);


module.exports = router