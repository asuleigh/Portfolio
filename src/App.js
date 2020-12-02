import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
    </Switch>
  );
};

export default App;