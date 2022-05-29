const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema= new Schema({
    fname:{
        required:true,
        type:String
    },
    lname:{
        required:true,
        type:String
    },
    address:String,
    phonenumber:Number,
    
    
   
})
module.exports=mongoose.model("User",userSchema)