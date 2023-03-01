import CompanyReg from "../../modals/CompanyReg.js";

export const registerCompany = async (req, res, next) => {
  const { comName, comAddress, comEmail, password, mobile } = req.body;

  if (!comName || !comEmail  || !password || !comEmail  || !mobile ) {
    return res
      .status(400)
      .json({ message: "All the fields must be filled" });
  }

  const newUser = new CompanyReg({comName, comEmail, comAddress, password, mobile});

  try {
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};
