import React, { Component } from 'react';
import '../styles/Cards.css';
class Card extends Component {
    render() {
        return (

            <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="card shadow" style={{ width: "18rem" }}>
                    <img src={this.props.card.url} className="card-img-top" alt="pizza" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.name}</h5>
                        <p className="card-text">€{this.props.card.price}</p>
                        
                        <div className='d-flex justify-content-between'>
                            <button className="btn btn-secondary" onClick={() => this.props.onIncrement(this.props.card)}  >Aggiungi <span className='badge text-dark bg-light'>{this.props.card.quantity}</span></button>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => this.props.onDelete(this.props.card.id)} >Elimina</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Card;