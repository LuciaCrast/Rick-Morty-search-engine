import { Link } from "react-router-dom";
import "./ArrowBackPrincipalCharacter.scss";

function ArrowBackPrincipalCharacter() {
  return (
    <p className="arrowContainer">
      <Link className="arrowLink" to="/principalcharacter" title="volver">
        <i className="far fa-arrow-alt-circle-left arrow"></i>
      </Link>
    </p>
  );
}

export { ArrowBackPrincipalCharacter };
