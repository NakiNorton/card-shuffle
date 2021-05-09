import React, { useState } from 'react'
import Card from '../Card/Card'
import CardPile from '../CardPile/CardPile'
import './CardContainer.css';


const CardContainer = ({ deck, layout }) => {

  const renderSpreadCards = () => {
    return deck.map(card => {
      return <Card card={card} key={card.id} />
    }) 
  }

  const renderPile = () => {
    return <CardPile deck={deck} />
  }

  const setError = () => {
    return <h2>Sorry something went wrong, please try refreshing the page.</h2>
  }

  return (
    <>
      {deck && 
        <>
          {layout === 'pile' && 
            <div className='card-container-pile'>   
              {renderPile()}
            </div> 
          }  
          {layout === 'spread' && 
            <div className='card-container-spread'>   
              {renderSpreadCards()}
            </div>
          }
        </>
      }
      {!deck && setError()}
   </>
  )
}

export default CardContainer;
