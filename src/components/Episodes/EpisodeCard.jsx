function EpisodeCard({ episodedata }) {
  return (
    <>
      <p className="episodeUl__paragraph"> Nombre: {episodedata.name}</p>
      <p className="episodeUl__paragraph">Nº Episodio: {episodedata.episode}</p>
      <p className="episodeUl__paragraph">Lanzamiento: {episodedata.airDate}</p>
      <p className="episodeUl__paragraph">
        Nº Personajes: {episodedata.characters}
      </p>
    </>
  );
}

export { EpisodeCard };
