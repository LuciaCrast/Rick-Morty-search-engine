import { Filter } from "./Filter";
import { Header } from "./Header";
import { CharacterList } from "./CharacterList";

function Principal({
  valueName,
  onChangeName,
  data,
  species,
  onChangeSpecies,
  fail,
}) {
  return (
    <body className="body">
      <Header />
      <main className="main">
        <Filter
          valueName={valueName}
          onChangeName={onChangeName}
          data={data}
          species={species}
          onChangeSpecies={onChangeSpecies}
        />
        <CharacterList fail={fail} data={data} />
      </main>
    </body>
  );
}

export { Principal };
