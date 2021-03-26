import "./App.css";
import Gifs from "./Components/Gifs";
import Gif from "./Components/Gif";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Gifs />
          </Route>

          <Route exact path="/gif/:id" children={<Gif />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
