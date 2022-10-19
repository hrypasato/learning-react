const mongoose = require('mongoose');

const dbConnection = async () => {
    const uri = process.env.DATABASE_CONNECTION
    try {
        await mongoose.connect(uri, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('DB online')

    } catch (error) {
        console.error(error);
        throw new Error('No se pudo conectar con la base de datos');
    }
}


module.exports = {
    dbConnection
}