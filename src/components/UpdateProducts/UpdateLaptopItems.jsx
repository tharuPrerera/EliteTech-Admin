import React, { Component } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

class Update extends Component {

    constructor(props) {
        super(props);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onchangeUnitPrice = this.onchangeUnitPrice.bind(this);
        this.onchangeBrand = this.onchangeBrand.bind(this);
        this.onchangeCode = this.onchangeCode.bind(this);
        this.onchangeWarranty = this.onchangeWarranty.bind(this);
        this.onchangeQuantity = this.onchangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            imgUrl:'',  itemName: '', unitPrice: '', brand:'', code:'', warranty:'', quantity:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/laptop/'+this.props.match.params.id)
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
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangeImage(e) {
        this.setState({ imgUrl: e.target.value });
        //console.log(e.target.files[0])
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

    onSubmit(e) {
        e.preventDefault ();
        const obj = {
            imgUrl: this.state.imgUrl,
            itemName: this.state.itemName,
            unitPrice: this.state.unitPrice,
            brand: this.state.brand,
            code: this.state.code,
            warranty: this.state.warranty,
            quantity: this.state.quantity,
        };
         axios.put('http://localhost:5000/api/laptop/'+this.props.match.params.id, obj)
         .then(res => console.log(res.data));

         this.props.history.push('/Laptop')
    }

    render() {
        return (
        <div className="container">
          <div className="col">
            <div style={{ marginTop:20}} align="left">
              <h3 align="center">Update Product</h3>
               <Form style={{ marginTop:35}} onSubmit={this.onSubmit}>
                  
                <Form.Group controlId="BasicUpdateForm">
                  <Form.Label>Select Image: </Form.Label>
                     <img src={this.state.imgUrl} onChange={this.onChangeImage}/>
                </Form.Group>

                <Form.Group controlId="BasicUpdateForm">
                  <Form.Label>Item Name: </Form.Label>
                      <InputGroup className="col-md-7">
                           <FormControl type="String" className="from-control" value={this.state.itemName} onChange={this.onChangeItemName} required/>
                      </InputGroup>
                </Form.Group>   

                <Form.Group controlId="BasicUpdateForm">
                  <Form.Label>Unit Price: </Form.Label>
                      <InputGroup className="col-md-7">    
                          <FormControl type="Number" className="from-control" value={this.state.unitPrice} onChange={this.onchangeUnitPrice} required/>
                      </InputGroup>
                </Form.Group>   

                <Form.Group controlId="BasicUpdateForm">
                  <Form.Label>Brand:</Form.Label>
                    <InputGroup className="col-md-7"> 
                         <FormControl type="String" className="from-control" value={this.state.brand} onChange={this.onchangeBrand} required/>
                    </InputGroup>
                </Form.Group> 

                <Form.Group controlId="BasicUpdateForm">
                  <Form.Label>Code:</Form.Label>
                    <InputGroup className="col-md-7">
                         <FormControl type="Number" className="from-control" value={this.state.code} onChange={this.onchangeCode} required/>
                    </InputGroup>
                </Form.Group>    
                  
                <Form.Group controlId="BasicUpdateForm">
                  <Form.Label>Warranty:</Form.Label>
                    <InputGroup className="col-md-7">
                        <Form.Control type="String" className="from-control" value={this.state.warranty} onChange={this.onchangeWarranty} required/>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="BasicUpdateForm">
                <Form.Label>Quantity:</Form.Label>
                    <InputGroup className="col-md-7">
                       <Form.Control type="Number" className="from-control" value={this.state.quantity} onChange={this.onchangeQuantity} required/>
                    </InputGroup>
                </Form.Group>  

                <input type ="submit" value="Update Product" className = "btn btn-primary"/>
               </Form>
            </div>
          </div>
        </div>
        );
    }
}

export default Update;

