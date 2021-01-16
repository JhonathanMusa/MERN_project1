import { Router } from "express";
const router = Router();

import User from "../models/model";

router.get("/", (req, res) => {
  res.send("Welcome");
});

router.get("/users", async (req, res) => {
  try {
    const userDB = await User.find();
    res.status(200).json(userDB);
  } catch (error) {
    return res.status(400).json({
      message: "An error ocurred",
      error,
    });
  }
});

router.get("/user/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const userDB = await User.findById({ _id });
    res.status(200).json(userDB);
  } catch (error) {
    return res.status(400).json({
      message: "An error ocurred",
      error,
    });
  }
});

router.post("/new-user", async (req, res) => {
  const body = req.body;
  try {
    const userDB = await User.create(body);
    res.status(200).json(userDB);
  } catch (error) {
    return res.status(500).json({
      message: "An error ocurred",
      error,
    });
  }
});

router.put("/user/:id", async (req, res) => {
  const body = req.body;
  const _id = req.params.id;
  try {
    const userDB = await User.findByIdAndUpdate(_id, body, { new: true });
    res.json(userDB);
  } catch (error) {
    return res.status(400).json({
      message: "An error ocurred",
    });
  }
});

router.delete("/user/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const userDB = await User.findByIdAndDelete({ _id });
    if (!userDB) {
      res.status(400).json({
        message: "The user was not found",
      });
    }
    res.json(userDB);
  } catch (error) {
    return res.status(400).json({
      message: "An error ocurred",
      error,
    });
  }
});

module.exports = router;
