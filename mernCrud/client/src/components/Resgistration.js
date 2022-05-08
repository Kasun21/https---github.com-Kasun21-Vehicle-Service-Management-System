import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class Registration extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            password:"",
            confirmpassword:"",
            phonenumber:"",
            address:""
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

        const { name,password,confirmpassword,phonenumber,address} =this.state;

        const data ={
            name:name,
            password:password,
            confirmpassword:confirmpassword,
            phonenumber:phonenumber,
            address:address
            
        }

        console.log(data)

        axios.post("/post/register", data).then((res) => {
            if(res.data.success){
                this.setState(
                    {
                       
                      name:"",
                      password:"",
                      confirmpassword:"",
                      phonenumber:"",
                      address:""
                    }
                )
            }
        })
    }
    render(){
    return (
        <div><NavBar/>
        <div>
        <div class="white-box">
        <br/>
        <p align="left" ><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Best Automobile Care Specialist</h6></p>
        <p align="left"><h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Registration</h2></p>
      
        <div className="register">
        <form className="needs-validation" noValidate>
        <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Name</label>
                        <input type= "text"
                        className="form-control"
                        name="name" required
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} > Password </label>
                        <input type= "text"
                        className="form-control"
                        name="password" required
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}/>
                </div>
     
                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} >Confirm Password </label>
                        <input type= "text"
                        className="form-control"
                        name="confirmpassword" required
                        placeholder="Enter Confirm Password"
                        value={this.state.confirmpassword}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} >Phone Number </label>
                        <input type= "text"
                        className="form-control"
                        name="phonenumber" required
                        placeholder="Enter Confirm Phone Number"
                        value={this.state.phonenumber}
                        onChange={this.handleInputChange}/>
                </div>
                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} > Address </label>
                        <input type= "text"
                        className="form-control"
                        name="address" required
                        placeholder="Enter Address"
                        value={this.state.address}
                        onChange={this.handleInputChange}/>
                </div>

      

      
        <div class="center">

       <button className="btn btn-dark"  type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp;Register
                </button>
       </div>
       <br/>
        </form>
        
        <footer class="page-footer font-small blue">
    <div class="footer-copyright text-center py-3"><b>© 2022 All right recieved</b>
  </div>
  </footer>
        </div>
        </div>
        </div>
        </div>
        
    )
}
}
