import Course from "../model/course.model.js";

export const getAllCourses = async (req, res) => {
    try {
        const allCourses = await Course.find({}, "courseName")
        return res.status(200).json(allCourses)
    } catch (error) {
        console.log("Error in getAllCourses function in course.controller.js")
        res.status(500).json(error.message)
    } 
}

