const mongoose=require('mongoose')

const userSchema =new mongoose.Schema({
    role:{type:String},
    useremail:{type:String},
    password:{type:String},
    code:{type:Number}
})
const User=mongoose.model("Users",userSchema)

module.exports=User