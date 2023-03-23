import AssignTask from "../../modals/AssignTask.js";

export const getTasks = async (req,res,next)=>{
    try {
        const tasks = await AssignTask.find({}, { Name: 1, comId: 1, user:1 , comName:1, Onboard:1});
        res.status(200).json({details});
    } catch (err){
        next(err);
    }
}