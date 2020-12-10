

const getResource = async(url) => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
}

getResource('https://api.pokemontcg.io/v1/cards?subtype=Basic')
.then((body) => {
    console.log(body);
});