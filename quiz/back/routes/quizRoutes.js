const express = require('express');
const { addQuizQuestion, getQuizQuestions } = require('../controllers/quizController');
const router = express.Router();

router.post('/', addQuizQuestion);
router.get('/', getQuizQuestions);

module.exports = router;
