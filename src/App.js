import React from "react";
import "./App.css";
import Company from "./Components/Company";
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Company />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
