import "./App.css";
// import { useEffect } from "react";
import { useFetch } from "./useFetch";
import Gifs from "./Components/Gifs";
import Gif from "./Components/Gif";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;
const endPoint = `https://api.giphy.com/v1/stickers/trending?api_key=${API_KEY}&limit=10&rating=g`;

function App() {
  
  useFetch(endPoint);
  // useEffect(() => useFetch(), []);

  return (
    <div className="container">
      <Router>
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
