import React, { Component, Suspense } from 'react';
import Header from '../header';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import {
    TypesList,
    SubtypesList,
    CardTypesList,
    CardSubtypesList
} from '../pk-compoments';

import Spinner from "../spinner";
import { CardPage } from "../pk-compoments/card-page";
import RandomPokemonCard from "../random-pokemon-card";
import { ApiServiceProvider } from '../api-service-context';
//import classNames from 'classnames';

import './app.css';

export default class App extends Component {

    state = {
        showRandomPokemon: true,
        hasError: false,
        name: null,
        propName: null,
        itemClicked: false,
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

    onPropSelected = (name, propName, itemClicked) => {
        this.setState({
            name,
            propName,
            itemClicked: true
        });
        //classNames("list-group-item", "list-group-item-clicked");
    };

    onCardSelected = (id) => {
        this.setState({
            id
        });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const pokemon = this.state.showRandomPokemon ?
            <RandomPokemonCard /> :
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
                <ApiServiceProvider value={ this.apiService }>
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
                        </div>

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

                    </div>
                </ApiServiceProvider>
            </ErrorBoundry>

        );
    }
}