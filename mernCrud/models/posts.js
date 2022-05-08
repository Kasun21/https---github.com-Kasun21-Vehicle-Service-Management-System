const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    Vehicle_number:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true
    },
    service_type:{
        type:String,
        required:true
    },
    
    
});

module.exports = mongoose.model('Posts', postSchema);


