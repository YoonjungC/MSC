import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Tutor from "./Tutor";
import How from "./How";
import About from "./About";
import Material from "./Material";
import Schedule from "./Schedule";
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
    <Router>  
      <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/tutor">
            <Tutor/> 
          </Route>
          <Route path="/about"> 
            <About/>
          </Route>
          <Route path="/how">
            <How/>
          </Route>
          <Route path="/schedule">
            <Schedule/>
          </Route>
          <Route path="/material">
            <Material/>
          </Route>
          <Route exact path="/">
            <Home/> 
          </Route>
        </Switch>
        <Footer/> 
        </div>
      </Router>
    );
  }
}

export default App;
