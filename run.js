const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 4444;
const routs = require('./modules/routers');


// App config
app.use(routs);
app.use(express.static(path.join(__dirname, 'public')));


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
