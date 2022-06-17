import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Card from './components/Card.js';

class App extends Component {
  state = {
    cards: [
      { id: 1, name: 'Margherita', url: 'https://www.scattidigusto.it/wp-content/uploads/2018/03/pizza-margherita-originale-Scatti-di-Gusto-1568x821.jpg', price: 4.99, quantity: 0 },
      { id: 2, name: 'Diavola', url: 'https://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/03/d1.jpg', price: 5.99, quantity: 0 },
      { id: 3, name: '4 Gusti', url: 'https://primochef.it/wp-content/uploads/2020/04/SH_pizza_quattro_stagioni.jpg', price: 7.99, quantity: 0 },
      { id: 4, name: 'Romana', url: 'https://www.giallozafferano.it/images/5-560/Pizza-Romana_780x520_wm.jpg', price: 4.99, quantity: 0 },
      { id: 5, name: 'Capricciosa', url: 'https://www.ricettedalmondo.it/images/foto-ricette/p/29241-pizza-capricciosa.jpg', price: 3.99, quantity: 0 },
      { id: 6, name: 'Boscaiola', url: 'https://cdn.tasteatlas.com/images/dishes/67a1f8a12ae9474194265ea5217e9b0b.jpg', price: 10.99, quantity: 0 },
      { id: 7, name: 'Ai 4 formaggi', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Pizza_quattro_formaggi_at_restaurant%2C_Chalk_Farm_Road%2C_London.jpg', price: 8.99, quantity: 0 },
      { id: 8, name: 'Sfincione Siciliano', url: 'https://wips.plug.it/cips/buonissimo.org/cms/2012/04/sfincione.jpg?w=712&a=c&h=406', price: 5.99, quantity: 0 },
    ]
  }


  handleDelete = cardId => {
    const cards = this.state.cards.filter( card => card.id !== cardId);
    this.setState({cards});
  }

 handleIncrement = card => {
  //clono l'array di oggetti cards in una nuova variabile cards
  const cards = [...this.state.cards];
  //aggancio la singola card passata al click con la posizione all'interno dell'array
  const id = cards.indexOf(card);
  //prendo la singola card clonandola in un nuovo oggetto
  cards[id] = {...card};
  //aumento la quantità di volta in volta
  cards[id].quantity++;
  
  this.setState({cards});
 } 

  render() {
    return (
      <>
        <Header />
        <h2 className="py-3 text-center">Cosa desideri ordinare?</h2>
        <hr />
        <div className="container">
          <div className="row text-center gy-3">
            {this.state.cards.map(card => (
              <Card key={card.id} card={card} onDelete={this.handleDelete} onIncrement={this.handleIncrement}/>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
