const TestimonialModel = require('../models/testimonial');
const cloudinary = require('cloudinary');

// add a new testimonial    ----> 
exports.addTestimonial = async(req,res, next)=>{
    try{
    
    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'code8Website/testimonials',
        crop: "scale"
    });
      const testimonial = await TestimonialModel.create({
          ...req.body,
          avatar : {
            public_id : result.public_id,
            url : result.url
          }
      })

      return res.status(200).json({
        success : true,
        message: "Testimonial Added Successfully!",
        testimonial   
    });

    }catch(error){
        return res.status(500).json({
            success: false,
            message : error
        }) 
    }
}

exports.getAllTestimonials = async (req, res) => {
    try {
        const testimonial = await TestimonialModel.find();
        return res.status(200).json({
            success : true,
            testimonial
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message : error
        }) 
    }
}