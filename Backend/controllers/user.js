const jwt = require("jsonwebtoken");
const ProjectMarkdown = require("../models/projectMarkdown");
const userModel = require("../models/user");

// Enroll into a project by projectId
exports.enrollAProject = async (req, res) => {
  const { projectId } = req.body;
  if (!projectId) {
    return res
      .status(401)
      .json({ success: false, message: "Please select a project" });
  }

  try {
    const user = req.user;

    const foundProject = user.projects.find(
      (project) => project?.projectId == projectId
    );

    if (foundProject)
      return res.status(400).json({
        success: false,
        message: "Already Enrolled In This Project",
        project: foundProject,
      });

    const result = await userModel.findOneAndUpdate(
      { _id: req.user.id },
      {
        $push: { projects: { projectId: projectId } },
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Enrolled Successfully!",
      project: result.projects,
      foundProject,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all enrolled projects
exports.enrolledProjects = async (req, res) => {
  try {
    const result = await userModel
      .findById(req.user.id)
      .populate("projects.projectId");

    if (!result?.projects)
      return res.status(200).json({
        success: true,
        message: "User Not Enrolled in any Projects",
        result,
      });

    // const allProjects = [];

    // result?.projects?.map((project) => {
    //   ProjectMarkdown.find(project.projectId)
    //     .then((res) => {
    //       allProjects.push(res);
    //       console.log("Project Fetched Success", res);
    //     })
    //     .catch((err) => {
    //       return res.status(404).send(err.message);
    //     });
    // });

    return res.status(200).json({
      success: true,
      projects: result.projects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get A enrolled project by projectId
exports.enrolledProject = async (req, res) => {
  try {
    const result = await userModel.findById(req.user.id);
    if (!result?.projects)
      return res.status(200).json({
        success: true,
        message: "User Not Enrolled in any Projects",
        result,
      });

    const foundProject = await userModel.findOne({
      _id: req.user.id,
      "projects.projectId": req.params.projectId,
    });
    console.log("foundProject", foundProject);

    if (!foundProject)
      return res.status(200).json({
        success: true,
        message: "User Not Enrolled in this Project",
        result,
      });
    return res.status(200).json({
      success: true,
      project: foundProject,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Submit A Enrolled Project
exports.submitProject = async (req, res) => {
  const { projectId, githubLink, deployedLink } = req.body;
  if (!projectId) {
    return res
      .status(400)
      .json({ success: false, message: "Please select a project" });
  }

  if (!githubLink) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide github link" });
  }

  try {
    const user = await userModel.findById(req.user.id);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User Not Found" });
    }

    const foundProject = user.projects.find(
      (project) => project?.projectId == projectId
    );

    if (!foundProject) {
      return res.status(400).json({
        success: false,
        message: "You are not enrolled in this project",
      });
    }
    if (foundProject?.isSubmitted) {
      return res.status(200).json({
        success: true,
        message: "You have already submitted this project.",
      });
    }

    // Both Will Work Smoothly
    // foundProject.set({
    //   githubLink: githubLink,
    //   isSubmitted: true,
    //   deployedLink: deployedLink,
    // });

    foundProject.githubLink = githubLink;
    foundProject.isSubmitted = true;
    if (deployedLink) {
      foundProject.deployedLink = deployedLink;
    }

    const result = await foundProject.save();
    const submittedUser = await user.save();

    return res.status(200).json({
      success: true,
      message: "Project Submitted Successfully!",
      project: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Users
exports.getAllUsers = async (req, res) => {
  const users = await userModel.find().populate("projects.projectId");
  return res.status(200).json({
    success: true,
    users,
  });
};



exports.updateuser = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  const { name, email, github, portfolio, role, linkedin, resume, profile } = req.body;

  try {
    // Find the user by ID and update the name and email
    const user = await userModel.findByIdAndUpdate(userId, 
      { name, email, github, portfolio, role, linkedin, resume, profile }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


exports.getUser =  async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the user by ID
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}