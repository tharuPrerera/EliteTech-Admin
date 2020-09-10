import React, { Component } from 'react';
import axios from 'axios';
import LaptopTableRow from './ProductTables/LaptopTableRow';
import {Button} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Laptop extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allProducts: [],
          };
      }

    async componentDidMount() {
        let {data} = await axios.get("http://localhost:5000/api/laptop");
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
              return<LaptopTableRow obj={object} key={i}/>
          });
        }

          render() {
            const { searchTitle } = this.state;
              return (
                  <div>
                      <div style={{ marginTop: 25 }}>
                    <h3 align="center"> <u>Laptop Item List</u></h3>&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="col-md-8">
                        <div className="input-group mb-3">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle}
                            />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchTitle}
                            >
                            Search
                            </button>
                        </div>
                       </div>
                     
                          <Link to={"/AddProducts/addLaptops"} className="btn btn-primary">Add Laptop</Link>
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
        
 export default Laptop;