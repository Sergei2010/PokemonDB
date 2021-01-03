import React, { Component } from 'react';

import Header from '../header';
import RandomPokemon from '../random-pokemon';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import {
    TypesList,
    SubtypesList,
    CardTypesList,
    CardSubtypesList
} from '../pk-compoments';

import './app.css';
/*import PokemonPage from "../pokemon-page/pokemon-page";*/

export default class App extends Component {

    state = {
        showRandomPokemon: true,
        hasError: false,
        name: null,
        propName: null
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

    onPropSelected = (name, propName) => {
        this.setState({
            name,
            propName
        });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const pokemon = this.state.showRandomPokemon ?
            <RandomPokemon /> :
            null;

        const { name, propName } = this.state;
        //console.log(`name - ${name}`);
        //console.log(`propName - ${propName}`);

        return (
            <ErrorBoundry>
                <div className="pokemondb-app">
                    <ErrorBoundry>
                        <Header />
                    </ErrorBoundry>

                    { pokemon }

                    <div className="row mb2 button-row">
                        <button
                            className="toggle-pokemon btn btn-warning btn-lg"
                            onClick={this.toggleRandomPokemon}>
                            Toggle Random Pokemon
                        </button>
                        <ErrorButton />
                    </div>

                    {/*<PokemonPage />*/}

                    <TypesList onPropSelected={this.onPropSelected} />
                    <SubtypesList onPropSelected={this.onPropSelected} />
                    {/*<CardList propName={this.state.propName}/>*/}

                    <CardTypesList propName={propName} name={name} />
                    <CardSubtypesList propName={propName} name={name} />

                </div>
            </ErrorBoundry>
        );
    }
}