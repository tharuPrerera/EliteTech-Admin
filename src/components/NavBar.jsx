import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    state = {};
    render() {
      return (
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/">Home</Link>
          <Link to="/Index">Products</Link>
        </nav>
      );
    }
  }
  
  export default NavBar;