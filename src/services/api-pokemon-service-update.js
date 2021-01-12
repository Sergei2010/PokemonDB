export default class ApiPokemonServiceUpdate {

    _apiBase = 'https://api.pokemontcg.io/v1';
    _apiBaseCards = this._apiBase + '/cards/';
    _apiTypes = this._apiBase + '/types/';
    _apiSubtypes = this._apiBase + '/subtypes/';
    _apiTypesCardList = this._apiBaseCards + '/?types=';
    _apiSubtypesCardList = this._apiBaseCards + '/?subtype=';

    getResource = async (url) => {
        try {
            const res = await fetch(`${this._apiBase}${url}`);
            return res.json();
        } catch (e) {
            console.log(`you have some mistakes in GETRESOURCE - ${e}`)
        }
    }

    getAllCards = async () => {
        try {
            const res = await this.getResource(`/cards/`);
            return res.cards
                .map(this._transformCard)
                .slice(0, 50);
        } catch(e) {
            console.log(`you have some mistakes in GETALLCARDS - ${e}`)
        }
    }

    getCardList = async (propName, prop) => {
        try {
            const res = await this.getResource(`/cards/?${propName}=${prop}`);
            return res.cards;
        } catch(e) {
            console.log(`you have some mistakes in GETCARDLIST - ${e}`)
        }
    }

    getTypesCardList = async (prop) => {
        try {
            let res = await fetch(this._apiTypesCardList+`${prop}`);
            res = await res.json();
            return Object.values(res)[0].map(this._transformTypesCardList).slice(0,10);
        } catch(err) {
            console.log(`you have some mistakes in GETTYPESCARDLIST - ${err}`)
        }
    }

    getSubtypesCardList = async (prop) => {
        try {
            let res = await fetch(this._apiSubtypesCardList+`${prop}`);
            res = await res.json();
            return Object.values(res)[0].map(this._transformSubtypesCardList).slice(0,10);
        } catch(err) {
            console.log(`you have some mistakes in GETSUBTYPESCARDLIST - ${err}`);
        }
    }

    updateCard = async () => {
        let res = await fetch(this._apiBaseCards);
        res = await res.json();
        return await Object.values(res)[0].map(this._transformAllCards)[Math.floor(Math.random() * 100)];
    }

    getCard = async (id) => {
        const res = await this.getResource(`/cards/${id}/`);
        const {card} = res;
        return this._transformCard(card);
    }

    getAllTypes = async () => {
        try {
            let res = await fetch(this._apiTypes);
            res = await res.json();
            return this._transformPropList(res);
        } catch(e) {
            console.log(`you have some mistakes in GETALLTYPES - ${e}`)
        }
    }

    getAllSubtypes = async () => {
        try {
            let res = await fetch(this._apiSubtypes);
            res = await res.json();
            return this._transformPropList(res);
        } catch(e) {
            console.log(`you have some mistakes in GETALLSUBTYPES - ${e}`)
        }
    }

    _transformCard = (card) => {
        return {
            id: card.id,
            name: card.name,
            imageUrlHiRes: card.imageUrlHiRes,
            types: card.types,
            subtypes: card.subtype,
            number: card.number,
            setCode: card.setCode
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
            subtype: card.subtype[0],
            imageUrl: card.imageUrl
        };
    };

    _transformPropList = (res) => {
        return {
            propName: Object.keys(res)[0],
            propList: Object.values(res)[0]
        }
    };

    _transformAllCards = (card) => {
        return {
            id: card.id,
            name: card.name,
            imageUrl: card.imageUrl,
            types: card.types,
            subtypes: card.subtype,
            number: card.number,
            setCode: card.setCode
        };
    };
};
