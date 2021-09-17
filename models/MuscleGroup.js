//Import mongoose module
const mongoose = require('mongoose');

const MuscleSchema = new mongoose.Schema({

        //List of 6 main muscle areas
        name: {
            type: String,
            enum: ['Chest','Biceps','Triceps','Shoulders','Abs','Legs'],
            default: 'Chest',
            required: true
        },
        
        //Size/Girth of muscle
        size: {
            type: Number,
            min: 5,
            max: 100,
        },
        
        //Maximum amount of weight achieved with muscle
        maxweight: Number
    });

module.exports = User = mongoose.model('muscle', MuscleSchema);