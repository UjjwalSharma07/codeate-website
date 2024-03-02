const express = require("express");
const {
  enrollAProject,
  enrolledProjects,
  enrolledProject,
  submitProject,
  getAllUsers,
  updateuser,
  getUser
} = require("../controllers/user");
const router = express.Router();

router.put("/:userId", updateuser);
router.get("/:userId", getUser);


router.post("/project", enrollAProject);
router.get("/projects", enrolledProjects);
router.get("/project/:projectId", enrolledProject);
router.post("/project-submit", submitProject);

router.get("/users", getAllUsers); // all users

module.exports = router;
