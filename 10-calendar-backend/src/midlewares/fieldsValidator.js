const { request, response } = require('express');
const { validationResult } = require('express-validator');

const validator = (req =request , res = response, next) => {

    const errors = validationResult(req);
        
    if( !errors.isEmpty() ){
        throw { status: 400, errors: errors.mapped() }
    }

    next();
}


module.exports = {
    validator,
}