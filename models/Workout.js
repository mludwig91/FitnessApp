const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({

    //reference to user model
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    musclegroups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'muscle'
    }],

    Intensity: {
        type: String,
            enum: ['Light','Moderate','Heavy'],
            default: 'Light',
            required: true
    },

    duration: {
        type: Number,
        required: true
    },
    
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Workout = mongoose.model('workout', WorkoutSchema);