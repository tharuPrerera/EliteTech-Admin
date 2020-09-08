import React from "react";
import {
  Navbar,
  Nav,
  Form,

} from "react-bootstrap";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#home">
            <Link class="text-light bg-dark" to="/">
              {" "}
              <h1>EliteTech</h1>{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <ul className="navbar-nav m-auto">
                <li className="nav-item active">
                  <a className="nav-link text-white text-uppercase">
                    <Link class="text-light bg-dark" to="/HomeProducts">
                      Latest Deals &nbsp;
                    </Link>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link text-white text-uppercase ml-4">
                    <Link class="text-light bg-dark" to="/Laptop">
                      Laptop
                    </Link>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link text-white text-uppercase ml-4">
                    <Link class="text-light bg-dark" to="/Desktop">
                      Desktop
                    </Link>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link text-white text-uppercase ml-4">
                    <Link class="text-light bg-dark" to="/Accessories">
                      Accessories
                    </Link>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </Nav>
            {/* <Form inline>
              <li className="nav-item active">
                <Link
                  to="/"
                  id="navbar-static-login"
                  alt="Sign In"
                  className="btn btn-info btn-rounded btn-sm waves-effect waves-light auth-modal-toggle"
                  data-auth-modal-tab="sign-in"
                >
                  SIGN IN{" "}
                </Link>
              </li>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
}
export default App;
