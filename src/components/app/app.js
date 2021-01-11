import React, { Component, Suspense } from 'react';

import Header from '../header';
import RandomPokemon from '../random-pokemon';
//import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import {
    TypesList,
    SubtypesList,
    CardTypesList,
    CardSubtypesList
} from '../pk-compoments';
import Card from "../card";

import './app.css';
import Spinner from "../spinner";
import {CardPage} from "../pk-compoments/card-page";
import RandomPokemonCard from "../random-pokemon-card";
/*import PokemonPage from "../pokemon-page/pokemon-page";*/

export default class App extends Component {

    state = {
        showRandomPokemon: true,
        hasError: false,
        name: null,
        propName: null,
        id: null,
        card: null
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

    onCardSelected = (id, card) => {
        this.setState({
            id
        });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const pokemon = this.state.showRandomPokemon ?
            <RandomPokemon /> :
            null;

        const Row = ({ left, right }) => {
            return(
                <div className="row mb2">
                    <div className="col-md-3">
                        { left }
                    </div>
                    <div className="col-md-9">
                        { right }
                    </div>
                </div>
            )
        };

        const { name, propName, id, card } = this.state;
        //console.log(`name - ${name}`);
        //console.log(`propName - ${propName}`);

        let cardTypesShow;
        let cardSubtypesShow;

        if (propName === 'types') {
            cardTypesShow = <CardTypesList
                                propName={propName}
                                name={name}
                                onCardSelected={this.onCardSelected} />
        }
        else if (propName === 'subtypes') {
            cardSubtypesShow =  <CardSubtypesList
                                    propName={propName}
                                    name={name}
                                    onCardSelected={this.onCardSelected} />
        }

        return (
            <ErrorBoundry>
                <div className="pokemondb-app">
                    <ErrorBoundry>
                        <Header />
                    </ErrorBoundry>

                    {/*<ErrorBoundry>
                        { pokemon }
                    </ErrorBoundry>*/}

                    {/*<Suspense fallback={<Spinner />}>
                       { pokemon }
                    </Suspense>*/}

                    <RandomPokemonCard />

                    <div className="row mb2 button-row">
                        <button
                            className="toggle-pokemon btn btn-warning btn-lg"
                            onClick={this.toggleRandomPokemon}>
                            Toggle Random Pokemon
                        </button>
                    </div>

                    {/*<PokemonPage />*/}

                    {/*<TypesList onPropSelected={this.onPropSelected} />
                    <SubtypesList onPropSelected={this.onPropSelected} />*/}
                    {/*<CardList propName={this.state.propName}/>*/}

                    {/*{ cardShow }*/}

                    <Suspense fallback={<Spinner />}>
                            <Row
                                left={ <TypesList onPropSelected={this.onPropSelected} /> }
                                right={ cardTypesShow } />
                    </Suspense>

                    <Suspense fallback={<Spinner />}>
                        <Row
                            left={ <SubtypesList onPropSelected={this.onPropSelected} /> }
                            right={ cardSubtypesShow } />
                    </Suspense>

                    <CardPage id={id} card={card} />

                    <Card id={id} />

                </div>
            </ErrorBoundry>
        );
    }
}