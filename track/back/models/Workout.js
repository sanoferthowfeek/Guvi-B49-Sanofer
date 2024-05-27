const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    type: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;
