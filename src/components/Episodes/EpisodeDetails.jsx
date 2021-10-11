import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { EpisodeCard } from "./EpisodeCard";
import { GetDataDetailsEpisode } from "../../service/GetDataFromApi";
import { ArrowBackPrincipalEpisode } from "./ArrowBackPrincipalEpisode";
import "./episodeDetails.scss";

function EpisodeDetails() {
  let { id } = useParams();
  const [episodeData, setEpisodeData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    GetDataDetailsEpisode(id)
      .then((episode) => {
        setEpisodeData(episode);
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  if (episodeData) {
    return (
      <>
        <ArrowBackPrincipalEpisode />
        <section className="detailsEpisode">
          <EpisodeCard episodedata={episodeData} />
        </section>
      </>
    );
  } else if (error) {
    return (
      <div>
        <ArrowBackPrincipalEpisode />
        <p> No se ha encontrado la localización </p>
      </div>
    );
  } else {
    return <p> Cargando... </p>;
  }
}

export { EpisodeDetails };
