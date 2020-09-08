// import React, { Component } from "react";
// import { Form } from "react-bootstrap";
// import {Link} from 'react-router-dom';

// class login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//     };
//     this.logUser = this.logUser.bind(this);
//     this.setUsername = this.setUsername.bind(this);
//     this.setPassword = this.setPassword.bind(this);
//   }

//   setUsername(username) {
//     this.setState({ username: username });
//   }

//   setPassword(password) {
//     this.setState({ password: password });
//   }

//   logUser() {
//     // put your own code here
//     alert(`Username: ${this.state.username} Password: ${this.state.password}`);
//   }

//   render() {
//     return (
//         <div className="container">
//           <div className="row">
//              <div className="col-md-12 col-sm-12"></div>
//              <div className="col-md-6 col-sm-12">
//                 <div style={{ marginTop: 50 }} align="center">
//                    <Form style={{ marginTop: 50 }} onSubmit={this.logUser}>
//                      <h3>User Login</h3>&nbsp;
//                      <h5>Please login to manage your orders</h5>&nbsp;
//                         <div className="form-group">
//                             <label>Username: </label>&nbsp;&nbsp;
//                             <input
//                             type="text"
//                             className="from-control"
//                             placeholder="Enter username"
//                             onChange={this.setUsername}
//                             required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label>Password: </label>&nbsp;&nbsp;
//                             <input
//                             type="password"
//                             className="from-control"
//                             placeholder="Enter password"
//                             onChange={this.setPassword}
//                             required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <div className="custom-control custom-checkbox">
//                             <input
//                                 type="checkbox"
//                                 className="custom-control-input"
//                                 id="customCheck1"
//                             />
//                             <label
//                                 className="custom-control-label"
//                                 htmlFor="customCheck1"
//                             >
//                                 Remember me
//                             </label>
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <input
//                             type="submit"
//                             value="Submit"
//                             className="btn btn-primary"
//                             />
//                         </div>
//                         <p className="forgot-password text-center">
//                             Forgot <a href="#">password?</a>
//                         </p>
//                    </Form>
//                 </div>
//              </div>
//              <div className="col-md-6 col-sm-12">
//                 <div style={{ marginTop: 50 }} align="left">
//                     <h2>Create an account</h2>&nbsp;
//                     <h5>Create an account to buy products.</h5>&nbsp;&nbsp;
//                     <div className="form-group">
//                     <Link to={""} className="btn btn-danger">Create an account</Link>
//                     </div>
//                 </div>
//              </div>
//           </div>
//         </div>
//     );
//   }
// }

// export default login;

import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel' 

class Home extends Component {

  render() {

    return (
      <div className="container">
      <Carousel> 
      <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'logo.png'}  />  
          </Carousel.Item  > 
          <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'image_1.png'}  />  
          </Carousel.Item  >
          <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'image_2.png'}  />  
          </Carousel.Item  >
          <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'image_3.png'}  />  
          </Carousel.Item  >
          <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'image_4.png'}  />  
          </Carousel.Item  >
      </Carousel> 
  </div>
    )};
}
 export default Home;
      
