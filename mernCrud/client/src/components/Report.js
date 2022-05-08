import React,{ Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Pdf from "react-to-pdf";

const ref = React.createRef();
export default class Report extends Component {
constructor(props) {
  super(props);
  this.state ={
    posts:[]
  };
} 
//show data
componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/posts").then(res => {
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts)
    }
  });
}


//delete
onDelete = (id) =>{

  axios.delete(`/post/delete/${id}`).then((res) =>{
  alert("Delete Successfully");
  this.retrievePosts();
})

}
//search 
filterData(posts,searchKey){

  const result = posts.filter((post) =>
  post.Name.includes(searchKey)||
  post.Vehicle_number.includes(searchKey)||
  post.phone_number.includes(searchKey)||
  post.service_type.includes(searchKey)
  )
  
  this.setState({posts:result}) 

}

handleSearchArea = (e) =>{

 const searchKey= e.currentTarget.value;

 axios.get("/posts").then(res =>{
   if(res.data.success){

    this.filterData(res.data.existingPosts,searchKey)
   }
   
 });
}

  
render() {
  return (
    
    
    <div><NavBar/>
   <br/><br/>
    <div className="container">
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
      <p align="center"> <b><h3>Customer Service Details</h3></b></p>
       </div>
       <div className="col-lg-3 mt-2 mb-2">
          <input
           className="form-control"
           type="search"
           placeholder="search"
           onChange={this.handleSearchArea}>     
           </input>
       </div>
      </div>
      <table className="table" ref={ref}>
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">Name</th>
               <th scope="col">Vehicle Number</th>
               <th scope="col">Phone Number</th>
               <th scope="col">Service type</th>
               
              
               <th scope="col">Edit/Delete</th>
               
             </tr>
           </thead>
           <tbody>
                {this.state.posts.map((posts,index) => (
                <tr key={index}>
                     <th scope="row">{index+1}</th>
                     <td> {posts.Name}</td>
                     <td>{posts.Vehicle_number}</td>
                     <td>{posts.phone_number}</td>
                     <td>{posts.service_type}</td>
                     <td>{posts.fault}</td>
                  
                     <td>
                       <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                         <i className="fas fa-edit"></i>&nbsp;Edit
                       </a>
                       &nbsp;
                       <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                         <i className="far fa-trash-alt"></i>&nbsp;Delete
                       </a>
                     </td>
                </tr>
                
                ))}
           </tbody>
          </table>
          
        <hr></hr>
        <button className="btn btn-success" ><a href="/add" style={{textDecoration:'none',color:'white'}}>Add customer</a></button><br></br> 
        
        <Pdf targetRef={ref}  filename="customer details.pdf">
                    {({ toPdf }) => <button className="btn btn-dark" onClick={toPdf}>Genarate Report</button>}
            </Pdf>

        <p align="center"><b>2022@All rights recieved</b></p>
        

    </div>
    <footer></footer>
    </div>
    

    
    )
  }
}
