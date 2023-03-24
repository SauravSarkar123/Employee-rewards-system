import AssignTask from "../../modals/AssignTask.js";

export const getTasks = async (req,res,next)=>{
    try {
        const tasks = await AssignTask.find({}, { empName: 1, task: 1, companyName:1 });
        res.status(200).json({tasks});
    } catch (err){
        next(err);
    }
}