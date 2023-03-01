import User from "../../modals/CompanyReg.js";
// import bcrypt from "bcryptjs";

export const loginComp = async (req, res, next) => {
  const { comName, password } = req.body;

  if (!comName || !password) {
    return res
      .status(400)
      .json({ message: "name and password are required fields" });
  }

  try {
    const user = await User.findOne({ comName:comName,password:password});

    if (!user) {
      return res.status(401).json({ message: "Invalid name or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

     if (!isMatch) {
      return res.status(401).json({ message: "Invalid name or password" });
     }

     const token = jwt.sign({name: user.name, password: user.password}, process.env.JWT)
     const { password:userPassword,...otherDetails} = await user._doc;
     console.log(token);

     res.cookie('access_token', token, { httpOnly: false }).status(200).json({ message: "Login successful", ...otherDetails});
  } catch (err) {
    next(err);
  }
};
