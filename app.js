import express from "express";
import mongoose from "mongoose";
import { MONGOURI } from "./keys";
import path from "path";
import morgan from "morgan";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

// Database connection
mongoose.connect(MONGOURI, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on("connected", (err) => {
  if (err) {
    resizeBy.json(err);
  }
  console.log("Connected to MongoDB");
});

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use(require("./routes/routes"));

// Server connection
app.listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});
