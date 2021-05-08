import './Card.css';

const Card = ({ card }) => {
  return (
    <img className='card' src={card.image} alt='front of card' />
  );
}

export default Card;
