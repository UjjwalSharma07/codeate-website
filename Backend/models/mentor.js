const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
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
    companyName :{
        type : String,
        required : true
    },
    designation: {
        type : String,
        required : true
    },
    yearOfWorkExp : {
        type: Number,
        required : true
    },
    yearOfMentoringExp : {
        type: Number,
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

const mentorModel = mongoose.model('Mentor', mentorSchema);
module.exports = mentorModel;