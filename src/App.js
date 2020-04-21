import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home.js';
import Hemodynamics from './Hemodynamics.js';
import Pulm from './Pulm.js';
import {BrowserRouter, Route } from "react-router-dom";

function App() {

  //rao you can add new pages here if need be, put in there path and file location 
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact/>
          <Route path="/hemodynamics" component={Hemodynamics} exact/>
          <Route path="/pulm" component={Pulm} exact />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
