import React, {Component} from 'react';
import axios from 'axios';


export default class PostDetails extends Component{
     constructor(props){
         super(props);

            this.state ={
                post:{}
            };
     }

    //To load all details of specific data
    componentDidMount(){
           const id = this.props.match.params.id;

           axios.get(`http://localhost:8000/post${id}`).then((res) => {
                   if(res.data.success){
                       this.setState({
                           post : res.data.post
                       });

                       console.log(this.state.post);
                   }
           });

    }

//watch part 06
    render(){

         // const {topic,description,postCategory} = this.state.post;
        return(
            <div>
              Post Details
            </div>
        )
    }
}