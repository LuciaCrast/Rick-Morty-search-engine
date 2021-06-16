import { GetIcon } from "./GetIcon";

function CharacterCard({ card }) {
  return (
    <>
      <img src={card.image} alt={card.name} />
      {card.name} <GetIcon species={card.species} />
      {card.status}
    </>
  );
}
export { CharacterCard };
