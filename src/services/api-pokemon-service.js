export default class ApiPokemonService {

    _apiBase = 'https://api.pokemontcg.io/v1';
    cards;


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
        return await res.cards
            .map(this._transformCard);
    }

    getCardList = async (propName, prop) => {
        const res = await this.getResource(`/cards/?${propName}=${prop}`);
        return res.cards;
    }

    getTypesCardList = async (prop) => {
        const res = await this.getResource(`/cards/?types=${prop}`);
        return res.cards
            .map(this._transformTypesCardList)
            .slice(0, 5);
    }

    getSubtypesCardList = async (prop) => {
        const res = await this.getResource(`/cards/?subtypes=${prop}`);
        return res.cards
            .map(this._transformSubtypesCardList)
            .slice(0, 5);
    }

    getCard = async (id) => {
        const res = await this.getResource(`/cards/${id}/`);
        const {card} = res;
        return this._transformCard(card);
    }

    getAllCardsId = async () => {
        const allCardsId = [];
        const res = await this.getAllCards();
        res.forEach((card) => {
            allCardsId.push(card.id);
        });
        return allCardsId;
    }

    getRandomId = async () => {
        const res = await this.getAllCardsId();
        return res[Math.floor(Math.random() * 50)];
    }

    getAllSets() {
        return this.getResource(`/sets/`);
    }

    getSet(id) {
        return this.getResource(`/sets/${id}`);
    }

    getAllTypes = async () => {
        const res = await this.getResource(`/types/`);
        return this._transformPropList(res);
    }

    getAllSubtypes = async () => {
        const res = await this.getResource(`/subtypes/`);
        return this._transformPropList(res);
    }

    /*getAllSupertypes() {
        return this.getResource(`/supertypes/`);
    }*/

    _transformCard = (card) => {
        return {
            id: card.id,
            name: card.name,
            number: card.number,
            setCode: card.setCode,
            types: card.types,
            subtypes: card.subtype
        };
    };

    _transformTypesCardList = (card) => {
        return {
            id: card.id,
            types: card.types[0],
            imageUrl: card.imageUrl
        };
    };

    _transformSubtypesCardList = (card) => {
        return {
            id: card.id,
            subtypes: card.subtype[0],
            imageUrl: card.imageUrl
        };
    };

    _transformPropList = (res) => {
        return {
            propName: Object.keys(res)[0],
            propList: Object.values(res)[0]
        }
    };
};
