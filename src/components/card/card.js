import React, { Component } from 'react';

import './card.css';

export default class Card extends Component {

    render() {
        return (
            <div className="pokemon-details card">
                <img className="pokemon-image"
                     src="https://images.pokemontcg.io/base5/20.png"
                     alt="imagePokemon" />

                <div className="card-body">
                    <h4>Dark Blastoise</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Types:</span>
                            <span>Water</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Subtype</span>
                            <span>Stage 2</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">ID</span>
                            <span>base5-20</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}