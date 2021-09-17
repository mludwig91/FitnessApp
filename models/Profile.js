//import mongoose module
const mongoose = require('mongoose');

//Basic profile information
const UserProfile = new mongoose.Schema({

    //reference to user model
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    //Login date
    date: {
        type: Date, 
        default: Date.now
    },

    //Where are they
    location: String,

    //How are they doing
    status: String,

    //Back story
    bio: String,

    //How well are they progressing
    progressionScore: Number
    
});

module.exports = Profile = mongoose.model('profile', UserProfile);
