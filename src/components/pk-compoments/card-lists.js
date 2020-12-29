import React from 'react';
import CardList from '../card-list';
/*import ApiPokemonService from '../../services/api-pokemon-service';*/
/*import ErrorButton from "../error-button";*/

/*
const apiPokemonService = new ApiPokemonService();
*/

/*
const {
    getTypesCardList,
    getSubtypesCardList
} = apiPokemonService;
*/

const CardTypesList = (props) => {

    const { propName } = props;
    //console.log(`forTypes - ${propName}`);

    return(
        <CardList propName={propName} />
    )
};

const CardSubtypesList = () => {

    return(
        <CardList />
    )
}

export {
    CardTypesList,
    CardSubtypesList
};