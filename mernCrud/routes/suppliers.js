const express = require('express');
const suppliers = require('../models/suppliers');

const router = express.Router();

//save(create) supplier
router.post('/supplier/save', (req,res)=>{ 

    let newSupplier = new suppliers(req.body);

    newSupplier.save((err)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Supplier saved successfully"
        });
    });
});



//get(read) suppliers
router.get('/suppliers',(req,res) =>{
    suppliers.find().exec((err,suppliers) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingSupplier:suppliers
        });
    });
});


//get a specific post
router.get("/suppliers/:id", (req,res) =>{

    let supplierId = req.params.id;

    suppliers.findById(supplierId,(err,supplier) =>{
        if (err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            supplier
        });
     });           
})


//update supplier
router.put('/suppliers/update/:id', (req,res)=>{
    suppliers.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,supplier)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//Delete suppliers
router.delete('/suppliers/delete/:id', (req,res)=>{
    suppliers.findByIdAndRemove(req.params.id).exec ((err,deletepost)=>{ 

        if(err)return res.status (400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json ({
            message:"Delete Succesful",deletepost
        });
    });
});


module.exports = router;