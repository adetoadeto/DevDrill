import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import conDB from "./utils/connectDB.js";
import questionRoute from "./routes/question.route.js"
import courseRoute from "./routes/course.route.js"

conDB();
dotenv.config();
const PORT = process.env.PORT || 5000;
const allowedOrigins = [
    "http://localhost:5173", //local dev
    "https://your-frontend-domain.com" //link after deployment
]

const app = express();
app.use(express.json());
app.use(cors({
    origin: allowedOrigins
}));

app.use("/api/quiz", questionRoute)
app.use("/api/course", courseRoute)

app.listen(PORT, ()=> {
    console.log("Server running on port", PORT)
});