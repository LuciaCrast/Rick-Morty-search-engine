import { GetIcon, GetIconDead } from "../Common/GetIcon";

function CharacterCard({ card }) {
  return (
    <>
      <img className="list__img" src={card.image} alt={card.name} />
      <p className="list__text">Nombre: {card.name}</p>{" "}
      <p className="list__text">
        Especie: <GetIcon species={card.species} />
      </p>
      <p className="list__text">
        Status: <GetIconDead status={card.status} />{" "}
      </p>
    </>
  );
}
export { CharacterCard };
