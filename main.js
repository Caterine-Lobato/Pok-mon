const CARDS = 3;

//Peticion de pokemones al API
console.log();

for (let i = 1; i <= CARDS; i++){
    let id = getRandomId(150) //
    searchPokemonById (id);
}

function getRandomId(max){
    return Math.floor(Math.random()*max)+1
}


async function searchPokemonById(id){
    
    const res =await fetch(`https://pokeapi.co/api/v2/ability/${id}/`)
    const data = await res.json()  //.json para transformar la info pedida en un objeto(metodo de res)
    console.log(data)
}



