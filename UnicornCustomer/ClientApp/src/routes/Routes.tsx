import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeesApp from "../modules/employees/EmployeesApp";

const Routes = () => (
  <Router>
    <Route path="/" exact component={EmployeesApp} />
    {/* <Route path="/edit/:id" component={PageTestEdit} /> */}
  </Router>
);

export default Routes;
