import React, { Component } from 'react';
import axios from 'axios';

export default class EditPost extends Component {
    
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
        const id = this.props.match.params.id;
        const {Name,Vehicle_number,phone_number,service_type} =this.state;

        const data ={
            Name:Name,
            Vehicle_number:Vehicle_number,
            phone_number:phone_number,
            service_type:service_type
        }

        

        console.log(data)

        axios.put(`/post/update/${id}`, data).then((res) => {
            if(res.data.success){
                alert(" Updated Successfully")
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
    retrivevePosts(){

        axios.get("./post").then(res =>{

          if (res.data.success){

            this.setState({

              posts:res.data.existingPost

            });
            console.log(this.state.post)

          }

        });

      };

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    Name:res.data.post.Name,
                    Vehicle_number:res.data.post.Vehicle_number,
                    phone_number:res.data.phone_number,
                    service_type:res.data.service_type,
                });

                console.log(this.state.post);
                this.retrivevePosts();       

            }
        });
    }
    render(){
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Update customer</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} > Topic </label>
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
                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; update
                </button>
                </form>
                &nbsp;

            </div>
        )
    }
}