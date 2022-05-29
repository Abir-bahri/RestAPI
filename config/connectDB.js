const mongoose = require('mongoose')


const connectDB=()=>{
    mongoose.connect("mongodb+srv://abiradmin:abir@admin@cluster0.k52cc.mongodb.net/secondmongoose?retryWrites=true&w=majority",(err)=>{
        if(err) throw err
        else console.log("database is connected")
    })
}
module.exports=connectDB