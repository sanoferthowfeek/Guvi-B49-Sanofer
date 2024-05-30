import React from 'react';
import './Keyboard.css';


const letters = "abcdefghijklmnopqrstuvwxyz".split('');

function Keyboard({ onGuess, disabledLetters }) {
  return (
    <div className="Keyboard">
      {letters.map(letter => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={disabledLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
