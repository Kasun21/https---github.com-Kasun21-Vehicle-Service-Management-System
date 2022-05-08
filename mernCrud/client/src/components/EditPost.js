// import React, {Component} from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';


// export default class EditPost extends Component{
    


//     componentDidMount(){
//         // const id = this.props.match.params.id;
//         console.log(useParams());

//         // const state = {post:{}}

//         // axios.get(`http://localhost:8000/post${id}`).then((res) => {
//         //         if(res.data.success){
//         //             console.log(res.data);
//         //             this.setState({
//         //                 ...state,
//         //                 post : res.data.post
//         //             });

//         //             console.log(post.post);
//         //         }
//         // });

//  }



//  render(){
//     // return (
    
//     //     <div className="col-md-8 mt-4 mx-auto">
//     //         <h1 className="h3 mb-3 font-weight-normal" align="center">Service Details</h1>
//     //         <form className="needs-validation" noValidate>
//     //             <div className="form-group" style={{marginBottom:'15px'}}>
//     //                 <label style={{marginBottom:'5px'}} > Service Type </label>
//     //                 <input type= "text"
//     //                 className="form-control"
//     //                 name="topic" required
//     //                 placeholder="Enter the Service Type"
//     //                 value={post.topic}
//     //                 onChange={this.handleInputChange}/>
//     //             </div>

//     //         <div className="form-group" style={{marginBottom:'15px'}}>
//     //         <label style={{marginBottom:'5px'}} > How It Does </label>
//     //                 <input type= "text"
//     //                 className="form-control"
//     //                 name="description" required
//     //                 placeholder="How It Does"
//     //                 value={post.description}
//     //                 onChange={this.handleInputChange}/>
//     //         </div>

//     //         <div className="form-group" style={{marginBottom:'15px'}}>
//     //         <label style={{marginBottom:'5px'}} > Charges </label>
//     //                 <input type= "text"
//     //                 className="form-control"
//     //                 name="postCategory" required
//     //                 placeholder="Charges"
//     //                 value={this.state.postCategory}
//     //                 onChange={this.handleInputChange}/>
//     //         </div>

//     //         <button className="btn btn-success" type="submit"  style={{marginTop:'15px'}} onClick={this.onSubmit}>
//     //             <i className="far fa-check-square"></i>
//     //             &nbsp; Save
//     //         </button>
        
//     //         </form><br/><br/><br/><br/><br/><br/><br/><br/>
//     //         <p align="center"><b>2022@All rights recieved</b></p>
//     //     </div>
        
//     // )

//     return <h2>test</h2>
// }
// }


import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from './NavBar';



const EditPost =()=>{
    const {id} = useParams()
    const [post,setPost]=useState({})
    const navigate = useNavigate()
    console.log(post);
    useEffect(()=>{
        axios.get(`http://localhost:8000/post/${id}`).then((res) => {
                          if(res.data.success){
                             setPost(res?.data?.post);
                              
                          }
                  });
    },[])

   const  handleInputChange = (e) => {
        const {name,value} = e.target;

       setPost({
            ...post,
            [name]:value
        })
    }

    const handleUpdate=()=>{
        axios.put(`http://localhost:8000/post/update/${id}`,post).then(res=>{
            navigate(-1)
        })
    }

    return (
             <div><NavBar/>
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal" align="center">   </h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} > Service Name </label>
                        <input type= "text"
                        className="form-control"
                        name="topic" required
                        placeholder="Update the Service Type"
                        value={post.topic}
                        onChange={handleInputChange}/>
                    </div>
        
                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} > Description </label>
                        <input type= "text"
                        className="form-control"
                        name="description" required
                        placeholder="Update Description"
                        value={post.description}
                        onChange={handleInputChange}/>
                </div>
        
                <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}} > Charges </label>
                        <input type= "text"
                        className="form-control"
                        name="postCategory" required
                        placeholder=" Update Charges"
                        value={post.postCategory}
                        onChange={handleInputChange}/>
                </div>
        
                <button className="btn btn-success"   style={{marginTop:'15px'}} onClick={(e)=>{
                    e.preventDefault()
handleUpdate()
                }}>
                    <i className="far fa-check-square"></i>
                    &nbsp; Update
                </button>
                
                </form><br/><br/><br/><br/><br/><br/><br/><br/>
                <p align="center"><b>2022@All rights recieved</b></p>
            </div>
               </div> 
        )
}

export default EditPost;