//import mongoose module
const mongoose = require('mongoose');

//Basic User information
const UserSchema = new mongoose.Schema({

        //Basic user data
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },

        //Use algorithm on goal objects to determine progress importance levels
        goals: [{
        
            weight:{
                type: Number,
                required: true
            },
            goalWeight:{
                type: Number,
                required: true
            },
            //more accurate than BMI
            bodyFat:{
                type: Number,
                required: true
            },
            goalBodyFat:{
                type: Number,
                required: true
            }

        }]


});

module.exports = User = mongoose.model('user', UserSchema);