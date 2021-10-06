const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({

    //Array of users previous workouts
    workouts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'workout'
    }],

    //Array of comparing workouts
    progression: [{

        durationDiff:{
            type: Number,
            required: true
        },

        durationImportance:{
            type: Number,
            required: true
        },

        maxWeightDiff:{
            type: Number,
            required: true
        },

        weightImportance:{
            type: Number,
            required: true
        },

        sizeDiff:{
            type: Number,
            required: true,
        },

        sizeImportance:{
            type: Number,
            required: true,
        },

        dateDiff:{
            type: Number,
            required: true
        },

        dateImportance:{
            type: Number,
            required: true,
        },

    }],

    //Intensity points added after each log, reset after rest day
    intensityTracker: {
        type: Number,
        Min: 0,
        Max: 50
    },

    //Each diff multiplied by importance level + Intensity over 7
    weeklyProgressScore: {
        type: Number,
        Min: 0,
        Max: 100
    },

    //Each diff multiplied by importance level + Intensity
    overallProgressScore: {
        type: Number,
        Min: 0,
        Max: 100
    },

    });

module.exports = Progress = mongoose.model('progress', ProgressSchema);