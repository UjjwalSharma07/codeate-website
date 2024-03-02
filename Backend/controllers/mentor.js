const MentorModel = require('../models/mentor');
const cloudinary = require('cloudinary');

// add a new mentor    ----> 
exports.addMentor = async(req,res, next)=>{
    try{
    
    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'code8Website/mentors',
        crop: "scale"
    });
      const mentor = await MentorModel.create({
          ...req.body,
          avatar : {
            public_id : result.public_id,
            url : result.url
          }
      })

      return res.status(200).json({
        success : true,
        message: "Mentor Added Successfully!",
        mentor   
    });

    }catch(error){
        return res.status(500).json({
            success: false,
            message : error.stack
        }) 
    }
}

exports.getAllMentors = async (req, res) => {
    try {
        const mentors = await MentorModel.find();
        return res.status(200).json({
            success : true,
            mentors
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message : error
        }) 
    }
}