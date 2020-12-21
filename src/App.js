import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import { Container } from "react-bootstrap";
import HowItWorks from "./Pages/HowItWorks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/howitworks" component={HowItWorks} />
      </Switch>
    </Router>
  );
};

export default App;
