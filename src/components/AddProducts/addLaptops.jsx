import React, { Component } from "react";
import axios from 'axios';
import { Form } from 'react-bootstrap';

class addLaptops extends Component {
  constructor(props) {
    super(props);
    
  this.onChangeImgUrl = this.onChangeImgUrl.bind(this);
  this.onChangeItemName = this.onChangeItemName.bind(this);
  this.onchangeUnitPrice = this.onchangeUnitPrice.bind(this);
  this.onchangeBrand = this.onchangeBrand.bind(this);
  this.onchangeCode = this.onchangeCode.bind(this);
  this.onchangeWarranty = this.onchangeWarranty.bind(this);
  this.onchangeQuantity = this.onchangeQuantity.bind(this);
  this.saveProduct = this.saveProduct.bind(this);

  this.state = {
      imgUrl:'', itemName: '', unitPrice: '', brand:'', code:'', warranty:'', quantity:'',
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
      quantity: this.state.quantity,
  };
    axios.post('http://localhost:5000/api/laptop/', obj)
    .then(res => console.log(res.data));

    this.setState({
      imgUrl:'', itemName: '', unitPrice: '', brand:'', code:'', warranty:'', quantity:''});

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
          <h3 align="center">Add product</h3>
            <Form style={{ marginTop:50}} onSubmit={this.saveProduct}>
                <Form.Group controlId="BasicUpdateForm">
                        <Form.Label>Select Image: </Form.Label>
                <Form.Control type="String" className="from-control" value={this.state.imgUrl} onChange={this.onChangeImgUrl}/>
                </Form.Group>
                <Form.Group controlId="BasicUpdateForm">
                        <Form.Label>Item Name: </Form.Label>
                        <Form.Control type="String" className="from-control" value={this.state.itemName} onChange={this.onChangeItemName} required/>
                </Form.Group>   
                <Form.Group controlId="BasicUpdateForm">
                        <Form.Label>Unit Price: </Form.Label>
                        <Form.Control type="Number" className="from-control" value={this.state.unitPrice} onChange={this.onchangeUnitPrice} required/>
                </Form.Group>   
                <Form.Group controlId="BasicUpdateForm">
                <Form.Label>Brand:</Form.Label>
                    <Form.Control type="String" className="from-control" value={this.state.brand} onChange={this.onchangeBrand} required/>
                </Form.Group> 
                <Form.Group controlId="BasicUpdateForm">
                <Form.Label>Code:</Form.Label>
                    <Form.Control type="Number" className="from-control" value={this.state.code} onChange={this.onchangeCode} required/>
                </Form.Group>    
                <Form.Group controlId="BasicUpdateForm">
                <Form.Label>Warranty:</Form.Label>
                    <Form.Control type="String" className="from-control" value={this.state.warranty} onChange={this.onchangeWarranty} required/>
                </Form.Group>
                <Form.Group controlId="BasicUpdateForm">
                <Form.Label>Quantity:</Form.Label>
                    <Form.Control type="Number" className="from-control" value={this.state.quantity} onChange={this.onchangeQuantity} required/>
                </Form.Group>       
                        <input type ="submit" value="Update Product" className = "btn btn-primary"/>

            </Form>
        </div>
    </div>
    );
  }
}

export default addLaptops;
