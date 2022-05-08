const express = require('express');
const employees = require('../models/employees');

const router = express.Router();

//save employees

router.post('/employee/save', (req,res)=>{ 

    let newEmployee = new employees(req.body);

    newEmployee.save((err)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Employee saved successfully"
        });
    });
});


//get(read) employee
router.get('/employees',(req,res) =>{
    employees.find().exec((err,employees) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingEmployee:employees
        });
    });
});

//get specific employee

router.get("/employees/:id",(req,res) =>{

    let employeeId = req.params.id;
 
    employees.findById(employeeId,(err,employee) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }
 
        return res.status(200).json({
            success:true,
            employee
        });
    });
 
 });
 
 //update employee
 
 router.put('/employees/update/:id',(req,res)=>{
     employees.findByIdAndUpdate(
     req.params.id,
     {
         $set:req.body
     },
     (err,employee)=>{
         if(err){
             return res.status(400).json({error:err});
         }
 
         return res.status(200).json({
             success:"Update Succesfully"
         });
     }
     );
 });

 //Delete employee
router.delete('/employees/delete/:id', (req,res)=>{
    employees.findByIdAndRemove(req.params.id).exec ((err,deletepost)=>{ 

        if(err)return res.status (400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json ({
            message:"Delete Succesful",deletepost
        });
    });
});


module.exports = router;
