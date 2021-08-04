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

function GetDataDetailsCharacter(id) {
  const ENDPOINT = "https://rickandmortyapi.com/api/character/";
  return fetch(ENDPOINT + id)
    .then((response) => response.json())
    .then((response) => {
      if (response.error) throw new Error(response.error);
      return {
        id: response.id,
        name: response.name,
        status: response.status,
        species: response.species,
        image: response.image,
        episode: response.episode.length,
        origin: response.origin.name,
      };
    });
}

export { GetDataFromApi, GetDataFromApibyName, GetDataDetailsCharacter };
