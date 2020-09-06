import React, { Component } from 'react';
import axios from 'axios';
import AccessoriesTableRow from './ProductTables/AccessoriesTableRow';
import {Button} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Desktop extends Component {

    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this)

        this.state = {
            allProducts: [],
            // filtered: []
          };
      }

    async componentDidMount() {
        let {data} = await axios.get("http://localhost:5000/api/accessories");
        console.log(data);

        let products = data.map((product) => {
            return {
                _id: product._id,
                imgUrl:product.imgUrl,
                itemName: product.itemName,
                unitPrice: product.unitPrice,
                brand: product.brand,
                code: product.code,
                warranty: product.warranty,
                stock:product.stock,
                quantity: product.quantity,
            };
        });

        this.setState({allProducts: products});
    }

    tabRow() {
        return this.state.allProducts.map(function(object, i){
            return<AccessoriesTableRow obj={object} key={i}/>
        });
    }

          render() {
              return (
                  <div>
                      <div style={{ marginTop: 25 }}>
                      <h3 align="center"><u> Accessories Item List</u></h3>&nbsp;&nbsp;&nbsp;&nbsp;
                       {/* <div className="input-group mb-3">
                          <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />&nbsp;&nbsp;&nbsp; */}
                          <div className="input-group mb-3">
                          <InputGroup className="col-md-3">
                                <FormControl
                                    placeholder="Search Product"
                                    aria-label="Search Product"
                                    aria-describedby="basic-addon2"
                                />
                            <InputGroup.Append>
                                <Button className="btn-info"  type="button" onClick={this.searchProduct}> Search </Button>
                            </InputGroup.Append>
                          </InputGroup>
                          <Link to={"/AddProducts/addAccessories"} className="btn btn-primary">Add Accessories</Link> 
                       </div>
                      <table className="table table-striped" style={{marginTop:20}}>
                          <thead>
                              <tr>
                                <th>Product ID</th>
                                <th>Product Image</th>
                                <th>Item Name</th>
                                <th>Unit Price (Rs:)</th>
                                <th>Brand</th>
                                <th>Code</th>
                                <th>Warranty</th>
                                <th>In stock</th>
                                <th>No of products available</th>
                                <th colSpan="4">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {this.tabRow()}
                          </tbody>
                      </table>
                  </div>
                  </div>
              )
          }
          }
        
 export default Desktop;