import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageTest from "../modules/PageTest";
import PageTestEdit from "../modules/PageTestEdit";

const Routes = () => (
  <Router>
    <Route path="/" exact component={PageTest} />
    <Route path="/edit/:id" component={PageTestEdit} />
  </Router>
);

export default Routes;
