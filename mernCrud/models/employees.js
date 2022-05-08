const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    position:{
        type:String,
        required:true
    },

    contactno:{
        type:Number,
        required:true
    },

    salary:{
        type:Number,
        required:true
    },

    

});

module.exports = mongoose.model('employees',employeeSchema);