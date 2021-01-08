export default class ApiPokemonService {

    _apiBase = 'https://api.pokemontcg.io/v1';
    cards;

    getResource = async (url) => {
        //const res = await fetch(`${this._apiBase}${url}`);
        /*if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();*/
        try {
            const res = await fetch(`${this._apiBase}${url}`);
            return res.json();
        } catch (e) {
            //setTimeout(this.getResource, 4000);
            //await this.getResource(url);
            console.log(`you have some mistakes in GETRESOURCE - ${e}`)
        }
    }

    getAllCards = async () => {
        //const res = await this.getResource(`/cards/`);
        /*if (!res) {
            console.log('you have some mistakes in GETALLCARDS...');
            return;
        }*/
        /*return res.cards
            .map(this._transformCard)
            .slice(0, 50);*/

       try {
           const res = await this.getResource(`/cards/`);
           return res.cards
               .map(this._transformCard)
               .slice(0, 50);
       } catch(e) {
           //setTimeout(this.getAllCards, 4000);
           console.log(`you have some mistakes in GETALLCARDS - ${e}`)
       }
    }



    getCardList = async (propName, prop) => {
        //const res = await this.getResource(`/cards/?${propName}=${prop}`);
        //return res.cards;
        try {
            const res = await this.getResource(`/cards/?${propName}=${prop}`);
            return res.cards;
        } catch(e) {
            //setTimeout(this.getCardList, 4000);
            console.log(`you have some mistakes in GETCARDLIST - ${e}`)
        }
    }

    getTypesCardList = async (prop) => {
        /*const res = await this.getResource(`/cards/?types=${prop}`);
        return res.cards
            .map(this._transformTypesCardList)
            .slice(0, 5);*/
        try {
            const res = await this.getResource(`/cards/?types=${prop}`);
            return res.cards
                .map(this._transformTypesCardList)
                .slice(0, 5);
        } catch(e) {
            //setTimeout(this.getTypesCardList, 4000);
            console.log(`you have some mistakes in GETTYPESCARDLIST - ${e}`)
        }
    }

    getSubtypesCardList = async (prop) => {
        /*const res = await this.getResource(`/cards/?subtypes=${prop}`);
        return res.cards
            .map(this._transformSubtypesCardList)
            .slice(0, 5);*/
        try {
            const res = await this.getResource(`/cards/?subtypes=${prop}`);
            return res.cards
                .map(this._transformSubtypesCardList)
                .slice(0, 5);

        } catch(e) {
            //setTimeout(this.getSubtypesCardList, 4000);
            console.log(`you have some mistakes in GETSUBTYPESCARDLIST - ${e}`)
        }
    }

    getCard = async (id) => {
        const res = await this.getResource(`/cards/${id}/`);
        /*if (!res) {
            console.log('you have some mistakes in GETCARD...');
            return;
        }*/
        const {card} = res;
        return this._transformCard(card);
    }

    getAllCardsId = async () => {
       /* const allCardsId = [];
        const res = await this.getAllCards();
        res.forEach((card) => {
            allCardsId.push(card.id);
        });
        return allCardsId;*/
        try{
            const allCardsId = [];
            const res = await this.getAllCards();
            res.forEach((card) => {
                allCardsId.push(card.id);
            });
            return allCardsId;
        } catch (e) {
            console.log(`you have some mistakes in GETALLCARDSID - ${e}`);
        }
    }

    getRandomId = async () => {
        /*const res = await this.getAllCardsId();
        return res[Math.floor(Math.random() * 50)];*/
        try{
            const res = await this.getAllCardsId();
            return res[Math.floor(Math.random() * 50)];
        } catch (e) {
            console.log(`you have some mistakes in GETRANDOMID - ${e}`);
            //setTimeout(await this.getRandomId(), 2000);
        }
    }

    getAllSets() {
        return this.getResource(`/sets/`);
    }

    getSet(id) {
        return this.getResource(`/sets/${id}`);
    }

    getAllTypes = async () => {
        /*const res = await this.getResource(`/types/`);
        return this._transformPropList(res);*/
        try {
            const res = await this.getResource(`/types/`);
            return this._transformPropList(res);
        } catch(e) {
            console.log(`you have some mistakes in GETALLTYPES - ${e}`)
        }
    }

    getAllSubtypes = async () => {
        /*const res = await this.getResource(`/subtypes/`);
        return this._transformPropList(res);*/
        try {
            const res = await this.getResource(`/subtypes/`);
            return this._transformPropList(res);
        } catch(e) {
            console.log(`you have some mistakes in GETALLSUBTYPES - ${e}`)
        }
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
