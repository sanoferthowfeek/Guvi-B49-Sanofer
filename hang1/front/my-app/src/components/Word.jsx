import React from 'react';
import './Word.css';

function Word({ word, guesses }) {
  return (
    <div className="Word">
      {word.split('').map((letter, index) => (
        <span key={index} className="letter">
          {guesses.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
}

export default Word;
