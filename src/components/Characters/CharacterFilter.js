import { Filter } from "../Common/Filter";
import { Search } from "../Common/search";
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
  onSubmitSearch,
}) {
  return (
    <form className="form" onSubmit={onSubmitSearch}>
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
      <Search />
    </form>
  );
}

export { CharacterFilter };
