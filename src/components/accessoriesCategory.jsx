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
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            allProducts: [],
            filtered: []
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

    // async searchItem() {
    //     let {data} = await axios.get('http://localhost:5000/api/accessories/'+this.props.match.params.id);
    //     console.log(data);

    //     this.setState({
    //       filtered: this.props.items
    //     });
    //   }
      
    // async componentWillReceiveProps(nextProps) {
    //     let {data} = await axios.get('http://localhost:5000/api/accessories/'+this.props.match.params.id);
    //     console.log(data);

    // this.setState({
    //     filtered: nextProps.items
    //    });
    // }
    
    handleChange(e) {
		// Variable to hold the original version of the list
    let currentList = [];
		// Variable to hold the filtered list before putting into state
    let newList = [];

		// If the search bar isn't empty
    if (e.target.value !== "") {
			// Assign the original list to currentList
      currentList = this.props.items;

			// Use .filter() to determine which items should be displayed
			// based on the search terms
      newList = currentList.filter(item => {
				// change current item to lowercase
        const lc = item.toLowerCase();
				// change search term to lowercase
        const filter = e.target.value.toLowerCase();
				// check to see if the current list item includes the search term
				// If it does, it will be added to newList. Using lowercase eliminates
				// issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
			// If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
		// Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
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
                       <div className="input-group mb-3">
                          <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />&nbsp;&nbsp;&nbsp;
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
                                <th>Quantity</th>
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