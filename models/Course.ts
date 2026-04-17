import mongoose from "mongoose";
const CourseSchema = new mongoose.Schema({

    title: { type: String, required: true},
    description: String,
    pathway: String,
    gradeLevel: String,
    keywords: [String],

});

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);