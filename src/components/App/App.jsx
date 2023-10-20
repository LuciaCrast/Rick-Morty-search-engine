import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Warning } from "../WarningError/Warning";
import { PrincipalCharacter } from "../Characters/PrincipalCharacter";
import { PrincipalLocation } from "../Location/PrincipalLocation";
import { CharacterDetail } from "../Characters/CharacterDetails";
import { LocationDetails } from "../Location/LocationDetails";
import { Principal } from "../Home/Principal";
import { PrincipalEpisode } from "../Episodes/PrincipalEpisode";
import { EpisodeDetails } from "../Episodes/EpisodeDetails";
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
        <Route path="/principallocation" exact component={PrincipalLocation} />
        <Route path="/locationdetails/:id" children={<LocationDetails />} />
        <Route path="/principalepisode" exact component={PrincipalEpisode} />
        <Route path="/episodedetails/:id" children={<EpisodeDetails />} />
        <Route path="" children={<Warning />} />
      </Switch>
    </Router>
  );
}

export { App };
