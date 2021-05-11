import React, { useState } from 'react'
import './CardPile.css';

const CardPile = ({ deck }) => {
  const [ topCardIndex, setTopCardIndex ] = useState(0)

  return (
    <>
      <>
        {topCardIndex === deck.length && 
          <h3 className='user-msg'>You've reached the end of the pile!</h3>
        }
        {topCardIndex !== deck.length &&
          <img className='card-pile-card' src={deck[topCardIndex].imageBack} alt={'top card on the deck'} onClick={() => setTopCardIndex(topCardIndex + 1)} />
        }
      </>

      <>
        {!topCardIndex &&
          <h3 className='user-msg'>Click on the card to flip it over!</h3>
        }
        {!!topCardIndex &&
          <img className='card-pile-card' src={deck[topCardIndex - 1].imageFront} alt='flipped card' />
        }
      </>
    </>
  )
}

export default CardPile;
