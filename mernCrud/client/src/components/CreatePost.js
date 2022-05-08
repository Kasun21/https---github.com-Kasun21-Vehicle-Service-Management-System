import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class CreatePost extends Component {

    constructor(props){
        super(props);
        this.state={
            topic:"",
            description:"",
            postCategory:""
          
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

        const {topic,description,postCategory} =this.state;

        const data ={
            topic:topic,
            description:description,
            postCategory:postCategory
            
        }

        

        console.log(data)


        //To save details that we entered from application in DB

        axios.post("http://localhost:8000/post/save", data).then((res) => {
            if(res.data.success){
                this.setState(
                    {
                       
                      topic:"",
                      description:"",
                      postCategory:""
                    }
                )
            }
            
        })
    }
    render(){
        return (
             <div><NavBar/>
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal" align="center">Add New Services</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} > Service Name </label>
                        <input type= "text"
                        className="form-control"
                        name="topic" required
                        placeholder="Enter the Service Type"
                        value={this.state.topic}
                        onChange={this.handleInputChange}/>
                    </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} > Description </label>
                        <input type= "text"
                        className="form-control"
                        name="description" required
                        placeholder="How It Does"
                        value={this.state.description}
                        onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} > Charges </label>
                        <input type= "text"
                        className="form-control"
                        name="postCategory" required
                        placeholder="Charges"
                        value={this.state.postCategory}
                        onChange={this.handleInputChange}/>
                </div>

                <button className="btn btn-success" type="submit"  style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; Save
                </button>
            
                </form><br/><br/><br/><br/><br/><br/><br/><br/>
                <p align="center"><b>2022@All rights recieved</b></p>
            </div>
            </div>
        )
    }
}