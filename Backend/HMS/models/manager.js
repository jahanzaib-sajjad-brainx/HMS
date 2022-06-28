const mongoose=require('mongoose')

const managerSchema =new mongoose.Schema({
    name:{type:String},
    number:{type:String},
    address:{type:String}
})
const Manager=mongoose.model("Manager",managerSchema)

module.exports=Manager