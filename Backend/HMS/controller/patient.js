
const patientModel=require("../models/patient")
const usersModel=require("../models/user")
const bcrypt = require('bcrypt')

let addPatient=async (req,res)=>{
    if(req.body.uname && req.body.password && req.body.name && req.body.number && req.body.address  && req.body.age  && req.body.disease && req.body.status)
    {
        let encryptedPassword = await bcrypt.hash(req.body.password,10)
        let userinfo={
            role:"patient",
            deactivate:false,
            uname:req.body.uname,
            password:encryptedPassword
        }
        let patientinfo={
            name:req.body.name,
            number:req.body.number,
            address:req.body.address,
            age:req.body.age,
            disease:req.body.disease,
            status:req.body.status
        }
        usersModel.insertMany([userinfo])
        patientModel.insertMany([patientinfo])
        res.status(200).send("Patient added successfully");
    }
    else{
        res.status(400).send("Field-missing");
    }
    
}

let getPatient=async (req,res)=>{
    let patient=await patientModel.find();
    res.status(200).send(patient)
}

module.exports= {
    addPatient,
    getPatient
}