const express=require("express")
const router=express.Router()
const path=require("path")

const views=path.join(__dirname,"/../views")

router.get("/",(req,res)=>{
    res.sendFile(views+"/index.html")
  })

  router.get("/loader",(req,res)=>{
    res.sendFile(views+"/loader.html")
  })

 module.exports=router 