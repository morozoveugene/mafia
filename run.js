const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const body = require('body-parser');
const swaggerUi = require('swagger-ui-express');
// const {api_version} = require('./core/const');
const auth = require('./core/routers/auth');
const {swaggerSpec} = require("./docs/swagger");
const app = express();
const port = process.env.PORT || 4444;


// Envs config
dotenv.config({path: '.envs/.node'});

// App config
app.use(body.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use( '/auth', auth);

// Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const run_server = async () => {
    try {
        const mongo_url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@nodejstest-snr6j.mongodb.net/${process.env.MONGO_COLLECTION}`;
        await mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        app.listen(port, () => {
            console.log(`Server running in ${port} port`)
        });
    } catch (error) {
        console.log(`Server shutting down with error: ${error}`)
    }
};

run_server();
