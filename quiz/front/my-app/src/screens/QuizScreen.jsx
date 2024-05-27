import React, { useEffect, useState } from 'react';
import { fetchQuizzes, createQuiz } from '../api';

const QuizScreen = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [answer, setAnswer] = useState(0);

    useEffect(() => {
        const getQuizzes = async () => {
            const { data } = await fetchQuizzes();
            setQuizzes(data);
        };

        getQuizzes();
    }, []);

    const addQuizHandler = async (e) => {
        e.preventDefault();
        try {
            const newQuiz = { question, options, answer };
            const { data } = await createQuiz(newQuiz);
            setQuizzes([...quizzes, data]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Quiz</h1>
            <form onSubmit={addQuizHandler}>
                <input
                    type="text"
                    placeholder="Question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                {options.map((option, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) =>
                            setOptions(
                                options.map((opt, i) =>
                                    i === index ? e.target.value : opt
                                )
                            )
                        }
                    />
                ))}
                <input
                    type="number"
                    placeholder="Answer Index"
                    value={answer}
                    onChange={(e) => setAnswer(Number(e.target.value))}
                />
                <button type="submit">Add Quiz</button>
            </form>
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz._id}>
                        {quiz.question}
                        <ul>
                            {quiz.options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuizScreen;
