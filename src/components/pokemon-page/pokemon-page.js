import React, { Component } from 'react';

import PropertyList from '../property-list/property-list';
import CardList from '../card-list/card-list';
import ErrorIndicator from '../error-indicator/error-indicator';
import ApiPokemonService from '../../services/api-pokemon-service';

import './pokemon-page.css';

export default class PokemonPage extends Component {

    apiPokemonService = new ApiPokemonService();

    state = {
        selectedTypes: null,
        hasError: false
    };

    componentDidCatch(error, info) {

        this.setState({
            hasError: true
        });
    }

    onPropSelected = (name) => {
        this.setState({
            selectedTypes: name
        });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return (
            <div className="row mb2">
                <div className="col-md-3">
                    <PropertyList
                        onPropSelected={this.onPropSelected}
                        getData={this.apiPokemonService.getAllTypes}/>
                </div>
                <div className="col-md-9">
                    <CardList propName={this.state.selectedTypes} />
                </div>
            </div>
        );
    }
}