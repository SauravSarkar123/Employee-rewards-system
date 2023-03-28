import mongoose from "mongoose";
import  Schema  from "mongoose";
import CompanyReg from "./CompanyReg.js";
import AssignTask from "./AssignTask.js";
import User from "./User.js";

const RewardTaskSchema = new mongoose.Schema({
    // companyName:{
    //     type: String,
    //     ref : CompanyReg
    // },
    EmpName:{
        type : String,
         ref : User
    },
    Task:{
        type: String,
        required : true,
        ref : AssignTask
    },
    // taskName:{
    //     type: String,
    //     required : true,
       
    // },
    // taskDescription:{
    //     type : String,
        
    // },
    Deadline:{
        type : Date,
        required : true,
        ref : AssignTask
    },
    Rewards:{
        type: Number,
        required : true,
        ref : AssignTask

    }

    // status:{
    //     type : Boolean,
    //     required : true,
    //     default : true
    // },

    // tokensPurchased : {
    //     type : Number,
    //     required : true
    // }

})

export default mongoose.model("RewardTask", RewardTaskSchema)