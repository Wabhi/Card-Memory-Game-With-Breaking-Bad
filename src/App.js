import React, { useState, useEffect } from "react";
import MemoryGame from './Components/MemoryGame';
import './App.css';


export default function App() {
  const [options, setOptions] = useState(null)
  const [highScore, setHighScore] = useState(0)
  const [startTime,setStartTime]=useState(0)

  // useEffect(() => {
  //   const json = localStorage.getItem('memorygamehighscore')
  //   const savedScore = JSON.parse(json)
  //   if (savedScore) {
  //     setHighScore(savedScore)
  //   }
  // }, [])
  
    const startTimerHandler = () => {
      setInterval(() => {
       setStartTime((startTime) => startTime + 1)
      }, 1000)
   }
  return (
    <div>
      <div className="container">
        <h1>Memory Game <span>Breaking Bad</span></h1>
        <div>Start Time : {startTime}'sec</div>
        <div>
          {options === null ? (
            <>
              <button onClick={() => setOptions(12)}>Easy</button>
              <button onClick={() => setOptions(18)}>Medium</button>
              <button onClick={() => setOptions(24)}>Hard</button>
            </>
          ) : (
              <>
                <button onClick={startTimerHandler}>Start Timer</button>
              <button
                onClick={() => {
                  const prevOptions = options
                  setOptions(null)
                  setTimeout(() => {
                    setOptions(prevOptions)
                  }, 5)
                }}
              >
                Start Over
              </button>
              <button onClick={() => setOptions(null)}>Main Menu</button>
            </>
          )}
        </div>
      </div>

      {options ? (
        <MemoryGame
          options={options}
          setOptions={setOptions}
          highScore={highScore}
          setHighScore={setHighScore}
          startTime={startTime}
          setStartTime={setStartTime}
        />
      ) : (
          <>
          <h2>Choose anyone - Easy Medium Hard</h2>
          </> 
      )}
    </div>
  )
}


