const mongoose=require('mongoose')

const userSchema =new mongoose.Schema({
    role:{type:String},
    uname:{type:String},
    password:{type:String}
})
const User=mongoose.model("Users",userSchema)

module.exports=User