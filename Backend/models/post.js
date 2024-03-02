const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    publishedBy:{
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required : true
    }],
    quesans: [{
        heading : {
            type : String,
            required: true
        },
        description : {
            type : String,
            required: true
        }
    }],
    publishedOn: {
        type: Date,
        default: new Date
    },
    thumbnail : {
        public_id : {
            type : String,
            required: true
        },
        url : {
            type : String,
            required: true
        }
    }
});

const postModel = mongoose.model('Post', postSchema);
module.exports = postModel;