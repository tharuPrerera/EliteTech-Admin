import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Login from "./components/login";
import Laptop from "./components/laptopCategory";
import Desktop from "./components/desktopCategory";
import HotDeals from "./components/hotDealsCategory";
import Accessories from "./components/accessoriesCategory";
import UpdateLaptopForm from "./components/UpdateProducts/UpdateLaptopItems";
import AddLaptopProduct from "./components/AddProducts/addLaptops";
import UpdateHotDealsItems from "./components/UpdateProducts/UpdateHotDealsItems";
import addHotDeals from "./components/AddProducts/addHotDeals";


ReactDOM.render(
    <BrowserRouter>
      <NavBar />

      <Route exact path="/" component={Login}/>
      <Route exact path="/Laptop" component={Laptop}/>
      <Route exact path="/Desktop" component={Desktop}/>
      <Route exact path="/Accessories" component={Accessories}/>
      <Route exact path="/HotDeals" component={HotDeals}/>

      <Route exact path="/UpdateProducts/UpdateLaptopItems/:id" component={UpdateLaptopForm}/>
      <Route exact path="/AddProducts/addLaptops" component={AddLaptopProduct}/>

      <Route exact path="/UpdateProducts/UpdateHotDealsItems/:id" component={UpdateHotDealsItems}/>
      <Route exact path="/AddProducts/addHotDeals" component={addHotDeals}/>
      
   </BrowserRouter>,
  document.getElementById('root')
);


