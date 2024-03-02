const express = require("express");
const router = express.Router();

const { postNewCourse, UpdateCourse,deleteCourse,getCourses ,singleCourse} = require('../controllers/Course');


// get all projects
router.post('/', postNewCourse )
router.patch('/:id',UpdateCourse )
router.delete('/:id', deleteCourse)
router.get("/", getCourses);
router.get("/:id", singleCourse);

// export default router;
module.exports = router;
