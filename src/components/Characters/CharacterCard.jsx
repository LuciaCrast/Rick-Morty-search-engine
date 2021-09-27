import { GetIcon, GetIconDead } from "../Common/GetIcon";
import "./characterCard.scss";

function CharacterCard({ card }) {
  return (
    <>
      <img className="img" src={card.image} alt={card.name} />
      <p className="text">Nombre: {card.name}</p>{" "}
      <p className="text">
        Especie: <GetIcon species={card.species} />
      </p>
      <p className="text">
        Status: <GetIconDead status={card.status} />{" "}
      </p>
    </>
  );
}
export { CharacterCard };
