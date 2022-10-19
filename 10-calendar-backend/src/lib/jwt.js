const jwt = require('jsonwebtoken');

const generarJWT = ( uid, name ) => {
    return new Promise((resolve, reject) =>{
        const payload = { uid, name }

        jwt.sign(payload, process.env.SECRET_JWT,{
            expiresIn: '2h',
        },(err, token) => {
            if(err){
                console.error(err);
                reject('No se pudo generar el token');
            }

            resolve(token);

        });
    
    });
}

const getPayloadFromToken = ( token ) => {
    try {
        const payload = jwt.verify(token, process.env.SECRET_JWT);
        return payload;

    } catch (error) {
        throw { status: 401, message:'Token no válido' }
    }
}


module.exports = {
    generarJWT,
    getPayloadFromToken,
}