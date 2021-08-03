import { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Warning } from "../WarningError/Warning";
import { GetLS, SetLS } from "../../service/LocalStorage";
import { Principal } from "../Characters/PrincipalCharacter";
import { CharacterDetail } from "../Characters/CharacterDetails";
import {
  GetDataFromApi,
  GetDataFromApibyName,
} from "../../service/GetDataFromApi";
import "./App.scss";

function App() {
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
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          children={
            <Principal
              data={data}
              valueName={valueName}
              onChangeName={(e) => {
                SetValueName(e.currentTarget.value);
                SetLS("filterName", e.currentTarget.value);
              }}
              onChangeSpecies={(e) => {
                setSpecies(e.currentTarget.value);
                SetLS("filterSpecies", e.currentTarget.value);
              }}
              species={species}
              fail={fail}
            />
          }
        />
        <Route
          path="/characterdetails/:id"
          children={<CharacterDetail data={data} />}
        />
        <Route path="" children={<Warning />} />
      </Switch>
    </Router>
  );
}

export { App };
