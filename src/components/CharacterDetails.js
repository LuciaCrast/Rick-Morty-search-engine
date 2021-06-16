import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CharacterCard } from "./CharacterCard";
import PropTypes from "prop-types";

function CharacterDetail({ data }) {
  let { id } = useParams();
  const character = data.find((person) => person.id.toString() === id);
  if (character) {
    return (
      <>
        <p className="arrowLink">
          <Link to="/">
            <i className="far fa-arrow-alt-circle-left">Volver</i>
          </Link>
        </p>
        <div className="details">
          <CharacterCard card={character} />
          <p className="text">Número de episodios:{character.episode}</p>
          <p className="text">Procedencia:{character.origin}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Link to="/">
          <i className="far fa-arrow-alt-circle-left"></i>Volver
        </Link>
        <p>Personaje no encontrado</p>
      </>
    );
  }
}
export { CharacterDetail };

CharacterDetail.propTypes = {
  episode: PropTypes.number,
  origin: PropTypes.string,
};
