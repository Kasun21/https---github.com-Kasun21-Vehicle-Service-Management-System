const express = require('express');
const leaves = require('../models/leaves')

const router = express.Router();

//save leave

router.post('/leave/save',(req,res)=>{

    let newLeave = new leaves(req.body);

    newLeave.save((err) =>{
        if(err){
            return res.status(400).json({
              error:err
            });
        }
        return res.status(200).json({
            success: "leave saved successfully"
        });
    });
});

// get leave

router.get('/leaves',(req,res) =>{
    leaves.find().exec((err,leaves) =>{
       if(err){
           return res.status(400).json({
               error:err
           });
       } 
       return res.status(200).json({
           success:true,
           existingLeave:leaves
       });
    });

});

//get specific leave

router.get("/leave/:id",(req,res) =>{

   let leaveId = req.params.id;

   leaves.findById(leaveId,(err,leave) =>{
       if(err){
           return res.status(400).json({success:false, err})
       }

       return res.status(200).json({
           success:true,
           leave
       });
   });

});

//update leave

router.put('/leaves/update/:id',(req,res)=>{
    leaves.findByIdAndUpdate(
    req.params.id,
    {
        $set:req.body
    },
    (err,leave)=>{
        if(err){
            return res.status(400).json({error:err});
        }

        return res.status(200).json({
            success:"Update Succesfully"
        });
    }
    );
});

// delete leave

router.delete('/leaves/delete/:id',(req,res) =>{
    leaves.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull", deletedPost
        });
        
    });
});

module.exports = router;