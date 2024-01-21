import { CssBaseline } from "@mui/material";
import { Switch, Route } from "react-router-dom";

import Actors from "./Actors/Actors.jsx";
import Movie from "./Movie/Movie.jsx";
import Movieinfo from "./Movieinfo/Movieinfo.jsx";
import Profile from "./Profile/Profile.jsx";
import Nav from "./Navbar/Nav.jsx";

import useStyles from "./Styles";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Nav />
      <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Switch>
          <Route exact path="/">
            <Movie />
          </Route>
          <Route exact path="/movies">
            <Movie />
          </Route>
          <Route exact path="/movies/:id">
            <Movieinfo />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
