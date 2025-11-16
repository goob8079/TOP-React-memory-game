import { useState } from 'react'
import './App.css'
import { Game } from './components/Game';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [reset, setReset] = useState(false);

  function increaseScore() {
    setScore(s => s + 1);
    setReset(false);
  }

  function endRound() {
    if (score > highScore) {
      setHighScore(score);
    }

    setScore(0);
    setReset(true);
  }

  return (
    <div className='App'>
      <div className='header'>
        <div className='header-left'>
          <h1>Fruits Memory Game</h1>
          <p>Click the images to get points, but don't click the same one twice</p>
        </div>
        <div className='header-right'>
          <p>Score: {score}</p>
          <p>Best score: {highScore}</p>
        </div>
      </div>
      <Game 
        reset={reset}
        endRound={endRound}
        increaseScore={increaseScore}
      />
    </div>
  )
}

export default App