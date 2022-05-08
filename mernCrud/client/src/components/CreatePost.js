import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class CreatePost extends Component {

    constructor(props){
        super(props);
        this.state={
            Name:"",
            Vehicle_number:"",
            phone_number:"",
            service_type:"" 
          
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

        const { Name,Vehicle_number,phone_number,service_type} =this.state;

        const data ={
            Name:Name,
            Vehicle_number:Vehicle_number,
            phone_number:phone_number,
            service_type:service_type
            
        }

        

        console.log(data)

        axios.post("/post/save", data).then((res) => {
            if(res.data.success){
                this.setState(
                    {
                       
                      Name:"",
                      Vehicle_number:"",
                      phone_number:"",
                      service_type:""
                    }
                )
            }
        })
    }
    render(){
        return (
            <div><NavBar/>
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Customer Details</h1>
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
                          <label style={{marginBottom:'5px'}}> Service Type</label>
                          <select id="name"
                          className="form-control"
                          name="service_type" required
                          placeholder="Enter Service Type"
                          value={this.state.service_type}
                          onChange={this.handleInputChange}>
                           <option selected>Choose.....</option>
                           <option>Vehicle Service and Suspension</option>
                           <option>Genaral Maintaince and repair</option>
                           <option>Scanning and Diagnostics</option>
                           <option>Brake Service and oil change</option>
                           <option>battery replacment</option>
                           <option>Vehicle AC Service</option>
                          
                           

                        </select>
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