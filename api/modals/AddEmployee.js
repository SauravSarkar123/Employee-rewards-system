import mongoose from "mongoose";
import  Schema  from "mongoose";

const CompanySchema = new mongoose.Schema({
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
    Password:{
        type : String,
        // required : true,
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