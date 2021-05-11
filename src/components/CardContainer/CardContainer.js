import React from 'react'
import Card from '../Card/Card'
import CardPile from '../CardPile/CardPile'
import './CardContainer.css';


const CardContainer = ({ deck, layout }) => {

  const renderSpreadCards = () => {
    return deck.map(card => {
      return <Card card={card} key={card.id} />
    }) 
  }

  const renderPile = () => <CardPile deck={deck} />

  const setError = () => {
    return <h2>Sorry something went wrong, please try refreshing the page.</h2>
  }

  return (
    <div className='container'>
      {deck && 
        <>
          {layout === 'pile' && renderPile()}
          {layout === 'spread' && renderSpreadCards()}
        </>
      }
      {!deck && setError()}
   </div>
  )
}

export default CardContainer;
