import React, { Component } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Update extends Component {

    constructor(props) {
        super(props);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onchangeUnitPrice = this.onchangeUnitPrice.bind(this);
        this.onchangeBrand = this.onchangeBrand.bind(this);
        this.onchangeCode = this.onchangeCode.bind(this);
        this.onchangeWarranty = this.onchangeWarranty.bind(this);
        this.onchangeStock = this.onchangeStock.bind(this);
        this.onchangeQuantity = this.onchangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            imgUrl:'',  itemName: '', unitPrice: '', brand:'', code:'', warranty:'',stock:'', quantity:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/desktop/'+this.props.match.params.id)
          .then(response => {
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
        //   .catch(function (error) {
        //       console.log(error);
        //   })
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

    onchangeStock(e) {
        this.setState({ stock: e.target.value });
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
            stock:this.state.stock,
            warranty: this.state.warranty,
            quantity: this.state.quantity,
        };
         axios.put('http://localhost:5000/api/desktop/'+this.props.match.params.id, obj)
         .then(res => console.log(res.data));

         this.props.history.push('/Desktop')
    }

    render() {
        return (
        <div className="container">
          <div className="col">
            <div style={{ marginTop:20}} align="left">
              <h3 align="center"><u>Update Product</u></h3>
               <Form style={{ marginTop:35}} onSubmit={this.onSubmit}>
                  
               <Form.Group>
                    <InputGroup className="col-md-7">
                       <img className="img-thumbnail" style={{width:"150px", height:"150px" }} src={this.state.imgUrl}/>&nbsp; &nbsp;          
                       <Form.Label>Image Url: </Form.Label>&nbsp; &nbsp; 
                       <FormControl type="String" className="from-control" value={this.state.imgUrl} onChange={this.onChangeImage}/>
                    </InputGroup>     
                </Form.Group>

                <Form.Group>
                  <Form.Label>Item Name: </Form.Label>
                      <InputGroup className="col-md-7">
                           <FormControl type="String" className="from-control" value={this.state.itemName} onChange={this.onChangeItemName} />
                      </InputGroup>
                </Form.Group>   

                <Form.Group>
                  <Form.Label>Unit Price: </Form.Label>
                      <InputGroup className="col-md-7">    
                          <FormControl type="Number" className="from-control" value={this.state.unitPrice} onChange={this.onchangeUnitPrice}/>
                      </InputGroup>
                </Form.Group>   

                <Form.Group>
                  <Form.Label>Brand:</Form.Label>
                    <InputGroup className="col-md-7"> 
                         <FormControl type="String" className="from-control" value={this.state.brand} onChange={this.onchangeBrand} />
                    </InputGroup>
                </Form.Group> 

                <Form.Group>
                  <Form.Label>Code:</Form.Label>
                    <InputGroup className="col-md-7">
                         <FormControl type="Number" className="from-control" value={this.state.code} onChange={this.onchangeCode} />
                    </InputGroup>
                </Form.Group>    
                  
                <Form.Group>
                  <Form.Label>Warranty:</Form.Label>
                    <InputGroup className="col-md-7">
                        <Form.Control type="String" className="from-control" value={this.state.warranty} onChange={this.onchangeWarranty}/>
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                <Form.Label>In Stock:</Form.Label>
                    <InputGroup className="col-md-7">
                       <Form.Control type="String" className="from-control" value={this.state.stock} onChange={this.onchangeStock} />
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                <Form.Label>No of products available:</Form.Label>
                    <InputGroup className="col-md-7">
                       <Form.Control type="Number" className="from-control" value={this.state.quantity} onChange={this.onchangeQuantity} />
                    </InputGroup>
                </Form.Group>  
                <input type ="submit" value="Update Product" className = "btn btn-primary"/>&nbsp;&nbsp;&nbsp;
                <Link to={"/Desktop"} className="btn btn-danger">Cancel</Link>
               </Form>
            </div>
          </div>
        </div>
        );
    }
}

export default Update;

