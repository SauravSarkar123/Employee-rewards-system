// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import userRoute from "./routes/register.js";
// import loginRoute from "./routes/login.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import regComp from "./routes/registerComp.js";
// import loginComp from "./routes/loginComp.js";
// import { verifyToken , verifyUser} from "./utils/verifyToken.js";
// const app = express()
// dotenv.config();

// const connect = async () =>{
//     try {
//         await mongoose.connect(process.env.MONGOO);
//         console.log("Connected to mongodb")
// }       catch (error){
//         throw error;
// }
// };

// mongoose.connection.on("disconnected", ()=>{
//     console.log("Mongodb disconnected")
// })

// mongoose.connection.on("connected", ()=>{
//     console.log("Mongodb connected")
// })
// app.use((err,req,res,next)=>{
//     const errstatus = err.status || 500;
//     const errmsg = err.message || "Something went wrong";
//     return res.status(errstatus).json({
//         success : false,
//         status : errstatus,
//         message : errmsg,
//         stack : err.stack,

//     })
// })
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use(cors());
// app.use(cookieParser());
// app.use(express.json())
// app.use("/", userRoute)
// app.use("/",loginRoute)
// app.use("/", regComp)
// app.use("/", loginComp)
// // app.use("/", authRoute)


// // app.use((req, res, next) => {
// //     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
// //     res.setHeader(
// //       "Access-Control-Allow-Headers",
// //       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
// //     );
// //     res.setHeader(
// //       "Access-Control-Allow-Methods",
// //       "GET, POST, PUT, PATCH, DELETE, OPTIONS"
// //     );
// //     next();
// //   });
  

// app.get("/", (req,res)=>{
//     res.send("HI")
// })


// app.listen(8800,()=>{
//     connect()
//     console.log("Connected")
// })

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/register.js";
import loginRoute from "./routes/login.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import regComp from "./routes/registerComp.js";
import loginComp from "./routes/loginComp.js";
import { verifyToken , verifyUser} from "./utils/verifyToken.js";
const app = express()
dotenv.config();

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGOO);
        console.log("Connected to mongodb")
}       catch (error){
        throw error;
}
};

mongoose.connection.on("disconnected", ()=>{
    console.log("Mongodb disconnected")
})

mongoose.connection.on("connected", ()=>{
    console.log("Mongodb connected")
})
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.json())
app.use("/", userRoute)
app.use("/",loginRoute)
app.use("/", regComp)
app.use("/", loginComp)



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use((err,req,res,next)=>{
    const errstatus = err.status || 500;
    const errmsg = err.message || "Something went wrong";
    return res.status(errstatus).json({
        success : false,
        status : errstatus,
        message : errmsg,
        stack : err.stack,

    })
})
  
app.get("/", (req,res)=>{
    res.send("HI")
})


app.listen(8800,()=>{
    connect()
    console.log("Connected")
})
