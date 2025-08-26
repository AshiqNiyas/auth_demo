import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({ error: "Fill all fields" });
  }
  try {
    const user = await userModel.findOne({ username });
    if (user) {
      return res.json({ error: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      username,
      password: hashedPassword,
    });
    res.json({ message: "User created successfully", newUser });
  } catch (error) {
    res.json({ error });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({ error: "Fill all fields" });
  }

  try {
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.json({ error: "No user found" });
    }

    const verified = await bcrypt.compare(password, user.password);
    if (!verified) {
      return res.json({ error: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET
    );
    res.json({ message: "User logged in", token, isAdmin: user.isAdmin });
  } catch (error) {
    res.json({ error });
  }
};
