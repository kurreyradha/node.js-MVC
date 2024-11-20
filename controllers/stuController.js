const studentModels = require("../models/stuModel");
const stuModel=require("../models/stuModel");
const dataSave=async(req,res)=>{
    
    const {rollno,name,city,fees}=req.body;
    stuModel.create({
      rollno:rollno,
      name:name,
      city:city,
      fees:fees


    })
    res.send("data save ho chuka hai");
}


const dataDisplay=async(req,res)=>{
  const myData=await stuModel.find();
  res.send(myData);
}
module.exports={
    dataSave,
    dataDisplay
}