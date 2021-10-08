// import { Link } from "react-router-dom";
import { ErrorMsg } from "../../utils/utils";
import { EpisodeCard } from "./EpisodeCard";
import "./episodelist.scss";

function EpisodeList({
  apiDataEpisode,
  error,
  valueNameEpisode,
  valueTypeEpisode,
}) {
  return (
    <>
      {error ? (
        <section>
          <p> No se ha encontrado la búsqueda</p>
          <p> {ErrorMsg(valueNameEpisode, valueTypeEpisode)} </p>
        </section>
      ) : (
        <ul className="episodeUl">
          {apiDataEpisode.map((episodedata) => (
            <li className="episodeUl__li" key={episodedata.id}>
              {/* <Link to={`/episodedetails/${episodedata.id}`}> */}
              <EpisodeCard episodedata={episodedata} />
              {/* </Link> */}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export { EpisodeList };
