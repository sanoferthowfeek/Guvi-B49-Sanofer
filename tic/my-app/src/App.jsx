// src/App.js
import React from 'react';
import Board from './components/Board.jsx';
import './App.css';

const App = () => (
  <div className="game">
    <div className="game-board">
      <h1>TIC TAC TOE GAME</h1>
      <Board />
    </div>
  </div>
);

export default App;
