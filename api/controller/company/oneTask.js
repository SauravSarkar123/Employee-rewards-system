import express from "express";


import AssignTask from "../../modals/AssignTask.js";


export const oneTask = async (req, res, next) => {
  try {
    
    const task = await AssignTask.findOne({empName : req.params.empName});
    console.log(task)
    res.status(200).json({task:task});
  } catch (err) {
    next(err);
  }
};
