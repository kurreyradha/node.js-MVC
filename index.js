const express=require("express");
const app=express();
const mongoose=require("mongoose");
const StuRoutes=require("./routes/studentRoutes");
const bodyparser = require('body-parser')



mongoose.connect("mongodb://127.0.0.1:27017/radha").then(()=>{
    console.log("DB connected")
})

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/students",StuRoutes);

app.listen(8000,()=>{

    console.log("server run on 8000");
})
