import React, { Component } from 'react';

import PropertyList from '../property-list/property-list';
import CardList from '../card-list/card-list';
import ErrorIndicator from '../error-indicator/error-indicator';
import ApiPokemonServiceUpdate from '../../services/api-pokemon-service-update';
import ErrorBoundry from "../error-boundry";

import './pokemon-page.css';

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

export default class PokemonPage extends Component {

    apiPokemonServiceUpdate = new ApiPokemonServiceUpdate();

    state = {
        selectedTypes: null,
        propName: 'types',
        hasError: false
    };

    onPropSelected = (name) => {
        this.setState({
            selectedTypes: name
        });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const propertyList = (
            <PropertyList
                onPropSelected={this.onPropSelected}
                getData={this.apiPokemonServiceUpdate.getAllTypes} />
        );

        const cardList = (
            <ErrorBoundry>
                <CardList propName={this.state.selectedTypes} />
            </ErrorBoundry>
        );

        return (
            <ErrorBoundry>
                <Row left={ propertyList } right={ cardList } />
            </ErrorBoundry>
        );
    }
}