const mongoose=require('mongoose')

const patientSchema =new mongoose.Schema({
    name:{type:String},
    number:{type:String},
    address:{type:String},
    age:{type:Number},
    disease:{type:String},
    status:{type:String}
})
const Patient=mongoose.model("Patient",patientSchema)

module.exports=Patient