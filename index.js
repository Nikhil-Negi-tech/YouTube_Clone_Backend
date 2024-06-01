import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import userRoutes from "./routes/user.js";
import videoRoutes from "./routes/video.js";
import commentsRoutes from "./routes/comments.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("/uploads", express.static(path.join("uploads")));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/video", videoRoutes);
app.use("/comment", commentsRoutes);

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
});

const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DATABASE CONNECTION ESTABLISHED");
  })
  .catch((error) => {
    console.log("DATABASE CONNECTION FAILED : " + error);
  });