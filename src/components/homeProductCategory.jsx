import React, { Component } from 'react';
import axios from 'axios';
import HomeProductsTableRow from './ProductTables/HomeProductsTableRow';
import {Button} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class HomeProduct extends Component {

    constructor(props) {
        super(props);
        this.searchProduct = this.searchProduct.bind(this);

        this.state = {
            allProducts: [],
            searchProduct: ''
          };
      }

    async componentDidMount() {
        let {data} = await axios.get("http://localhost:5000/api/products");
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
                quantity: product.quantity,
            };
        });

        this.setState({allProducts: products});
    }

      async searchProduct() {
        let {data} = await axios.get('http://localhost:5000/api/hotDeals/'+this.props.match.params.id);
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
                quantity: product.quantity,
            };
        });

        this.setState({allProducts: products});
      }
     
      tabRow() {
          return this.state.allProducts.map(function(object, i){
              return<HomeProductsTableRow obj={object} key={i}/>
          });
        }

          render() {
              return (
                  <div>
                      <div style={{ marginTop: 25 }}></div>
                    <h3 align="center"> <u>Product Item List</u></h3>&nbsp;&nbsp;&nbsp;&nbsp;
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
                          <Link to={"/AddProducts/addHomeProducts"} className="btn btn-primary">Add Product</Link>
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
                                <th>Quantity</th>
                                <th colSpan="4">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {this.tabRow()}
                          </tbody>
                      </table>
                  </div>
              )
          }
          }
        
 export default HomeProduct;