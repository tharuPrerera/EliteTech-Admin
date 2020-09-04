import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class DesktopTableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    async delete() {
        await axios.delete('http://localhost:5000/api/desktop/'+this.props.obj._id)
        .catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj._id}</td>
                <td><img className="img-thumbnail" style={{width:"100px", height:"100px" }} src={this.props.obj.imgUrl}/></td>
                <td>{this.props.obj.itemName}</td>
                <td>{this.props.obj.unitPrice}</td>
                <td>{this.props.obj.brand}</td>
                <td>{this.props.obj.code}</td>
                <td>{this.props.obj.warranty}</td>
                <td>{this.props.obj.quantity}</td>
                <td><Link to={"/UpdateProducts/UpdateDesktopItems/"+this.props.obj._id} className="btn btn-primary">Update</Link></td>
                <td><button  onClick={this.delete} className="btn btn-danger">Delete</button></td>
                {/* <td><Link to={"/ViewProduct/"+this.props.obj._id} className="btn btn-primary">View</Link></td> */}
            </tr>
        )
    }
}

export default DesktopTableRow;