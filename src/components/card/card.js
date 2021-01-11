import React from 'react';

import './card.css';

const Card = (props) => {

    const { id, card } = props;

    //console.log(props);
    if (!card) return null;
    if (card) {
        const { name, types, subtypes, imageUrlHiRes } = card;
        //console.log(`id - ${id}`);
        //console.log(`name - ${name}`);
        //console.log(`imageUrlHiRes - ${imageUrlHiRes}`);
        //console.log(`types - ${types}`);
        //console.log(`subtypes - ${subtypes}`);

        return (
            <div className="pokemon-details card mb-3">
                <h3 className="card-header">{ name }</h3>
                <div className="card-body">
                    <h5 className="card-title">Types: { types }</h5>
                </div>
                <div className="pokemon-image">
                    <img className=" d-block user-select-none"
                         src={ imageUrlHiRes }
                         alt="imagePokemon" />
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Subtype: { subtypes }</li>
                    <li className="list-group-item">ID: { id }</li>
                </ul>
            </div>
        )
    }
}

export default Card;