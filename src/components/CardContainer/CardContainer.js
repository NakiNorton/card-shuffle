import Card from '../Card/Card'
import './CardContainer.css';


const CardContainer = ({ deck }) => {

  const renderCards = () => {
    return deck.map(card => {
      return <Card card={card} key={card.id} />
    }) 
  }

  const setError = () => {
    return <h1>Sorry something went wrong!</h1>
  }

  return (
    <div className='card-container'>   
      {deck ? renderCards() : setError() }
    </div>
  )
}

export default CardContainer;
