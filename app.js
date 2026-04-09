import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import dbConnection from "./src/config/db.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // ← ADD THIS LINE (before routes!)

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

dotenv.config();
dbConnection();

app.use(express.json());

// app.use(errorHandler);
app.get("/", (req, res) => {
  res.json("Doc_Gen_Backend");
});

export default app;
