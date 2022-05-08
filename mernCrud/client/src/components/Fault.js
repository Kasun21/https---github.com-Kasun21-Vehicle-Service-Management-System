import React, { Component } from 'react';
import axios from 'axios';
import Navbar2 from './Navbar2';

export default class Fault extends Component {

    constructor(props){
        super(props);
        this.state={
            Name:"",
            Vehicle_number:"",
            phone_number:"",
            fault:""
          
        }
    }
    handleInputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { Name,Vehicle_number,phone_number,fault} =this.state;

        const data ={
            Name:Name,
            Vehicle_number:Vehicle_number,
            phone_number:phone_number,
            fault:fault
            
        }

        

        console.log(data)

        axios.post("/post/save", data).then((res) => {
            if(res.data.success){
                this.setState(
                    {
                       
                      Name:"",
                      Vehicle_number:"",
                      phone_number:"",
                      fault:""
                    }
                )
            }
        })
    }
    render(){
        return (
            <div><Navbar2/>
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add Fault Details</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} > Name </label>
                        <input type= "text"
                        className="form-control"
                        name="Name" required
                        placeholder="Enter name"
                        value={this.state.Name}
                        onChange={this.handleInputChange}/>
                    </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} > Vehicel Number </label>
                        <input type= "text"
                        className="form-control"
                        name="Vehicle_number" required
                        placeholder="Enter Vehicle Number"
                        value={this.state.Vehicle_number}
                        onChange={this.handleInputChange}/>
                </div>
               
                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Phone Number  </label>
                        <input type= "text"
                        className="form-control"
                        name="phone_number" required
                        placeholder="Enter Phone Number"
                        value={this.state.phone_number}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}> Fault </label>
                        <input type= "text"
                        className="form-control"
                        name="fault" required
                        placeholder="Enter your fault"
                        value={this.state.fault}
                        onChange={this.handleInputChange}/>
                </div>

                <button className="btn btn-success"  type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; <a href="/" style={{textDecoration:'none',color:'white'}}>Save</a>
                </button>
            
                </form><br/><br/><br/><br/><br/>
                <p align="center"><b>2022@All rights recieved</b></p>
            </div>
            </div>
        )
    }
}