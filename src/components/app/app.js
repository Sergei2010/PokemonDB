import React, { Component } from 'react';

import Header from '../header';
import RandomPokemon from '../random-pokemon';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator';
import PokemonPage from '../pokemon-page/pokemon-page';
import PropertyList from '../property-list';
import CardList from "../card-list";
import ApiPokemonService from '../../services/api-pokemon-service';

import './app.css';

export default class App extends Component {

    apiPokemonService = new ApiPokemonService();

    state = {
        showRandomPokemon: true,
        hasError: false
    };

    toggleRandomPokemon = () => {
        this.setState((state) => {
            return {
                showRandomPokemon: !state.showRandomPokemon
            }
        });
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const pokemon = this.state.showRandomPokemon ?
            <RandomPokemon /> :
            null;

        return (
            <div className="pokemondb-app">
                <Header />
                { pokemon }

                <div className="row mb2 button-row">
                    <button
                        className="toggle-pokemon btn btn-warning btn-lg"
                        onClick={this.toggleRandomPokemon}>
                        Toggle Random Pokemon
                    </button>
                    <ErrorButton />
                </div>

                <PokemonPage />

                <div className="row mb2">
                    <div className="col-md-3">
                        <PropertyList
                            onPropSelected={this.onPropSelected}
                            getData={this.apiPokemonService.getAllTypes} />
                    </div>
                    <div className="col-md-9">
                        <CardList propName={this.state.selectedTypes} />
                    </div>
                </div>

            </div>
        );
    }
}