import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";

import Main from "../Main/Main";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";

function App() {
return (
  <div className="page">
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/movies"></Route>
      <Route path="/saved-movies"></Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route exact path="*">
        <PageNotFound />
      </Route>
    </Switch>
  </div>
)
};

export default App;
