
import Card from '../card';
import { withDataCard } from '../hoc-helpers';
import ApiPokemonServiceUpdate from '../../services/api-pokemon-service-update';

const apiPokemonServiceUpdate = new ApiPokemonServiceUpdate();

const {
    getCard
} = apiPokemonServiceUpdate;

const CardPage = withDataCard(Card, getCard);

export {
    CardPage
};