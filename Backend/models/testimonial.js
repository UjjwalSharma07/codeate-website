const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    rating : {
        type: Number,
        required : true
    },
    review: {
       type: String,
       required: true
    },
    avatar : {
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

const testimonialModel = mongoose.model('Testimonial', testimonialSchema);
module.exports = testimonialModel;