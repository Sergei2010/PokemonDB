import React, { Component } from 'react';

import './card.css';

export default class Card extends Component {

    render() {
        return (

            /*<div className="pokemon-details card">
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
            </div>*/

        <div className="pokemon-details card mb-3">
            <h3 className="card-header">Dark Blastoise</h3>
            <div className="card-body">
                <h5 className="card-title">Types:</h5>
                <h6 className="card-subtitle text-muted">Water</h6>
            </div>
            <div className="pokemon-image">
                <img className=" d-block user-select-none"
                     src="https://images.pokemontcg.io/base5/20_hires.png"
                     alt="imagePokemon" />
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Subtype</li>
                <li className="list-group-item">Stage 2</li>
                <li className="list-group-item">ID</li>
                <li className="list-group-item">base5-20</li>
            </ul>
        </div>

        )
    }
}