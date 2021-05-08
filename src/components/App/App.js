import React, { useState } from 'react'
import './App.css';
import { cardData } from '../../data/cardData'


const App = () => {
  const [ deck, setDeck ] = useState(cardData)
 
  const shuffleCards = () => {
    for (let i = deck.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
    }
    setDeck([...deck])
  }

  return (
    <div className="App">
      <button onClick={shuffleCards}>Shuffle</button>
    </div>
  )
}

export default App;
