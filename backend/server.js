import express from "express";
import  dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
import connectToMongoDb from "./db/connectToMongoDb.js";

const app=express();
dotenv.config();

const PORT = process.env.PORT || 5001; 


app.use(express.json());
app.use(cookieParser());

//app.get("/",(req,res)=>{
    // server is running "http://localhost:8001/"
    //res.send("Hello Bhargav ...")
//})

app.use("/",authRoutes)
app.use("/message/",messageRoutes)
app.use("/users/",userRoutes)

app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Server is running on the port ${PORT}`);
})
