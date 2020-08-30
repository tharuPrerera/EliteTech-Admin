import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    state = {};
    render() {
      return (
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/">Login</Link>
          <Link to="/Laptop">Laptops</Link>
          <Link to="/HotDeals">HotDeals</Link>
          <Link to="/Desktop">Desktops</Link>
          <Link to="/Accessories">Accessories</Link>
        </nav>
      );
    }
  }
  
  export default NavBar;