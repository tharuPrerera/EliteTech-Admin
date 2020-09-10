import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Laptop from "./components/laptopCategory";
import Desktop from "./components/desktopCategory";
import HomeProduct from "./components/homeProductCategory";
import Accessories from "./components/accessoriesCategory";
import Footer from "./components/Footer";

import UpdateLaptopForm from "./components/UpdateProducts/UpdateLaptopItems";
import UpdateHomeProducts from "./components/UpdateProducts/UpdateHomeProducts";
import UpdateDesktopItems from "./components/UpdateProducts/UpdateDesktopItems";
import UpdateAccessoriesItems from "./components/UpdateProducts/UpdateAccessoriesItems";

import AddLaptopProduct from "./components/AddProducts/addLaptops";
import AddHomeProducts from "./components/AddProducts/addHomeProducts";
import AddDesktops from "./components/AddProducts/addDesktops";
import AddAccessories from "./components/AddProducts/addAccessories";

import ViewLaptop from "./components/ProductDetails/laptopCategory";
import ViewDesktop from "./components/ProductDetails/desktopCategory";
import ViewAccessories from "./components/ProductDetails/accessoriesCategory";
import ViewHome from "./components/ProductDetails/homeCategory";

ReactDOM.render(
    <BrowserRouter>
      <NavBar />

      <Route exact path="/" component={Home}/>
      <Route exact path="/Laptop" component={Laptop}/>
      <Route exact path="/Desktop" component={Desktop}/>
      <Route exact path="/Accessories" component={Accessories}/>
      <Route exact path="/HomeProducts" component={HomeProduct}/>

      <Route exact path="/UpdateProducts/UpdateLaptopItems/:id" component={UpdateLaptopForm}/>
      <Route exact path="/UpdateProducts/UpdateHomeProducts/:id" component={UpdateHomeProducts}/>
      <Route exact path="/UpdateProducts/UpdateDesktopItems/:id" component={UpdateDesktopItems}/>
      <Route exact path="/UpdateProducts/UpdateAccessoriesItems/:id" component={UpdateAccessoriesItems}/>

      <Route exact path="/AddProducts/addLaptops" component={AddLaptopProduct}/>
      <Route exact path="/AddProducts/addHomeProducts" component={AddHomeProducts}/>
      <Route exact path="/AddProducts/addDesktops" component={AddDesktops}/>
      <Route exact path="/AddProducts/addAccessories" component={AddAccessories}/>
      
      <Route exact path="/ProductDetails/laptopCategory/:id" component={ViewLaptop}/>
      <Route exact path="/ProductDetails/desktopCategory/:id" component={ViewDesktop}/>
      <Route exact path="/ProductDetails/accessoriesCategory/:id" component={ViewAccessories}/>
      <Route exact path="/ProductDetails/homeCategory/:id" component={ViewHome}/>
      
      <Footer />
   </BrowserRouter>,
  document.getElementById('root')
);


