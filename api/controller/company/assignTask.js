import express from "express";
import AssignTask from "../../modals/AssignTask.js";

export const assignTask = async (req, res) => {
  try {
    const compName = req.params.compName;
    const employeeName = req.params.employeeName;

    const {
      companyName,
      empName,
      task,
      taskName,
      taskDescription,
      deadline,
      rewards,
      status
    } = req.body;

    console.log("companyName:", compName);
    console.log("empName:", employeeName);

    const newStatus = status === "false" ?  "Completed":"Pending" ; // the condition

    const newTask = new AssignTask({
      companyName: compName,
      empName: employeeName,
      task,
      taskName,
      taskDescription,
      deadline,
      rewards,
      status: newStatus // set the new status based on the condition
    });

    const taskk = await newTask.save();
    console.log(taskk)
    res.status(201).json(taskk);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
