const getPokemonData = (url, callback)=>{
    const request = new XMLHttpRequest();
    //debugger;
    request.addEventListener('readystatechange', ()=>{
        const requestOk = request.status === 200 && request.readyState === 4;
        const requestNotOk = request.readyState === 4;
   
        if(requestOk){
            const data = JSON.parse(request.responseText);
            callback(null, data);
            return;

        }else if(requestNotOk){
            callback("Ocorreu um error", null);
        }
 });
 request.open('GET', url);
 request.send();
}

const logPokemonData = (error, data)=> 
error?console.log(error):console.log(`Pokemon obtido: ${data.name}`);

const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

const bulbasaur = getPokemonUrl(1);
const charmander = getPokemonUrl(4);
const squirtle = getPokemonUrl(7)

getPokemonData(bulbasaur, (error,data)=>{
 logPokemonData(error, data);
 getPokemonData(charmander,(error, data)=>{
   logPokemonData(error, data);
 })
 getPokemonData(squirtle ,(error, data)=>logPokemonData(error, data))
});