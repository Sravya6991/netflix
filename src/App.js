import { Route, Switch } from "react-router-dom";
import Details from "./Components/DetailsPage/Details";
import Home from "./Components/Homepage/Home";
import Movies from "./Components/MoviesPage/Movies";
import UsersPage from "./Components/UsersPage/UsersPage";
import Signup from "./Components/UsersPage/Signup";
import "./media.css";
import './styles.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/login"><UsersPage /></Route>
        <Route path="/signup"><Signup /></Route>
        <Route path="/movies"><Movies /></Route>
        <Route path="/details/:name"><Details /></Route>
      </Switch>
      
    </div>
  );
}

export default App;
