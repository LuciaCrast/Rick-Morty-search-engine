import { useState, useEffect } from "react";
import { CharacterFilter } from "./CharacterFilter";
import { Header } from "../Common/Header";
import { CharacterList } from "./CharacterList";
import { GetLS, SetLS } from "../../service/LocalStorage";
import { GetDataFromApiCharacter } from "../../service/GetDataFromApi";
import { Pagination } from "../Common/Pagination";

function PrincipalCharacter() {
  const [data, setData] = useState(GetLS("characterArray", []));
  const [fail, setFail] = useState(false);
  const [valueName, SetValueName] = useState(GetLS("filterName", ""));
  const [species, setSpecies] = useState(GetLS("filterSpecies", ""));
  const [pages, setPages] = useState(GetLS("pages", 1));
  const [currentSite, setCurrentSite] = useState(GetLS("currentSite", 1));

  useEffect(() => {
    setFail(false);
    // if (valueName) {
    GetDataFromApiCharacter({
      name: valueName,
      species: species,
      page: currentSite,
    })
      .then(({ characterArray, totalPages }) => {
        setData(characterArray);
        setPages(totalPages);
        SetLS("characterArray", characterArray);
        SetLS("pages", totalPages);
      })
      .catch((fail) => {
        setFail(true);
      });
    // }
  }, [valueName, species, currentSite]);

  return (
    <body className="body">
      <Header />
      <main className="main">
        <CharacterFilter
          valueName={valueName}
          onChangeName={(e) => {
            SetValueName(e.currentTarget.value);
            SetLS("filterName", e.currentTarget.value);
            setCurrentSite(1);
          }}
          species={species}
          onChangeSpecies={(e) => {
            setSpecies(e.currentTarget.value);
            SetLS("filterSpecies", e.currentTarget.value);
            setCurrentSite(1);
          }}
        />
        {!fail ? (
          <Pagination
            currentSite={currentSite}
            pages={pages}
            onClickPrevious={() => {
              if (currentSite >= 2) {
                setCurrentSite(currentSite - 1);
              }
            }}
            onClickAfter={() => {
              if (currentSite < pages) {
                setCurrentSite(currentSite + 1);
              }
            }}
          />
        ) : null}
        <CharacterList fail={fail} data={data} valueName={valueName} />
      </main>
    </body>
  );
}

export { PrincipalCharacter };
