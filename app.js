const getPokemonData = (url) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      const requestOk = request.status === 200 && request.readyState === 4;
      const requestNotOk = request.readyState === 4;

      if (requestOk) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (requestNotOk) {
        reject("Ocorreu um error");
      }
    });
    request.open("GET", url);
    request.send();
  });

getPokemonData(`https://pokeapi.co/api/v2/pokemon/1`)
  .then((bulbasaur) => {
    console.log(bulbasaur);
    return getPokemonData(`https://pokeapi.co/api/v2/pokemon/4`);
  })
  .then((charmander) => {
    console.log(charmander);
    return getPokemonData(`https://pokeapi.co/api/v2/pokemon/7`);
  })
  .then(console.log)
  .catch((error) => console.log(error));
