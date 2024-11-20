const express=require("express");
const route =express.Router();
const StuController=require("../controllers/stuController");

route.post("/datasave",StuController.dataSave);
route.get("/datadisplay",StuController.dataDisplay);

module.exports=route;
