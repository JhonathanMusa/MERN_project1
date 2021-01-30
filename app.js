import express from "express";
import mongoose from "mongoose";
import { MONGOURI } from "./keys";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

// page encode
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database connection
mongoose.connect(MONGOURI, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on("Connected", (err) => {
  if (err) {
    resizeBy.json(err);
  }
  console.log("Connected to MongoDB");
});

app.use(require("./routes/routes"));

// Server connection
app.listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});
