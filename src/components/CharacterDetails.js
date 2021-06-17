import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CharacterCard } from "./CharacterCard";
import PropTypes from "prop-types";

function CharacterDetail({ data }) {
  let { id } = useParams();
  const character = data.find((person) => person.id.toString() === id);
  if (character) {
    return (
      <div className="bodyDetails">
        <p className="arrowContainer">
          <Link to="/">
            <i className="far fa-arrow-alt-circle-left arrowLink">Volver</i>
          </Link>
        </p>
        <div className="details">
          <CharacterCard card={character} />
          <p className="text">Episodios: {character.episode}</p>
          <p className="text">{character.origin}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bodyDetails">
        <Link to="/">
          <i className="far fa-arrow-alt-circle-left"></i> Volver
        </Link>
        <p>Personaje no encontrado</p>
      </div>
    );
  }
}
export { CharacterDetail };

CharacterDetail.propTypes = {
  episode: PropTypes.number,
  origin: PropTypes.string,
};
