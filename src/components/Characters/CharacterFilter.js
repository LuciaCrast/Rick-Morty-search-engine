import { Filter } from "../Common/Filter";
import "../Common/filter.scss";

let optionsSpecies = [
  "Alien",
  "Animal",
  "Cronenberg",
  "Disease",
  "Human",
  "Humanoid",
  "Mythological Creature",
  "Planet",
  "Poopybutthole",
  "Robot",
  "unknown",
];

function CharacterFilter({
  valueName,
  species,
  onChangeName,
  onChangeSpecies,
}) {
  return (
    <form className="form" onSubmit={(evt) => evt.preventDefault()}>
      <Filter
        name="characterName"
        typeInput="text"
        value={valueName}
        onChangeName={onChangeName}
        placeholder="Buscar personaje"
      />
      <Filter
        typeInput="select"
        name="species"
        value={species}
        onChangeValue={onChangeSpecies}
        allOptions="Especies"
        options={optionsSpecies}
      />
    </form>
  );
}

export { CharacterFilter };
