import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Warning } from "../WarningError/Warning";

import { PrincipalCharacter } from "../Characters/PrincipalCharacter";
import { CharacterDetail } from "../Characters/CharacterDetails";
import { Principal } from "../Home/Principal";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Principal} />
        <Route
          path="/principalcharacter"
          exact
          component={PrincipalCharacter}
        />
        <Route path="/characterdetails/:id" children={<CharacterDetail />} />
        <Route path="" children={<Warning />} />
      </Switch>
    </Router>
  );
}

export { App };
