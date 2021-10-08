import { Filter } from "../Common/Filter";
import { Reset } from "../Common/reset";
import { Search } from "../Common/search";

let episodesEpisode = [
  "S01E01",
  "S01E02",
  "S01E03",
  "S01E04",
  "S01E05",
  "S01E06",
  "S01E07",
  "S01E08",
  "S01E09",
  "S01E10",
  "S01E11",
  "S02E01",
  "S02E02",
  "S02E03",
  "S02E04",
  "S02E05",
  "S02E06",
  "S02E07",
  "S02E08",
  "S02E09",
  "S02E10",
  "S03E01",
  "S03E02",
  "S03E03",
  "S03E04",
  "S03E05",
  "S03E06",
  "S03E07",
  "S03E08",
  "S03E09",
  "S03E10",
  "S04E01",
  "S04E02",
  "S04E03",
  "S04E04",
  "S04E05",
  "S04E06",
  "S04E07",
  "S04E08",
  "S04E09",
  "S04E10",
];

function EpisodeFilter({
  onSubmitSearchEpisode,
  valueNameEpisode,
  onChangeEpisode,
  valueTypeEpisode,
  onChangeTypeEpisode,
  onClickResetEpisode,
}) {
  return (
    <form className="form" onSubmit={onSubmitSearchEpisode}>
      <Filter
        typeInput="text"
        value={valueNameEpisode}
        onChangeName={onChangeEpisode}
        placeholder="Buscar nombre del Episodio"
      />
      <Filter
        typeInput="select"
        id="Tipo"
        value={valueTypeEpisode}
        onChangeValue={onChangeTypeEpisode}
        allOptions="Todos los Episodios"
        options={episodesEpisode}
      />
      <section className="forms__buttons">
        <Search />
        <Reset onClickReset={onClickResetEpisode} />
      </section>
    </form>
  );
}

export { EpisodeFilter };
