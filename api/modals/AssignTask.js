import mongoose from "mongoose";
import  Schema  from "mongoose";
import CompanyReg from "./CompanyReg.js";
import User from "./User.js";

const TaskSchema = new mongoose.Schema({
    companyName:{
        type: String,
        ref : CompanyReg
    },
    empName:{
        type : String,
         ref : User
    },
    task:{
        type: String,
        required : true,
    },
    taskName:{
        type: String,
        required : true,
       
    },
    taskDescription:{
        type : String,
        
    },
    deadline:{
        type : Date,
        required : true,
    },
    rewards:{
        type: Number,
        required : true,
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

export default mongoose.model("AssignTask", TaskSchema)