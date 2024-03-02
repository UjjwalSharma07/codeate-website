const express = require("express");
const router = express.Router();

const { postNewEvent, UpdateEvent, deleteEvent, getEvent,singleEvent} = require('../controllers/Event');

// get all projects
router.post('/', postNewEvent )
router.patch('/:id',UpdateEvent )
router.delete('/:id', deleteEvent)
router.get("/", getEvent);
router.get("/:id", singleEvent);

// export default router;
module.exports = router;