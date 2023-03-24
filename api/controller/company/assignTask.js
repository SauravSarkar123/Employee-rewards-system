import express from "express";


import AssignTask from "../../modals/AssignTask.js";


export const assignTask = async (req, res) => {
    
  
  try {
      const compName = req.params.compName;
      const employeeName = req.params.employeeName;
    //   const Address = req.params.address;
    //   const Mobile = req.params.mobile;
    //   const Email = req.params.email;
    //   const Wallet = req.params.wallet;
    //   const Onboard = req.params.isOnboarded;


    //   const { user,comName, comId } = req.body;
    const { companyName, empName,task, taskName, taskDescription, deadline, rewards } = req.body;

    console.log("companyName:", compName);
    console.log("empName:", employeeName);
      const newTask = new AssignTask({ companyName:compName,empName:employeeName,task, taskName,taskDescription,deadline,rewards});
      // const user = await User.findById(req.params._id);
    const taskk = await newTask.save();
    console.log(taskk)
    res.status(201).json(taskk);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};