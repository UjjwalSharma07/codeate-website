const mongoose = require('mongoose');

const menteeSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    gender: {
        type: String,
        required:true
    },
    contactNumber : {
        type: Number,
        required:true
    },
    collegeName :{
        type : String,
        required : true
    },
    stream: {
        type : String,
        required : true  
    },
    qualType: {
        type : String,
        required : true
    },
    pursuingQual:{
        type : String,
        required : true
    },
    graduationYear: {
        type : Number,
        required : true 
    },
    domain : {
        type: String,
        required : true
    },
    linkedinLink : {
        type : String
    },
    githubLink : {
        type : String
    },
    emailId: {
        type: String,
        required : true
    } ,
    avatar : {
        public_id : {
            type : String,
            required: true
        },
        url : {
            type : String,
            required: true
        }
    },
    question: {
        type: String,
        required : true
    }
});

const menteeModel = mongoose.model('Mentee', menteeSchema);
module.exports = menteeModel;