import { useState, useEffect } from "react";
import { CharacterFilter } from "./CharacterFilter";
import { Header } from "../Common/Header";
import { CharacterList } from "./CharacterList";
import { GetLS, SetLS } from "../../service/LocalStorage";
import {
  GetDataFromApi,
  GetDataFromApibyName,
} from "../../service/GetDataFromApi";

function PrincipalCharacter() {
  const [data, setData] = useState(GetLS("characterArray", []));
  const [fail, setFail] = useState(false);
  const [valueName, SetValueName] = useState(GetLS("filterName", ""));
  const [species, setSpecies] = useState(GetLS("filterSpecies", ""));

  useEffect(() => {
    setFail(false);
    if (valueName) {
      GetDataFromApibyName(valueName)
        .then((characterArray) => {
          setData(characterArray);
          SetLS("characterArray", characterArray);
        })
        .catch(() => {
          setFail(true);
        });
    } else {
      GetDataFromApi().then((characterArray) => {
        setData(characterArray);
        SetLS("characterArray", characterArray);
      });
    }
  }, [valueName]); //con dependencia del valor del input
  return (
    <body className="body">
      <Header />
      <main className="main">
        <CharacterFilter
          valueName={valueName}
          onChangeName={(e) => {
            SetValueName(e.currentTarget.value);
            SetLS("filterName", e.currentTarget.value);
          }}
          species={species}
          onChangeSpecies={(e) => {
            setSpecies(e.currentTarget.value);
            SetLS("filterSpecies", e.currentTarget.value);
          }}
        />
        <CharacterList
          fail={fail}
          data={data}
          valueName={valueName}
          species={species}
        />
      </main>
    </body>
  );
}

export { PrincipalCharacter };
