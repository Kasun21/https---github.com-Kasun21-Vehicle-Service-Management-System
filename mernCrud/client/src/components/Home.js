
import NavBar from './NavBar';
import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component{
  constructor(props){
    super(props);

    this.state={
      posts:[],
      isLoading: false
    };
  }


   componentDidMount(){
     this.retrievePosts();
  console.log(this.state.posts);
  console.log(this.state.isLoading);
   }
   



  retrievePosts(){
    this.setState({isLoading:true})
        axios.get("http://localhost:8000/posts").then(res =>{
          if(res.data.success){
            this.setState({
              ...this.state,
              isLoading:false,
              posts:res.data.existingPosts
            });

            console.log(this.state.posts);
          }
        });
  }
    

  onDelete = (id) =>{

    axios.delete(`http://localhost:8000/post/delete/${id}`,).then((res) =>{
    alert("Delete Successfully");
    this.retrievePosts();
  })
  
  }
  
//   filterData(posts,searchKey){
  
//     const result = posts.filter((post) =>
//     post.topic.includes(searchKey)||
//     post.description.includes(searchKey)||
//     post.postCategory.includes(searchKey)
//     )
    
//     this.setState({posts:result}) 
  
//   }
  
//   handleSearchArea = (e) =>{
  
//    const searchKey= e.currentTarget.value;
  
//    axios.get("/posts").then(res =>{
//      if(res.data.success){
  
//       this.filterData(res.data.existingPosts,searchKey)
//      }
//    });
//   }

   
// //search 
// filterData(posts,searchKey){

//   const result = posts.filter((post) =>
//   //post.id.includes(searchKey)||
//   post.topic.includes(searchKey)||
//   post.Description.includes(searchKey)||
//   post.postCategory.includes(searchKey)
//   )
  
//   this.setState({posts:result}) 

// }

// handleSearchArea = (e) =>{

//  const searchKey= e.currentTarget.value;

//  axios.get("/posts").then(res =>{
//    if(res.data.success){

//     this.filterData(res.data.existingPosts,searchKey)
//    }
   
//  });
// }




  render(){
    return(
      <div><NavBar/>
      <div className="container">
         <p className="h3 mb-3 font-weight-normal" align="center"> Service Types</p>
         <div className="col-lg-3 mt-2 mb-2">
          <input
           className="form-control"
           type="search"
           placeholder="search"
           onChange={this.handleSearchArea}>     
           </input>
       </div>


               {this.state.isLoading?<h2>Loading...</h2>:<table className= "table">
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Service Type</th>
                      <th scope="col">Description</th>
                      <th scope="col">Charges</th>
                      <th scope="col">  </th>

                    </tr>
                  </thead>

                    <tbody> 
                      {this.state.posts.map((posts,index) =>(
                        <tr key ={index}>
                          <th scope = "row">{index+1} </th>
                          <td>
                              <a href={`/post/${posts._id}`} style = {{textDecoration:'none'}}>
                                {posts.topic}
                               </a>
                               </td>
                          <td>{posts.description}</td>
                          <td>{posts.postCategory}</td>
                          <td>
                            <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                              <i className ="fas fa-edit"></i>&nbsp;Edit
                            </a>
                             &nbsp;
                            <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                              <i className ="fas fa-trash-alt"></i>&nbsp;Delete
                            </a>
                            </td>
                        </tr>
                      ))}
                    </tbody>

               </table>}
                   
                   <button className="btn btn-success"><a href ="/add"  style = {{textDecoration:'none', color: 'white'}}>Add New Service </a></button>
         
      </div>
      </div>
    )
  }
}