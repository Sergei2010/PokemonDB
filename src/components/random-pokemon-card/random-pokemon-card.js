import React, { Component, Fragment } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-pokemon-card.css';

export default class RandomPokemonCard extends Component {

    _apiBase = 'https://api.pokemontcg.io/v1/cards/';

    state = {
        card: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateCard()
            .then(() => this.interval = setInterval(this.updateCard, 10000));
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    onCardLoaded = (card) => {
        this.setState({
            card,
            loading: false,
            error: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
        console.log(`you have some error - ${err}`);
    };

    updateCard = async () => {
        try{
            let res = await fetch(this._apiBase);
            res = await res.json();
            let card = await Object.values(res)[0].map(this._transformAllCards)[Math.floor(Math.random() * 100)];
            this.onCardLoaded(card);
        } catch (err) {
            this.onError(err)
        }
    }

    _transformAllCards = (card) => {
        return {
            id: card.id,
            name: card.name,
            imageUrl: card.imageUrl,
            types: card.types,
            subtypes: card.subtype,
            number: card.number,
            setCode: card.setCode
        };
    };

    render() {

        const { card, loading, error } = this.state;
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <CardView card={card} /> : null;

        return (
            <div className="random-pokemon jumbotron rounded">
                { errorMessage }
                { spinner }
                { content }
            </div>

        );
    }
}

const CardView = ({ card }) => {

    const { imageUrl, name, id, types, subtypes, number, setCode } = card;

    return (
        <Fragment>
            <img className="pokemon-image"
                 src={ imageUrl }
                 alt="imageRandom"/>
            <div className="m-3 w-50">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Types: </span>
                        <span>{ types }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Subtype: </span>
                        <span>{ subtypes }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">ID: </span>
                        <span>{ id }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Number: </span>
                        <span>{ number }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">setCode: </span>
                        <span>{ setCode }</span>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};