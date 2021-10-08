import { Link } from "react-router-dom";
import "./ArrowBackPrincipalLocation.scss";

function ArrowBackPrincipalLocation() {
  return (
    <p className="arrowContainer">
      <Link className="arrowLink" to="/principallocation" title="volver">
        <i className="far fa-arrow-alt-circle-left arrow"></i>
      </Link>
    </p>
  );
}

export { ArrowBackPrincipalLocation };
