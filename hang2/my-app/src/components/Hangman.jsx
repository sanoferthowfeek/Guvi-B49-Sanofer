import React, { useState } from 'react';
import Word from './Word.jsx';
import Keyboard from './Keyboard.jsx';
// import './Hangman.css';

const words = ["react", "javascript", "programming", "hangman"];

function Hangman() {
  const [word] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guesses, setGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);

  const handleGuess = (letter) => {
    if (word.includes(letter)) {
      setGuesses([...guesses, letter]);
    } else {
      setWrongGuesses([...wrongGuesses, letter]);
    }
  };

  const maxWrongGuesses = 6;

  return (
    <div className="Hangman">
      <Word word={word} guesses={guesses} />
      <Keyboard onGuess={handleGuess} disabledLetters={[...guesses, ...wrongGuesses]} />
      <p>Wrong guesses: {wrongGuesses.join(', ')}</p>
      <p>Remaining guesses: {maxWrongGuesses - wrongGuesses.length}</p>
      {wrongGuesses.length >= maxWrongGuesses && <p>You lose! The word was "{word}"</p>}
      {word.split('').every(letter => guesses.includes(letter)) && <p>You win!</p>}
    </div>
  );
}

export default Hangman;
