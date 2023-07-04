const fetch = require('node-fetch');

fetchData = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data = await response.json();
        console.log(data);
    }
    catch (err) {
        console.error(err);
    }
}

fetchData();