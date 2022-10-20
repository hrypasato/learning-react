const { Router } = require("express");
const { check } = require('express-validator');

const eventController = require('./eventController');
const { validator } = require('../midlewares/fieldsValidator');
const { validarJWT } = require("../midlewares/jwtValidator");
const { isDate } = require('../midlewares/custom/dateValidator');

const router = Router();

 /**
  * hostname/api/events
  */

router.use( validarJWT );

router.get('/', eventController.getEvents);
router.post('/', 
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio no válida').custom( isDate ),
    check('end', 'Fecha de final no válida').custom( isDate ),
    validator,
  ], eventController.createEvent);
router.put('/:id', 
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio no válida').custom( isDate ),
    check('end', 'Fecha de final no válida').custom( isDate ),
    validator,
  ], 
  eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);


module.exports = router