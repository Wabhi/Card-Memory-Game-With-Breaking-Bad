import React, { useState, useEffect } from 'react';
import Card from './Card';
import Fring from '../Images/fring.jpg';
import Guss from '../Images/guss.jpg';
import Hank from '../Images/hank.jpg';
import Hector from '../Images/hector.jpg';
import Jimmy from '../Images/Jimmy.jpg';
import Lydia from '../Images/lydia.jpg';
import Mike from '../Images/mike.jpg';
import Pinkman from '../Images/pinkman.jpg';
import Skyler from '../Images/skyler.jpg';
import Todd from '../Images/todd.jpg';
import Walt from '../Images/walt.jpg';
import Walter from  '../Images/walter.jpg';


function MemoryGame({ options, setOptions, highScore, setHighScore ,startTime,setStartTime}) {
    const [game, setGame] = useState([])
    const [flippedCount, setFlippedCount] = useState(0)
    const [flippedIndexes, setFlippedIndexes] = useState([])
    const colors = [
      Fring, Guss, Hank, Hector, Jimmy, Lydia,
      Mike,Pinkman,Skyler,Todd,Walt,Walter
    ]
    
    useEffect(() => {
      const newGame = []
      for (let i = 0; i < options / 2; i++) {
        const firstOption = {
          id: 2 * i,
          colorId: i,
          color: colors[i],
          flipped: false,
        }
        const secondOption = {
          id: 2 * i + 1,
          colorId: i,
          color: colors[i],
          flipped: false,
        }
  
        newGame.push(firstOption)
        newGame.push(secondOption)
      }
  
      const shuffledGame = newGame.sort(() => Math.random() - 0.5)
      setGame(shuffledGame)
    }, [])

    useEffect(() => {
      // Loads when the game variable changes
        const finished = !game.some(card => !card.flipped)
        if (finished && game.length > 0) {
            setOptions(null)
            alert(`Congratulation ! You won the game😃 and you took ${startTime} seconds to complete the game.`)
            window.location.reload()

        }
    }, [game])
  
    if (flippedIndexes.length === 2) {
      const match = game[flippedIndexes[0]].colorId === game[flippedIndexes[1]].colorId
    
      if (match) {
        const newGame = [...game]
        newGame[flippedIndexes[0]].flipped = true
        newGame[flippedIndexes[1]].flipped = true
        setGame(newGame)
    
        const newIndexes = [...flippedIndexes]
        newIndexes.push(false)
        setFlippedIndexes(newIndexes)
      } else {
        const newIndexes = [...flippedIndexes]
        newIndexes.push(true)
        setFlippedIndexes(newIndexes)
      }
    }
  
    if (game.length === 0) return <div>loading...</div>
    else {
      return (
        <div id="cards">
          {game.map((card, index) => (
            <div className="card" key={index}>
              <Card
                id={index}
                color={card.color}
                game={game}
                flippedCount={flippedCount}
                setFlippedCount={setFlippedCount}
                flippedIndexes={flippedIndexes}
                setFlippedIndexes={setFlippedIndexes}
              />
            </div>
          ))}
        </div>
      )
    }
  }
export default MemoryGame;