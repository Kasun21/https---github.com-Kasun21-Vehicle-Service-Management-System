const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
   
    },
    quantity:{
        type:Number,
        required:true
    },
    supplier:{
        type:String,    
        required:true
    }
   
});

module.exports = mongoose.model('Posts',postSchema);