import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';


function generateDeck() {
  let symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  let deck = [];
  for (var i = 0; i < 16; i++) {
    const card = {
      isFlipped: false,
      symbol: symbols[i % 8],
    }
    deck.push(card);
  }
  shuffle(deck);
  return deck;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
    }
  }

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped === true) { return };

    const cardToFlip = { ...this.state.deck[cardIndex], isFlipped: true }

    let newPickedCards = this.state.pickedCards.concat(cardIndex);

    const newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) return cardToFlip;
      return card;
    });

    if (newPickedCards.length === 2) {
      const card1Index = newPickedCards[0]
      const card2Index = newPickedCards[1]
      const firstCard = newDeck[card1Index]
      const secondCard = newDeck[card2Index]

      if (firstCard.symbol !== secondCard.symbol) {
        setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000)
      }

      newPickedCards = []
    };

    this.setState(
      {
        deck: newDeck,
        pickedCards: newPickedCards
      }
    );
  }

  unflipCards(card1Index, card2Index) {
    const card1 = { ...this.state.deck[card1Index], isFlipped: false }
    const card2 = { ...this.state.deck[card2Index], isFlipped: false }

    const newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) return card1;
      if (card2Index === index) return card2;
      return card;
    })

    this.setState({ deck: newDeck })

  }

  render() {
    const cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard
        symbol={card.symbol}
        isFlipped={card.isFlipped}
        key={index}
        pickCard={this.pickCard.bind(this, index)}
      />

    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h3 className="subtitle">Match Cards To Win</h3>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
        <div className="Container">
          {cardsJSX.slice(0, 4)}
          {cardsJSX.slice(4, 8)}
          {cardsJSX.slice(8, 12)}
          {cardsJSX.slice(12, 16)}
        </div>
      </div>
    );
  }
}

export default App;
