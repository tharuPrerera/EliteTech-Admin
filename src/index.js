import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

ReactDOM.render(
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={Home}/>
    </BrowserRouter>,
  document.getElementById('root')
);


