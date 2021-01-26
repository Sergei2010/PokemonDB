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

import Spinner from '../spinner';
import { CardPage } from '../pk-compoments/card-page';
import RandomPokemonCard from '../random-pokemon-card';
import { ApiServiceProvider } from '../api-service-context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

export default class App extends Component {

    state = {
        showRandomPokemon: true,
        hasError: false,
        name: null,
        propName: null,
        id: null,
        card: null
    };

    /*toggleRandomPokemon = () => {
        this.setState((state) => {
            return {
                showRandomPokemon: !state.showRandomPokemon
            }
        });
    };*/

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
        /*classNames("list-group-item", "list-group-item-clicked");*/
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

        const types = () => {
            return (<Suspense fallback={<Spinner />}>
                        <Row
                            left={ <TypesList onPropSelected={this.onPropSelected} /> }
                            right={ cardTypesShow } />
                    </Suspense>)
        }

        const subtypes = () => {
            return (<Suspense fallback={<Spinner />}>
                    <Row
                        left={ <SubtypesList onPropSelected={this.onPropSelected} /> }
                        right={ cardSubtypesShow } />
                    </Suspense>)
        }

        const cardpage = () => {
            return (<Suspense fallback={<Spinner />}>
                        <CardPage id={id} card={card} />
                    </Suspense>)
        }

        return (

            <ErrorBoundry>
                <ApiServiceProvider value={ this.apiService }>
                   <Router>
                        <div className="pokemondb-app">
                        <ErrorBoundry>
                            <Header />
                        </ErrorBoundry>

                        {/*{ pokemon }*/}

                        <Route exact path='/' render={() => pokemon}  />
                        <Route path="/types" render={() => types()} />
                        <Route path="/subtypes" render={() => subtypes()} />
                        <Route path="/card" render={() => cardpage()} />
                        <Route path="/exit" render={() => <h1>Exit</h1>} />

                        {/*<CardPage id={id} card={card} />*/}

                        {/*{ cardpage() }*/}

                        {/*<div className="row mb2 button-row">
                            <button
                                className="toggle-pokemon btn btn-warning btn-lg"
                                onClick={this.toggleRandomPokemon}>
                                Toggle Random Pokemon
                            </button>
                        </div>

                        <Suspense fallback={<Spinner />}>
                            <Row
                                left={ <TypesList onPropSelected={this.onPropSelected} /> }
                                right={ CardTypesShow } />
                        </Suspense>

                        <Suspense fallback={<Spinner />}>
                            <Row
                                left={ <SubtypesList onPropSelected={this.onPropSelected} /> }
                                right={ CardSubtypesShow } />
                        </Suspense>*/}

                        {/*<CardPage id={id} card={card} />*/}

                    </div>
                   </Router>
                </ApiServiceProvider>
            </ErrorBoundry>

        );
    }
}