import express from "express";
import AddEmployee from "../../modals/AddEmployee.js"
import User from "../../modals/User.js";

const router = express.Router();

// GET all employees
router.get("/addemppp/:_id", async (req, res) => {
  try {
    const employees = await AddEmployee.findById(req.params._id).populate("User","name");
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/adde/:_id/:name/:address/:mobile/:email", async (req, res) => {
    
  
    try {
        const userId = req.params._id;
        const Name = req.params.name
        const Address = req.params.address;
        const Mobile = req.params.mobile;
        const Email = req.params.email;

  
        const { user,comName, comId } = req.body;
        const newUser = new AddEmployee({ user:userId,comName, comId, Name:Name, Address : Address, Mobile:Mobile, Email:Email});
        // const user = await User.findById(req.params._id);
      const newEmployee = await newUser.save();
      res.status(201).json(newEmployee);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


// router.post("/add-employee/:_id", async (req, res) => {
//     try {
//       const userId = req.params._id;
//       const { comName, comId } = req.body;
  
//       // Find the user with the provided userId
//       let user = await User.findById(userId);
  
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }
  
//       // Create a new employee with the provided comName, comId, and userId
//       const newEmployee = new AddEmployee({ user: userId, comName, comId });
  
//       // Save the new employee to the database
//       await newEmployee.save();
  
//       // Push the new employee data into the user's AddEmployee field
//       user.AddEmployee.push(newEmployee);
//       await user.save();
  
//       // Find the updated user data with the new employee data
//       user = await User.findById(userId).populate("AddEmployee");
  
//       // Return the user data in the response
//       res.status(201).json(user);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });
  

export default router;
