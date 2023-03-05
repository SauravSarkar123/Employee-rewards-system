import mongoose from "mongoose";
import  Schema  from "mongoose";

const AddEmployeeSchema = new mongoose.Schema({
    Name:{
        type: String,
        required : true,
        unique : true,
    },
    RegisterNum:{
        type: String,
        required : true,
        unique : true
    },
    
    Email:{
        type: String,
        required : true,
        unique: true,
    },
  
    Address:{
        type : String,
        unique : true
    },
    Mobile:{
        type : Number,
        required : true,
    },
    // DOJ : {
    //     type : Date,
    //     required : true,
    // }
    // status:{
    //     type : Boolean,
    //     required : true,
    //     default : true
    // },

    // tokensPurchased : {
    //     type : Number,
    //     required : true
    // }

},{timestamps:true})

export default mongoose.model("AddEmployee", AddEmployeeSchema)