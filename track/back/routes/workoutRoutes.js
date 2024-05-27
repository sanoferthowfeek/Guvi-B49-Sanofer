const asyncHandler = require('express-async-handler');
const Workout = require('../models/Workout');

const addWorkout = asyncHandler(async (req, res) => {
    const { type, duration } = req.body;

    const workout = new Workout({
        user: req.user._id,
        type,
        duration,
    });

    const createdWorkout = await workout.save();
    res.status(201).json(createdWorkout);
});

const getWorkouts = asyncHandler(async (req, res) => {
    const workouts = await Workout.find({ user: req.user._id });
    res.json(workouts);
});

module.exports = { addWorkout, getWorkouts };
