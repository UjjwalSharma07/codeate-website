
const CourseModel = require("../models/Course");
const { default: mongoose } = require("mongoose");
// import CourseModel from '../model/Course.js'
// import mongoose from "mongoose";

// add a new project/ course    ---->

exports.postNewCourse = async (req, res) =>{

  const course = req.body
  const NewCourse = new CourseModel(course)
  try {
    await NewCourse.save()
    console.log(NewCourse);
    res.status(201).json(NewCourse)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

// Update Course

exports.UpdateCourse = async (req, res) =>{
  const _id = req.params.id;
  const course = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)){
      return res.status(404).send("No course with that id")
  }

  const updatedCourse = await CourseModel.findByIdAndUpdate(_id, {...course, _id}, {new:true})
  res.json(updatedCourse)
}

// Delete Course

exports.deleteCourse = async (req, res) =>{
  const _id = req.params.id

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("ID id not here")

  await CourseModel.findByIdAndDelete(_id);

  res.json({message: "Course deleted successfully"})
}


// get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await CourseModel.find();
    return res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



//single Course
exports.singleCourse = async (req, res) => {
  try {
    // const project = await ProjectMarkdown.findOne({ name: req.params["name"] });
    const course = await CourseModel.findById(req.params.id);
    return res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
