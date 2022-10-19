const { request, response } = require('express');
const autoCatch = require('../lib/autoCatch');
const { compareHash } = require('../lib/crypto');
const { generarJWT } = require('../lib/jwt');
const { findUser, createNewUser } = require('./authService');

const createUser = async (req = request, res = response) => {
    const { name, email, password }  = req.body;
    
    const user = await findUser({ email });
    if(user) throw { status:400, message:'Un usuario existe con este correo' }

    const newUser = await createNewUser({ name, email, password });

    const token = await generarJWT(newUser.id, newUser.name);

    res.status(201).json({
        ok:true,
        token,
        user:{
            uid: newUser.id,
            name: newUser.name,
            email: newUser.email,
        },
    });
};

const loginUser = async (req = request, res = response) => {
    const { email, password }  = req.body;

    const user = await findUser({ email });
    if(!user) throw { status:404, message:'Usuario no existe' }

    const isValidPassword = compareHash(password, user.password);
    if(!isValidPassword) throw { status: 400, message: 'Credenciales incorrectas' };

    const token = await generarJWT(user.id, user.name);

    res.json({
        ok:true,
        token,
        user: {
            uid:user.id,
            name:user.name,
        }
    });
};

const refreshToken = async (req = request, res = response) => {
    const { uid, name } = req;

    const token = await generarJWT(uid, name);

    res.json({
        ok:true,
        token,
    });
};



module.exports = autoCatch({
    createUser,
    loginUser,
    refreshToken,
})