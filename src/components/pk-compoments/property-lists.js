/*import React from 'react';*/
import PropertyList from '../property-list';
import { withDataPropList } from '../hoc-helpers';
import ApiPokemonServiceUpdate from '../../services/api-pokemon-service-update';

const apiPokemonServiceUpdate = new ApiPokemonServiceUpdate();

const { getAllTypes, getAllSubtypes} = apiPokemonServiceUpdate;


const TypesList = withDataPropList(PropertyList, getAllTypes);
const SubtypesList = withDataPropList(PropertyList, getAllSubtypes);

export {
    TypesList,
    SubtypesList
};