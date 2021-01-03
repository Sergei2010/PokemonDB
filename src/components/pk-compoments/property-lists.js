/*import React from 'react';*/
import PropertyList from '../property-list';
import { withDataPropList } from '../hoc-helpers';
import ApiPokemonService from '../../services/api-pokemon-service';

const apiPokemonService = new ApiPokemonService();

const { getAllTypes, getAllSubtypes} = apiPokemonService;


const TypesList = withDataPropList(PropertyList, getAllTypes);
const SubtypesList = withDataPropList(PropertyList, getAllSubtypes);

export {
    TypesList,
    SubtypesList
};