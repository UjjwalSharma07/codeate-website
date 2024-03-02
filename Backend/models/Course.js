const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    title: { type: String },
    message: { type: String },
    discord : { type: String },
    registerLink : { type: String },
    selectedFile: String,

}, {timestamps: true});

// mongoose.models = mongoose.models || {};
// export default mongoose.models.Course || mongoose.model('Course', CourseSchema);

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
