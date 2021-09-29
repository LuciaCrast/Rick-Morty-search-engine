import { Filter } from "../Common/Filter";
import { Reset } from "../Common/reset";
import { Search } from "../Common/search";

let typeLocation = [
  "Acid Plant",
  "Arcade",
  "Artificially generated world",
  "Asteroid",
  "Base",
  "Box",
  "Cluster",
  "Convention",
  "Customs",
  "Daycare",
  "Death Star",
  "Diegesis",
  "Dimension",
  "Dream",
  "Dwarf planet (Celestial Dwarf)",
  "Fantasy town",
  "Game",
  "Liquid",
  "Machine",
  "Menagerie",
  "Microverse",
  "Miniverse",
  "Mount",
  "Nightmare",
  "Non-Diegetic Alternative Reality",
  "Planet",
  "Quadrant",
  "Quasar",
  "Reality",
  "Resort",
  "Spa",
  "Space station",
  "Spacecraft",
  "TV",
  "Teenyverse",
  "Woods",
  "unknown",
];

let dimensionLocation = [
  "Chair Dimension",
  "Cromulon Dimension",
  "Cronenberg Dimension",
  "Dimension 5-126",
  "Dimension C-137",
  "Dimension C-35",
  "Dimension C-500A",
  "Dimension D-99",
  "Dimension D716",
  "Dimension D716-B",
  "Dimension D716-C",
  "Dimension J-22",
  "Dimension J19ζ7",
  "Dimension K-22",
  "Dimension K-83",
  "Eric Stoltz Mask Dimension",
  "Evil Rick's Target Dimension",
  "Fantasy Dimension",
  "Fascist Dimension",
  "Fascist Shrimp Dimension",
  "Fascist Teddy Bear Dimension",
  "Giant Telepathic Spiders Dimension",
  "Magic Dimension",
  "Merged Dimension",
  "Phone Dimension",
  "Pizza Dimension",
  "Post-Apocalyptic Dimension",
  "Replacement Dimension",
  "Testicle Monster Dimension",
  "Tusk Dimension",
  "Unknown dimension",
  "Wasp Dimension",
  "unknown",
];

function LocationFilter({
  valueNameLocation,
  onChangeLocation,
  valueTypeLocation,
  onChangeTypeLocation,
  valueDimension,
  onChangeDimensionLocation,
  onClickResetLocation,
  onSubmitSearchLocation,
}) {
  return (
    <form className="form" onSubmit={onSubmitSearchLocation}>
      <Filter
        typeInput="text"
        value={valueNameLocation}
        onChangeName={onChangeLocation}
        placeholder="Buscar Localizaciones"
      />
      <Filter
        typeInput="select"
        id="Tipo"
        value={valueTypeLocation}
        onChangeValue={onChangeTypeLocation}
        allOptions="Todos los tipos"
        options={typeLocation}
      />
      <Filter
        typeInput="select"
        id="Dimension"
        value={valueDimension}
        onChangeValue={onChangeDimensionLocation}
        allOptions="Todas las dimensiones"
        options={dimensionLocation}
      />
      <section className="forms__buttons">
        <Search />
        <Reset onClickReset={onClickResetLocation} />
      </section>
    </form>
  );
}

export { LocationFilter };
