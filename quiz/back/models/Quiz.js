const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    answer: { type: Number, required: true }, // index of the correct answer in the options array
}, {
    timestamps: true,
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
