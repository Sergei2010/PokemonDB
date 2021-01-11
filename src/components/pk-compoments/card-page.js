
import Card from '../card';
import { withDataCard } from '../hoc-helpers';
import ApiPokemonService from '../../services/api-pokemon-service';

const apiPokemonService = new ApiPokemonService();

const {
    getCard
} = apiPokemonService;

const CardPage = withDataCard(Card, getCard);

export {
    CardPage
};