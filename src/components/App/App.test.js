import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render the headings on app load', () => {
    render (
      <App />
    )
    
    const primaryHeading = screen.getByText('Card Shuffle')
    const subHeading = screen.getByText('Change Card Layout:')

    expect(primaryHeading).toBeInTheDocument()
    expect(subHeading).toBeInTheDocument()
  })

  it('should render the shuffle button', () => {
    render (
      <App />
    )
    
    const shuffleButton = screen.getByRole('button', { name: 'Shuffle' })

    expect(shuffleButton).toBeInTheDocument()
  })

  it('should render the change layout buttons', () => {
    render (
      <App />
    )
    
    const spreadButton = screen.getByRole('button', { name: 'Spread' })
    const pileButton = screen.getByRole('button', { name: 'Pile' })

    expect(spreadButton).toBeInTheDocument()
    expect(pileButton).toBeInTheDocument()
  })

  it('should display cards in the spread layout when the app loads', () => {
    render (
      <App />
    )
    
    const cards = screen.queryAllByAltText('front of', { exact: false })

    expect(cards).toHaveLength(52)
  })

  it('should display cards in the pile layout when the Pile button is clicked', () => {
    render (
      <App />
    )

    fireEvent.click(screen.getByText('Pile'))
      
    const topCard = screen.getByAltText('top card on the deck')
    const text = screen.getByText('Click on the pile to flip the top card over!')
    
    expect(topCard).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })

  it('should display the flipped card', () => {
    render (
      <App />
    )

    fireEvent.click(screen.getByText('Pile'))
    fireEvent.click(screen.getByAltText('top card on the deck'))
    
    const flippedCard = screen.getByAltText('flipped card')
    expect(flippedCard).toBeInTheDocument()
  })
})