// const ProjectModel = require("../models/project");
const { default: mongoose } = require("mongoose");
const ProjectMarkdown = require("../models/projectMarkdown");

// add a new project    ---->
exports.addProject = async (req, res) => {
  const { title, description, thumbnail, category, level } = req.body;

  if (!title || !description) {
    return res
      .status(401)
      .json({ success: false, message: "Title and Description are required" });
  }

  try {
    const project = await ProjectMarkdown.create({
      ...req.body,
    });

    return res.status(200).json({
      success: true,
      message: "Project Added Successfully!",
      project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await ProjectMarkdown.find();
    return res.status(200).json({
      success: true,
      projects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//single project
exports.singleProject = async (req, res) => {
  try {
    // const project = await ProjectMarkdown.findOne({ name: req.params["name"] });
    const project = await ProjectMarkdown.findById(req.params.id);

    return res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Update Event
exports.UpdateProject = async (req, res) =>{
  const _id = req.params.id;
  const Project = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)){
      return res.status(404).send("No Project with that id")
  }

  const updatedProject = await ProjectMarkdown.findByIdAndUpdate(_id, {...Project, _id}, {new:true})
  res.json(updatedProject)
}

// Delete Event
exports.deleteProject = async (req, res) =>{
  const _id = req.params.id

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("ID id not here")

  await ProjectMarkdown.findByIdAndDelete(_id);

  res.json({message: "Project deleted successfully"})
}

