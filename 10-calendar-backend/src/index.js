const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { dbConnection } = require('./database/config');

const authRouter = require('./auth/authRouter');
const eventRouter = require('./events/eventRouter');
const { handleError } = require('./midlewares/errorHandler');

const app = express();
const port = process.env.PORT || 4001;


//Comprueba conexion con la DB
dbConnection();

app.use(cors());

app.use(express.static('public'));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/events", eventRouter);

app.use(handleError);

app.listen( port, () => {
    console.log(`Server running on port ${port}`)
});