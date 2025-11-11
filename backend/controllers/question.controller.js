import Course from "../model/course.model.js";
import Question from "../model/questions.model.js";

export const getData = async (req, res) => {
    const { courseName, level } = req.query;
    if (!courseName || !level) {
        return res.status(401).json({ message: "Provide course name and level" })
    }
    try {
        const courseId = await Course.findOne({ courseName });
        const questions = await Question.find({ courseId, level })
        return res.status(200).json(questions)
    } catch (error) {
        console.log("Error in getData function in question.controller.js")
        return res.status(500).json(error.message)
    }
}

