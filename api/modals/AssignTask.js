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
        required : true,
    },
    status:{ 
        type : String,
        default:false,
    },
    deadline:{
        type : String,
        required : true,
    },
    completion:{
        type : String,
        default:"Not Completed Yet ",
    },
    rewards:{
        type: Number,
        required : true,
    },
    isPending:{
        type:Boolean,
        default:true
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