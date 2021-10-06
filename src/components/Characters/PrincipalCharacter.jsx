import { useState, useEffect } from "react";
import { CharacterFilter } from "./CharacterFilter";
import { Header } from "../Common/Header";
import { CharacterList } from "./CharacterList";
import { GetLS, SetLS } from "../../service/LocalStorage";
import { GetDataFromApiCharacter } from "../../service/GetDataFromApi";
import { Pagination } from "../Common/Pagination";
import "./principalCharacter.scss";

function PrincipalCharacter() {
  const [data, setData] = useState(GetLS("characterArray", []));
  const [fail, setFail] = useState(false);
  const [valueName, SetValueName] = useState(GetLS("filterName", ""));
  const [species, setSpecies] = useState(GetLS("filterSpecies", ""));
  const [pages, setPages] = useState(GetLS("pages", 1));
  const [currentSite, setCurrentSite] = useState(GetLS("currentSite", 1));
  const [searchAtAPI, setSearchAtAPI] = useState(true);

  useEffect(() => {
    if (searchAtAPI) {
      setFail(false);
      setSearchAtAPI(false);
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
    }
  }, [valueName, species, currentSite, searchAtAPI]);

  return (
    <>
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
          onSubmitSearch={(evt) => {
            setSearchAtAPI(true);
            evt.preventDefault();
          }}
          onClickReset={() => {
            SetValueName("");
            SetLS("filterName", "");
            setSpecies("");
            SetLS("filterSpecies", "");
            SetLS("pages", 1);
            SetLS("currentSite", 1);
            setCurrentSite(1);
            setSearchAtAPI(true);
          }}
        />
        {!fail ? (
          <Pagination
            currentSite={currentSite}
            pages={pages}
            onClickPrevious={() => {
              if (currentSite >= 2) {
                setCurrentSite(currentSite - 1);
                setSearchAtAPI(true);
              }
            }}
            onClickAfter={() => {
              if (currentSite < pages) {
                setCurrentSite(currentSite + 1);
                setSearchAtAPI(true);
              }
            }}
          />
        ) : null}
        <CharacterList fail={fail} data={data} valueName={valueName} />
      </main>
    </>
  );
}

export { PrincipalCharacter };
