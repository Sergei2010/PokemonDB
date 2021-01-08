
import CardList from '../card-list';
import { withDataCardList } from '../hoc-helpers';
import ApiPokemonService from '../../services/api-pokemon-service';

const apiPokemonService = new ApiPokemonService();

const {
    getTypesCardList,
    getSubtypesCardList
} = apiPokemonService;

const CardTypesList = withDataCardList(CardList, getTypesCardList);

const CardSubtypesList = withDataCardList(CardList, getSubtypesCardList);

export {
    CardTypesList,
    CardSubtypesList
};