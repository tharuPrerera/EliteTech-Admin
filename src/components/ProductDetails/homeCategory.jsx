import React, { Component } from "react";
import axios from "axios";
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class ViewHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: "",
      itemName: "",
      unitPrice: "",
      brand: "",
      code: "",
      warranty: "",
      stock:"",
      quantity: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/products/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          imgUrl: response.data.imgUrl,
          itemName: response.data.itemName,
          unitPrice: response.data.unitPrice,
          brand: response.data.brand,
          code: response.data.code,
          warranty: response.data.warranty,
          stock: response.data.stock,
          quantity: response.data.quantity,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
  
 <div className="container">
    <div className="row">
       <div className="col-md-12 col-sm-12"></div>
       <div className="col-md-6 col-sm-12">
          <div style={{ marginTop: 50 }} align="center">
             <Form style={{ marginTop: 50 }}>
               <img className="img-thumbnail" style={{width:"400px", height:"400px" }} src={this.state.imgUrl}/>
             </Form>
          </div>
       </div>
       <div className="col-md-6 col-sm-12">
          <div style={{ marginTop: 50 }} align="left">
              <h2>{this.state.itemName}</h2>&nbsp;
              <h3>Rs: {this.state.unitPrice}</h3>&nbsp;&nbsp;
              <h5>Brand: {this.state.brand}</h5>&nbsp;&nbsp;
              <h5>Code: {this.state.code}</h5>&nbsp;&nbsp;
              <h5>In Stock: {this.state.stock} </h5>&nbsp;&nbsp;
              <h5>Warranty: {this.state.warranty}</h5>&nbsp;&nbsp;
              <h5>Quantity: {this.state.quantity}</h5>&nbsp;&nbsp;
          </div>
          <Link to={"/HomeProducts"} className="btn btn-info">Back</Link>
       </div>
    </div>
</div>
    );
  }
}
export default ViewHome;