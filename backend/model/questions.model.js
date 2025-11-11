import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    level: {
        type: String,
        enum: ["beginners", "intermediate", "advanced"],
        required: true
    },
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true,
    },
    answer: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const Question = mongoose.model("Question", questionSchema)
export default Question;