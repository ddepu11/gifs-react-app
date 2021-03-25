import "./App.css";
import Gifs from "./Components/Gifs";
import Gif from "./Components/Gif";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Components/Search";


function App() {

  return (
    <div className="container">
      <Router>
        <Search />

        <Switch>
          <Route path="/" exact>
            <Gifs />
          </Route>

          <Route exact path="/gif/:id" children={<Gif />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
