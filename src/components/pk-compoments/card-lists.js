
import CardList from '../card-list';
import { withDataCardList } from '../hoc-helpers';
import ApiPokemonServiceUpdate from '../../services/api-pokemon-service-update';

const apiPokemonServiceUpdate = new ApiPokemonServiceUpdate();

const {
    getTypesCardList,
    getSubtypesCardList
} = apiPokemonServiceUpdate;

const CardTypesList = withDataCardList(CardList, getTypesCardList);

const CardSubtypesList = withDataCardList(CardList, getSubtypesCardList);

export {
    CardTypesList,
    CardSubtypesList
};