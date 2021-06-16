function GetDataFromApi() {
  const ENDPOINT = "https://rickandmortyapi.com/api/character";
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((response) =>
      response.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          image: character.image,
          episode: character.episode.length,
          origin: character.origin.name,
        };
      })
    );
}
function GetDataFromApibyName(name) {
  const ENDPOINT = "https://rickandmortyapi.com/api/character/?name=";
  return fetch(ENDPOINT + name)
    .then((response) => response.json())
    .then((response) =>
      response.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          image: character.image,
          episode: character.episode.length,
          origin: character.origin.name,
        };
      })
    );
}

export { GetDataFromApi, GetDataFromApibyName };
