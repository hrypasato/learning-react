const { response } = require('express');
const { getPayloadFromToken } = require('../lib/jwt');


const validarJWT = ( req, res = response, next ) => {
       //x-token headers
       const token = req.header('x-token');

       if(!token) throw { status:401, message: 'No hay token en la solicitud' }
       
       const { uid, name } = getPayloadFromToken(token);

       req.uid = uid;
       req.name = name;

       next();
}

module.exports = {
    validarJWT,
}