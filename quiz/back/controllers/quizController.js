const asyncHandler = require('express-async-handler');
const Quiz = require('../models/Quiz');

// Create new quiz question
const addQuizQuestion = asyncHandler(async (req, res) => {
    const { question, options, answer } = req.body;

    const quiz = new Quiz({
        question,
        options,
        answer,
    });

    const createdQuiz = await quiz.save();
    res.status(201).json(createdQuiz);
});

// Get all quiz questions
const getQuizQuestions = asyncHandler(async (req, res) => {
    const quizzes = await Quiz.find();
    res.json(quizzes);
});

module.exports = { addQuizQuestion, getQuizQuestions };
