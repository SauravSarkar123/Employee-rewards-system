import AddEmployee from "../../../modals/AddEmployee.js";

export const addEmployee = async (req, res, next) => {
  const { Name, RegisterNum, Email, Address, Mobile } = req.body;

  if (!Name || !RegisterNum  || !Email || !Address  || !Mobile ) {
    return res
      .status(400)
      .json({ message: "All the fields must be filled" });
  }

  const newEmp = new AddEmployee({Name, RegisterNum, Email, Address, Mobile});

  try {
    const savedEmp = await newEmp.save();
    console.log(savedEmp);
    res.status(200).json(savedEmp);
  } catch (err) {
    next(err);
  }
};