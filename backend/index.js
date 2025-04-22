// step-1
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

// Step-2: Environment variables load kar rahe hain
dotenv.config({
    path: ".env"
});

// Step-3: Database connection
databaseConnection();

// Step-4: Express app banaya
const app = express();

// Step-5: Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Step-6: CORS setup (yeh important hai)
const corsOptions = {
    origin: 'http://localhost:5173',  // <-- yahan correct frontend origin
    credentials: true
};
app.use(cors(corsOptions));

// Step-7: API Routes
app.use("/api/v1/user", userRoute);

// Step-8: Server listen
app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
});
