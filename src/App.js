import { Route, Switch } from "react-router-dom";
import "./App.css";
import Lyrics from "./components/Lyrics";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/lyrics/:trackId">
        <Lyrics />
      </Route>
    </Switch>
  );
}

export default App;
