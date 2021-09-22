import { Link } from "react-router-dom";
import { Header } from "../Common/Header";
import "./principal.scss";

function Principal() {
  return (
    <>
      <Header />
      <Link to="/principalcharacter" className="link">
        Buscar por Personaje
      </Link>
      <Link to="/principallocation" className="link">
        Buscar por Localización
      </Link>
    </>
  );
}

export { Principal };
