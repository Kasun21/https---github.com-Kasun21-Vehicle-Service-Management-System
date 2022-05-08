const express = require('express');
const posts = require('../models/posts');
const Posts = require('../models/posts');
const Customer = require('../models/Customer');
const router = express.Router();

//Register

router.post('/post/register',async(req,res) => {
     try{
         const {name,password,confirmpassword,phonenumber,address} = req.body
         
        if(!name || !password || !confirmpassword || !phonenumber || !address){
             return res.status(400).json({msg:"Please fill all the fields"})
        }
        if(password.length <= 5){
            return res.status(400).json({msg:"Password must have at least 5 characters"})
       }
       if(confirmpassword.length <= 5){
        return res.status(400).json({msg:"wrong confirm password"})
       }
       if(phonenumber.length <= 9){
        return res.status(400).json({msg:"Enter valid phone number"})
       }

        res.json({msg:"success"})

        } catch(err){

        }
})

//login

router.post('/login',(req,res) => {
    try{
        const {name,password} = req.body
        
       if(!name || !password ){
            return res.status(400).json({msg:"Please fill name and password correctly"})
       }
       if(password.length <= 5){
           return res.status(400).json({msg:"password is wrong"})
      }

       res.json({msg:"success"})

       } catch(err){

       }
})



//save posts

router.post('/post/save',(req,res)=> {

     let newPost = new Posts(req.body);

     newPost.save((err) => {
         if(err){
           return res.status(400).json({
               error:err
           });
          }
          return res.status(200).json({
              success:"Posts saved successfully"
       });   
    });
});

//get posts

router.get('/posts',(req,res) =>{
    Posts.find().exec((err,posts) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get a specific post

router.get("/post/:id",(req,res) =>{

    let postId = req.params.id;

    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            post
        });
    });


});


//update posts

router.put('/post/update/:id', (req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});   
            }
            return res.status(200).json({
                success:"updated Successfuly"    
            });
        }
    );
});


// delete Post

router.delete('/post/delete/:id', (req,res) => {
    Posts.findByIdAndRemove(req.params.id).exec((err,deletePost) => {
       
        if(err) return res.status(400).json({
            message:"Delete unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deletePost
        });

    });
});

module.exports = router ;