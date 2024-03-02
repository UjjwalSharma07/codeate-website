const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    thumbnail : {
        type : String,
    },
    description :{
        type : String,
        required : true
    },
    Solution:{
        type: String,
        required : true
    },
    Technical_Description:{
        type: String,
        required : true
    },
    Prototyping_Steps:[{
        type: String,
        required : true
    }],
    techStacks : [{
        type : String,
        required : true
    }],
    prblm_statement : [{
        type: String,
        required : true
    }],
    demo : [{
        type: String,
        required: true
    }],
    collaborators : [{
        type: String,
        required: true
    }],
    prerequisite : [{
        type: String,
        required: true
    }],
    authors : [{
        type: String,
        required: true
    }],
    resources : [{
        type: String,
        required: true
    }],
    projectLink: {
        type : String,
        required : true
    },
    downloadLink: {
        type : String,
        required : true
    },
    category: {
        type: String,
        requored: true
    },
    level: {
        type: String,
        requored: true
    },
    Real_life:{
        type:String
    }
});

const projectModel = mongoose.model('Project', projectSchema);
module.exports = projectModel;