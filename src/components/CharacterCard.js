import { GetIcon } from "./GetIcon";
import PropTypes from "prop-types";
import "../styles/_characterCard.scss";

function CharacterCard({ card }) {
  return (
    <>
      <img className="img" src={card.image} alt={card.name} />
      <p className="name">Nombre:{card.name}</p>{" "}
      <p className="specie">
        Especie:
        <GetIcon species={card.species} />
      </p>
      <p className="status">Status: {card.status}</p>
    </>
  );
}
export { CharacterCard };

CharacterCard.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.object,
};
