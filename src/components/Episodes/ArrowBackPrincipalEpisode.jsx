import { Link } from "react-router-dom";
import "./ArrowBackPrincipalEpisode.scss";

function ArrowBackPrincipalEpisode() {
  return (
    <p className="arrowContainer">
      <Link className="arrowLink" to="/principalepisode" title="volver">
        <i className="far fa-arrow-alt-circle-left arrow"></i>
      </Link>
    </p>
  );
}

export { ArrowBackPrincipalEpisode };
