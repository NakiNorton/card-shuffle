import React, { useState } from 'react'
import './App.css'
import { cardData } from '../../data/cardData'
import CardContainer from '../CardContainer/CardContainer'


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

  const styleBtn = (selected) => {
    return layout === selected ? 'active' : ''
  }

  return (
    <div className='App'>
      <>
        <h1 className='heading-primary'>Card Shuffle</h1>
        <button 
          className='btn btn-shuffle' 
          name='shuffle' 
          onClick={shuffleCards}>
          Shuffle
        </button>
        <h3 className='heading-sub'>Change Card Layout:</h3>
        <button 
          className={`btn btn-layout ${styleBtn('spread')}`} 
          name='spread' 
          onClick={() => setLayout('spread')}>
          Spread
        </button>
        <button 
          className={`btn btn-layout ${styleBtn('pile')}`} 
          name='pile' 
          onClick={() => setLayout('pile')}>
          Pile
        </button>
      </>
      <CardContainer deck={deck} layout={layout} />
    </div>
  )
}

export default App;
