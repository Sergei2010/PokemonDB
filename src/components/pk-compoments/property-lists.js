/*import React from 'react';*/
import PropertyList from '../property-list';
import { withData } from '../hoc-helpers';
import ApiPokemonService from '../../services/api-pokemon-service';

const apiPokemonService = new ApiPokemonService();

const { getAllTypes, getAllSubtypes} = apiPokemonService;


const TypesList = withData(PropertyList, getAllTypes);
const SubtypesList = withData(PropertyList, getAllSubtypes);

export {
    TypesList,
    SubtypesList
};