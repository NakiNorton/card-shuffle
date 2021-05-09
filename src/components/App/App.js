import React, { useState } from 'react'
import './App.css';
import { cardData } from '../../data/cardData'
import CardContainer from '../CardContainer/CardContainer';


const App = () => {
  const [ deck, setDeck ] = useState(cardData)
  const [ layout, setLayout ] = useState('spread')
 
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
      <button onClick={() => setLayout('pile')}>Pile</button>
      <button onClick={() => setLayout('spread')}>Spread</button>
      <CardContainer deck={deck} layout={layout} />
    </div>
  )
}

export default App;
