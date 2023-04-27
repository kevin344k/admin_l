const express=require("express")
const router=express.Router()
const path=require("path")
const overview=[]
const views=path.join(__dirname,"/../views")
const adminDb = require("../models/db.js");

router.get("/",(req,res)=>{

  res.sendFile(views+"/index.html")
  
  })
 module.exports=router 