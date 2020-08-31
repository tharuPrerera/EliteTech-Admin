import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand text-white text-camelcase" href="#">
       <h1> EliteTech</h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          
          <li className="nav-item active">
            <a className="nav-link text-white text-uppercase ml-4">
            <Link to="/Laptop">Laptops</Link>
              <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link text-white text-uppercase ml-4">
            <Link to="/Desktop">Desktops</Link>
              <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link text-white text-uppercase ml-4">
            <Link to="/Accessories">Accessories</Link>
              <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link text-white text-uppercase ml-4">
            <Link to="/HotDeals">HotDeals</Link>
              <span className="sr-only">(current)</span>
            </a>
          </li>
          </ul>
          <li className="nav-item active">
            {/* <a className="nav-link text-white text-uppercase" >
            <Link to="/"><i className="btn btn-info btn-rounded btn-sm waves-effect waves-light auth-modal-toggle"></i> Login</Link>
                <span className="sr-only">(current)</span>
            </a> */}

            <Link to="/" id="navbar-static-login" 
            alt="Sign In" className="btn btn-info btn-rounded btn-sm waves-effect waves-light auth-modal-toggle" 
            data-auth-modal-tab="sign-in">SIGN IN </Link>
          </li>
       
      </div>
    </nav>
  );
}
export default Navbar;
