const express = require('express');

const router = express.Router();
const User = require("../models/user")

// POST :  ADD A NEW USER TO THE DATABASE 
router.post("/newUser",(req,res)=>{
    const {fname, lname,address,phonenumber}=req.body;

    const newUser = new User({fname, lname,address,phonenumber});
 
    newUser.save()
    .then((newUser)=>res.send(newUser))
    .catch((err)=>res.status(404).send({msg:"cannot add user"}))
 
})
//GET :  RETURN ALL USERS 
router.get("/find-allusers",(req,res)=>{
    User.find()
    .then((data)=>{res.send(data)})
    .catch((err)=>res.status(500).send(err))
  })

// PUT : EDIT A USER BY ID
router.put("/update/:id",(req,res)=>{
    User.findByIdAndUpdate({_id:req.params.id},{...req.body},(err,data)=>{
        if (err) throw err
        else res.json(req.body)
    })
  })
//   DELETE : REMOVE A USER BY ID
router.delete("/delete/:id",(req,res)=>{
    User.findByIdAndDelete({_id:req.params.id},(err,data)=>{
        if(err) throw err 
        else res.json({msg:"deleted"})
    })
  })

  module.exports=router