import React, { Component } from "react";
import axios from 'axios';
import { Form } from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FormControl} from 'react-bootstrap';

class addLaptops extends Component {
  constructor(props) {
    super(props);
    
  this.onChangeImgUrl = this.onChangeImgUrl.bind(this);
  this.onChangeItemName = this.onChangeItemName.bind(this);
  this.onchangeUnitPrice = this.onchangeUnitPrice.bind(this);
  this.onchangeBrand = this.onchangeBrand.bind(this);
  this.onchangeCode = this.onchangeCode.bind(this);
  this.onchangeWarranty = this.onchangeWarranty.bind(this);
  this.onchangeStock = this.onchangeStock.bind(this);
  this.onchangeQuantity = this.onchangeQuantity.bind(this);
  this.saveProduct = this.saveProduct.bind(this);

  this.state = {
      imgUrl:'', itemName: '', unitPrice: '', brand:'', code:'', warranty:'', stock:'', quantity:'',
  }

}

onChangeImgUrl(e) {
    this.setState({ imgUrl: e.target.value });
}

onChangeItemName(e) {
    this.setState({ itemName: e.target.value });
}

onchangeUnitPrice(e) {
    this.setState({ unitPrice: e.target.value });
}

onchangeBrand(e) {
    this.setState({ brand: e.target.value });
}

onchangeCode(e) {
    this.setState({ code: e.target.value });
}

onchangeWarranty(e) {
    this.setState({ warranty: e.target.value });
}

onchangeStock(e) {
  this.setState({ stock: e.target.value });
}

onchangeQuantity(e) {
    this.setState({ quantity: e.target.value });
}

  saveProduct() {
    const obj = {
      imgUrl: this.state.imgUrl,
      itemName: this.state.itemName,
      unitPrice: this.state.unitPrice,
      brand: this.state.brand,
      code: this.state.code,
      warranty: this.state.warranty,
      stock: this.state.stock,
      quantity: this.state.quantity,
  };
    axios.post('http://localhost:5000/api/laptop/', obj)
    .then(res => console.log(res.data));

    this.setState({
      imgUrl:'', itemName: '', unitPrice: '', brand:'', code:'', warranty:'', stock:'', quantity:''});

    this.props.history.push('/Laptop')
  }

  componentDidMount() {
      axios.get('http://localhost:5000/api/laptop/')
        .then(response => {
            this.setState({
              imgUrl: response.data.imgUrl,
              itemName: response.data.itemName,
              unitPrice: response.data.unitPrice,
              brand: response.data.brand,
              code: response.data.code,
              warranty: response.data.warranty,
              stock:response.data.stock,
              quantity: response.data.quantity,
            });
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  render() {
    return (
      <div className="container">
        <div style={{ marginTop: 25 }} align="left">
          <h3 align="center"><u>Add product</u></h3>
            <Form style={{ marginTop:50}} onSubmit={this.saveProduct}>
           
                <Form.Group controlId="BasicUpdateForm">
                   <Form.Label>Image Url: </Form.Label>
                      <InputGroup className="col-md-7">
                          <FormControl type="String" className="from-control" value={this.state.imgUrl} onChange={this.onChangeImgUrl}/>
                      </InputGroup>
                </Form.Group>

                <Form.Group controlId="BasicUpdateForm">
                   <Form.Label>Item Name: </Form.Label>
                     <InputGroup className="col-md-7">
                         <Form.Control type="String" className="from-control" value={this.state.itemName} onChange={this.onChangeItemName}/>
                     </InputGroup>
                </Form.Group>  

                <Form.Group controlId="BasicUpdateForm">
                   <Form.Label>Unit Price: </Form.Label>
                     <InputGroup className="col-md-7">
                         <Form.Control type="Number" className="from-control" value={this.state.unitPrice} onChange={this.onchangeUnitPrice} />
                     </InputGroup>
                </Form.Group>   

                <Form.Group controlId="BasicUpdateForm">
                   <Form.Label>Brand:</Form.Label>
                     <InputGroup className="col-md-7">
                       <Form.Control type="String" className="from-control" value={this.state.brand} onChange={this.onchangeBrand} />
                     </InputGroup>
                </Form.Group> 

                <Form.Group controlId="BasicUpdateForm">
                   <Form.Label>Code:</Form.Label>
                     <InputGroup className="col-md-7">
                       <Form.Control type="Number" className="from-control" value={this.state.code} onChange={this.onchangeCode} />
                     </InputGroup>
                </Form.Group>  

                <Form.Group controlId="BasicUpdateForm">
                  <Form.Label>Warranty:</Form.Label>
                    <InputGroup className="col-md-7">
                      <Form.Control type="String" className="from-control" value={this.state.warranty} onChange={this.onchangeWarranty} />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="BasicUpdateForm">
                  <Form.Label>In stock:</Form.Label>
                    <InputGroup className="col-md-7">
                      <Form.Control type="String" className="from-control" value={this.state.stock} onChange={this.onchangeStock}/>
                    </InputGroup>
                </Form.Group>  

                <Form.Group controlId="BasicUpdateForm">
                  <Form.Label>No of products available:</Form.Label>
                    <InputGroup className="col-md-7">
                      <Form.Control type="Number" className="from-control" value={this.state.quantity} onChange={this.onchangeQuantity}/>
                    </InputGroup>
                </Form.Group>      

                <input type ="submit" value="Add Product" className = "btn btn-primary"/>&nbsp;&nbsp;&nbsp;
                <Link to={"/Laptop"} className="btn btn-danger">Cancel</Link>
            </Form>
        </div>
      </div>
    );
  }
}

export default addLaptops;
