import User from "../../modals/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);
    const { name, email,password,  mobile, address, DOJ } = req.body;
   
  if (!name || !email  || !mobile || !address || !DOJ || !password ) {
    return res
      .status(400)
      .json({ message: "All the fields must be filled" });
  }

  const newUser = new User({ name, password:hash, email, mobile, address, DOJ});

 

 
    const savedUser = await newUser.save();
    console.log(savedUser);
   
    console.log(savedUser)
  } catch (err) {
    next(err);
  }
};
