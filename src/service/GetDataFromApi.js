function GetDataFromApiCharacter(params = {}) {
  const ENDPOINT = "https://rickandmortyapi.com/api/character";
  const searchParams = new URLSearchParams();
  for (let fieldName in params) {
    if (params[fieldName]) {
      searchParams.append(fieldName, params[fieldName]);
    }
  }
  return fetch(ENDPOINT + "?" + searchParams.toString())
    .then((response) => response.json())
    .then((response) => {
      const characterArray = response.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          image: character.image,
        };
      });
      return { characterArray, totalPages: response.info.pages };
    });
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

function GetDataFromApiLocation(params = {}) {
  const ENDPOINT = "https://rickandmortyapi.com/api/location";
  const searchParams = new URLSearchParams();
  for (let fieldName in params) {
    if (params[fieldName]) {
      searchParams.append(fieldName, params[fieldName]);
    }
  }
  return fetch(ENDPOINT + "?" + searchParams.toString())
    .then((response) => response.json())
    .then((response) => {
      const locationArray = response.results.map((location) => {
        return {
          id: location.id,
          name: location.name,
          type: location.type,
          dimension: location.dimension,
          residents: location.dimension.length,
        };
      });
      return { locationArray, totalPages: response.info.pages };
    });
}

export {
  GetDataFromApiCharacter,
  GetDataDetailsCharacter,
  GetDataFromApiLocation,
};
