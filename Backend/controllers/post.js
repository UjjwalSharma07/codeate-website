const PostModel = require('../models/post');
const cloudinary = require('cloudinary');

// add a new project    ----> 
exports.addPost = async(req,res, next)=>{
    try{
    
      const result = await cloudinary.v2.uploader.upload(req.body.thumbnail, {
            folder: 'code8Website/posts',
            crop: "scale"
      });

      const post = await PostModel.create({
              ...req.body,
              thumbnail : {
                public_id : result.public_id,
                url : result.url
              }
      })
      return res.status(200).json({
        success : true,
        message: "Post Added Successfully!",
        post   
    });

    }catch(error){
        return res.status(500).json({
            success: false,
            message : error.stack
        }) 
    }
}

exports.getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        return res.status(200).json({
            success : true,
            posts
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message : error
        }) 
    }
}