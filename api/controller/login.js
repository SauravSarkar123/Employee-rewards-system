import User from "../modals/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";
import { response } from "express";

export const loginUser = async (req, res, next) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res
      .status(400)
      .json({ message: "name and password are required fields" });
  }

  try {
    const user = await User.findOne({ name:name});

    if (!user) {
      return res.status(401).json({ message: "Invalid name or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch)

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({name: user.name, password: user.password}, process.env.JWT)
    // localStorage.setItem("access_token", token);
  
    const { password:userPassword,...otherDetails} = await user._doc;
    console.log(token);

    res.setHeader('Set-Cookie', `access_token=${token}; HttpOnly`);
   
    res.cookie('access_token', token, { httpOnly: true }).status(200).json({ message: "Login successful", ...otherDetails });
  } catch (err) {
    next(err);
  }
};
