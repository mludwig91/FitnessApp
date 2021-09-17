//import mongoose module
const mongoose = require('mongoose');

//get connection string from a json doc
const config = require('config');

//get the mongo connection string from default.json
const db = config.get('mongoURI');

//DB connection function
const connectDB = async () => {

    try {
        await mongoose.connect(db);
        console.log('Mongo Connected Succesfully!');
        useNewUrlParser: true;
        useCreateIndex: true;
    } catch(err) {
        console.log(err.message);
        //leave process with failure
        process.exit(1);

    }
}

module.exports = connectDB;
