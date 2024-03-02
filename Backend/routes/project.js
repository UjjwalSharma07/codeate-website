const express = require("express");
const router = express.Router();

const {
  addProject,
  getProjects,
  singleProject,
  UpdateProject,
  deleteProject
} = require("../controllers/project");

// add a new project : admin (later)
router.post("/project", addProject);

// get all projects
router.get("/projects", getProjects);

//get a single project
// router.get("/projects/:name", singleProject);
router.get("/project/:id", singleProject);

router.patch('/:id',UpdateProject )
router.delete('/:id', deleteProject)



module.exports = router;
