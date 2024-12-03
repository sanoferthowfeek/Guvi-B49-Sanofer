import React, { useState } from "react";

const App = () => {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "Paris", isCorrect: true },
        { answerText: "London", isCorrect: false },
        { answerText: "Berlin", isCorrect: false },
        { answerText: "Madrid", isCorrect: false },
      ],
    },
    {
      questionText: "Which language is primarily used for web development?",
      answerOptions: [
        { answerText: "Python", isCorrect: false },
        { answerText: "JavaScript", isCorrect: true },
        { answerText: "C++", isCorrect: false },
        { answerText: "Java", isCorrect: false },
      ],
    },
    {
      questionText: "What is 2 + 2?",
      answerOptions: [
        { answerText: "3", isCorrect: false },
        { answerText: "4", isCorrect: true },
        { answerText: "5", isCorrect: false },
        { answerText: "6", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>React Quiz App</h1>
      {showScore ? (
        <div>
          <h2>
            Your Score: {score} / {questions.length}
          </h2>
          <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
      ) : (
        <div>
          <div>
            <h3>
              Question {currentQuestion + 1} / {questions.length}
            </h3>
            <p>{questions[currentQuestion].questionText}</p>
          </div>
          <div>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option.isCorrect)}
                style={{
                  display: "block",
                  margin: "10px auto",
                  padding: "10px 20px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
