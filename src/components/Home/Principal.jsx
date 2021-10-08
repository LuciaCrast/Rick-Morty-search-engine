import { Link } from "react-router-dom";
import { Header } from "../Common/Header";
import "./principal.scss";

function Principal() {
  return (
    <>
      <Header />
      <section className="container">
        <Link to="/principalcharacter" className="container__link">
          Buscar por Personaje
        </Link>
        <Link to="/principallocation" className="container__link">
          Buscar por Localización
        </Link>
        <Link to="/principalepisode" className="container__link">
          Buscar por Episodios
        </Link>
      </section>
    </>
  );
}

export { Principal };
