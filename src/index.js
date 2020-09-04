import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Login from "./components/login";
import Laptop from "./components/laptopCategory";
import Desktop from "./components/desktopCategory";
import HomeProduct from "./components/homeProductCategory";
import Accessories from "./components/accessoriesCategory";

import UpdateLaptopForm from "./components/UpdateProducts/UpdateLaptopItems";
import AddLaptopProduct from "./components/AddProducts/addLaptops";

import UpdateHomeProducts from "./components/UpdateProducts/UpdateHomeProducts";
import AddHomeProducts from "./components/AddProducts/addHomeProducts";

import UpdateDesktopItems from "./components/UpdateProducts/UpdateDesktopItems";
import AddDesktops from "./components/AddProducts/addDesktops";

import UpdateAccessoriesItems from "./components/UpdateProducts/UpdateAccessoriesItems";
import AddAccessories from "./components/AddProducts/addAccessories";

import ViewLaptop from "./components/ViewProducts/laptopCategory";

ReactDOM.render(
    <BrowserRouter>
      <NavBar />

      <Route exact path="/" component={Login}/>
      <Route exact path="/Laptop" component={Laptop}/>
      <Route exact path="/Desktop" component={Desktop}/>
      <Route exact path="/Accessories" component={Accessories}/>
      <Route exact path="/HomeProducts" component={HomeProduct}/>

      <Route exact path="/UpdateProducts/UpdateLaptopItems/:id" component={UpdateLaptopForm}/>
      <Route exact path="/AddProducts/addLaptops" component={AddLaptopProduct}/>

      <Route exact path="/UpdateProducts/UpdateHomeProducts/:id" component={UpdateHomeProducts}/>
      <Route exact path="/AddProducts/addHomeProducts" component={AddHomeProducts}/>

      <Route exact path="/UpdateProducts/UpdateDesktopItems/:id" component={UpdateDesktopItems}/>
      <Route exact path="/AddProducts/addDesktops" component={AddDesktops}/>

      <Route exact path="/UpdateProducts/UpdateAccessoriesItems/:id" component={UpdateAccessoriesItems}/>
      <Route exact path="/AddProducts/addAccessories" component={AddAccessories}/>
      
      <Route exact path="/ViewProducts/laptopCategory/:id" component={ViewLaptop}/>

   </BrowserRouter>,
  document.getElementById('root')
);


