import React, { useState } from 'react'
import './CardPile.css';

const CardPile = ({ deck }) => {
  const [ topCardIndex, setTopCardIndex ] = useState(0)

  return (
    <>
      <div className='card-pile'>
        {topCardIndex === deck.length && 
          <h2 className='user-msg'>You've reached the end of the pile!</h2>
        }
        {topCardIndex !== deck.length &&
          <img className='card-pile-card' src={deck[topCardIndex].imageBack} alt={'top card on the deck'} onClick={() => setTopCardIndex(topCardIndex + 1)} />
        }
      </div>

      <div className='card-active'>
        {!topCardIndex &&
          <h2 className='user-msg'>Click on the card to flip it over!</h2>
        }
        {!!topCardIndex &&
          <img className='card-pile-card' src={deck[topCardIndex - 1].imageFront} alt='flipped card' />
        }
      </div>
    </>
  )
}

export default CardPile;
