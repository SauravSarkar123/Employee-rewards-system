import User from "../../modals/User.js";
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
    const token = jwt.sign(
      { name: user.name,  address: user.address, email: user.email, id: user._id },
      process.env.JWTT// Set the token expiration time to 1 day
    );  
    const { password:userPassword,...otherDetails} = await user._doc;
    console.log(token);

  

    
   
    res.cookie('employee_token', token, { httpOnly: false }).status(200).json({ message: "Login successful", ...otherDetails});
    
  } catch (err) {
    next(err);

    
  }
};

