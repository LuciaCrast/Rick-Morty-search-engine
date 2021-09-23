import { Filter } from "../Common/Filter";
import { Search } from "../Common/search";
import { Reset } from "../Common/reset";
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
  value,
  species,
  onChangeName,
  onChangeSpecies,
  onSubmitSearch,
  onClickReset,
}) {
  return (
    <form className="form" onSubmit={onSubmitSearch}>
      <Filter
        name="characterName"
        typeInput="text"
        value={value}
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
      <section className="formButtons">
        <Search />
        <Reset onClickReset={onClickReset} />
      </section>
    </form>
  );
}

export { CharacterFilter };
