import React, { Component, Suspense, Fragment } from 'react';
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
//import { ApiServiceProvider } from '../api-service-context';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//import { createBrowserHistory } from 'history';


//import Authorization from '../authorization';
//import OneTimePassword from '../one-time-password';
import { AuthProvider } from '../../Auth';
import { PrivateRoute } from '../../PrivateRoute';
import { Nav, NavLink } from '../../components/index';
import Public from '../Public';
import Login from '../Login';
import Private from '../Private';
import Callback from '../Callback';

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
    };

    onCardSelected = (id) => {
        this.setState({
            id
        });
    }

    render() {

        const to = "/public";

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const pokemon = this.state.showRandomPokemon ?
            <Fragment>
                <Header />
                <RandomPokemonCard />
            </Fragment>
             :
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

        //const customHistory = createBrowserHistory();

        const { name, propName, id, card } = this.state;
        //console.log(`name from state - ${name}`);
        //console.log(`propName from state - ${propName}`);

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
                        <Header />
                        <Row
                            left={ <TypesList onPropSelected={this.onPropSelected} /> }
                            right={ cardTypesShow } />
                    </Suspense>)
        }

        const subtypes = () => {
            return (<Suspense fallback={<Spinner />}>
                    <Header />
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
                <Router exact path="/">
                    <AuthProvider>
                        <Nav>
                            <NavLink to="/public" component={ NavLink }>
                                Public
                            </NavLink>
                            <NavLink to="/private">
                                Private
                            </NavLink>
                        </Nav>

                        <div className="pokemondb-app">
                            <Switch>
                                {/*<Route exact path='/' render={() => Authorization()}  />
                                <Route exact path='/otp' component={OneTimePassword}  />
                                <Route exact path='/rp' render={() => pokemon}  />
                                <Route path="/types" render={() => types()} />
                                <Route path="/subtypes" render={() => subtypes()} />
                                <Route path="/card" render={() => cardpage()} />
                                <Route path="/exit" render={() => <h1>Exit</h1>} />*/}
                                <Route path="/public" component={ Public } />
                                <Route path="/login" component={ Login } />
                                <Route path="/callback" component={ Callback } />
                                <PrivateRoute path="/private" component={ Private } />
                                <Redirect to="/public" />
                            </Switch>
                        </div>
                    </AuthProvider>
                </Router>
            </ErrorBoundry>
        );
    }
}