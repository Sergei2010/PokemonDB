export default class ApiPokemonService {

    _apiBase = 'https://api.pokemontcg.io/v1';
    cards;
    allCardsId = [];

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }

        return await res.json();
    }

    getAllCards = async () => {
        const res = await this.getResource(`/cards/`);
        return res.cards.map(this._transformCard);
    }

    getCardList = async (propName, prop) => {
        const res = await this.getResource(`/cards/?${propName}=${prop}`);
        return res.cards.map(this._transformCardList);
    }

    getTypesCardList = async (prop) => {
        const res = await this.getResource(`/cards/?types=${prop}`);
        return res.cards.map(this._transformCardList);
    }

    getCard = async (id) => {
        const res = await this.getResource(`/cards/${id}/`);
        const { card } = res;
        return this._transformCard(card);
    }

    getAllCardsId = async () => {
        const res = await this.getAllCards();
        res.forEach((card) => {
            this.allCardsId.push(card.id);
        });
        return this.allCardsId;
    }

    getRandomId = async () => {
        const res = await this.getAllCardsId();
        return res[Math.floor(Math.random()*100)];
    }

    getAllSets() {
        return this.getResource(`/sets/`);
    }

    getSet(id) {
        return this.getResource(`/sets/${id}`);
    }

    getAllTypes = async () => {
        const res = await this.getResource(`/types/`)
        return res.types;
    }

    getAllSubtypes = async () => {
        const res = await this.getResource(`/subtypes/`)
        return res.subtype;
    }

    getAllSupertypes() {
        return this.getResource(`/supertypes/`);
    }

    _transformCard = (card) => {
        return {
            id: card.id,
            name: card.name,
            number: card.number,
            setCode: card.setCode,
            types: card.types,
            subtype: card.subtype
        }
    }

    _transformCardList = (card) => {
        return {
            id: card.id,
            types: card.types[0],
            imageUrl: card.imageUrl
        }
    }
}