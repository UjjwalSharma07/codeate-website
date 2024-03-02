const MenteeModel = require('../models/mentee');
const cloudinary = require('cloudinary');

// add a new mentee   
exports.addMentee = async(req,res, next)=>{
    try{
    
    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'code8Website/mentees',
        crop: "scale"
    });
      const mentee = await MenteeModel.create({
          ...req.body,
          avatar : {
            public_id : result.public_id,
            url : result.url
          }
      })

      return res.status(200).json({
        success : true,
        message: "Mentee Added Successfully!",
        mentee  
    });

    }catch(error){
        return res.status(500).json({
            success: false,
            message : error
        }) 
    }
}

exports.getAllMentees = async (req, res) => {
    try {
        const mentees = await MenteeModel.find();
        return res.status(200).json({
            success : true,
            mentees
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message : error
        }) 
    }
}