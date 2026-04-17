import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
    message: String,
});

export default mongoose.models.Test || mongoose.model("Test",TestSchema);