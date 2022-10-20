module.exports = {
    handleError,
}

function handleError(err, req, res, next){
    console.log(err)
    
    if(res.headerSent) return next(err)
    
    const statusCode = err.status || 500;
    const message = err.message || 'Error al procesar la solicitud';
    const errors = err?.errors;
    
    res.status(statusCode).json({ 
        ok:false,
        message,
        errors,
     })
}