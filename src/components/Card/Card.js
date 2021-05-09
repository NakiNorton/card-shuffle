import React, { useState } from 'react'
import './Card.css';

const Card = ({ card }) => {
  const [ viewFront, setViewFront ] = useState(true)

  return (
    <img className='card' src={viewFront ? card.imageFront : card.imageBack} alt={`front of ${card.name} card`} onClick={() => setViewFront(!viewFront)}/>

  )
}

export default Card;
