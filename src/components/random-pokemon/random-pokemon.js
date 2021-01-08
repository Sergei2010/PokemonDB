import React, { Component } from 'react';
import ApiPokemonService from '../../services/api-pokemon-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-pokemon.css';

export default class RandomPokemon extends Component {

    apiPokemonService = new ApiPokemonService();

    state = {
        card: {},
        loading: true
    }

    componentDidMount() {
        this.updateCard();
        this.interval = setInterval(
            this.updateCard,
            10000);
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

    updateCard = () => {
        this.apiPokemonService
            .getRandomId()
            .then((id) => {
                this.apiPokemonService
                    .getCard(id)
                    .then(this.onCardLoaded)
                    .catch(this.onError);
            })
    }

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

    const { name, id, number, setCode,
            types, subtype } = card;

    return (
        <React.Fragment>
            <img className="pokemon-image"
                 src={`https://images.pokemontcg.io/${setCode}/${number}.png`}
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
                        <span>{ subtype }</span>
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
        </React.Fragment>
    );
};