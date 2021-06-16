// import "../styles/App.scss";
import { useState, useEffect } from "react";
import {
  GetDataFromApi,
  GetDataFromApibyName,
} from "../service/GetDataFromApi";
import { CharacterCard } from "./CharacterCard";
import { Filter } from "./Filter";

function CharacterList() {
  const [data, setData] = useState([]);
  const [fail, setFail] = useState(false);
  const [valueName, SetValueName] = useState();
  const [species, setSpecies] = useState();
  useEffect(() => {
    GetDataFromApi().then((peopleArray) => {
      setData(peopleArray);
    });
  }, []); //sin dependecia

  useEffect(() => {
    setFail(false);
    if (valueName) {
      GetDataFromApibyName(valueName)
        .then((peopleArray) => {
          setData(peopleArray);
        })
        .catch(() => {
          setFail(true);
        });
    } else {
      GetDataFromApi().then((peopleArray) => {
        setData(peopleArray);
      });
    }
  }, [valueName]); //con dependencia del valor del input

  return (
    <>
      <main className="main">
        <Filter
          valueName={valueName}
          onChangeName={(e) => SetValueName(e.currentTarget.value)}
          data={data}
          species={species}
          onChangeSpecies={(e) => setSpecies(e.currentTarget.value)}
        />
        {fail ? (
          <p className="form__fail">
            {" "}
            El nombre {valueName} no ha sido encontrado{" "}
          </p>
        ) : (
          <ul>
            {data
              .filter((card) => {
                if (!species) {
                  return true;
                } else {
                  return species === card.species;
                }
              })
              .map((card) => (
                <li key={card.id}>
                  <CharacterCard card={card} />
                </li>
              ))}
          </ul>
        )}
      </main>
    </>
  );
}

export { CharacterList };
