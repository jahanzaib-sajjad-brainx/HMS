
const adminModel=require("../models/admin")
const usersModel=require("../models/user")
const bcrypt = require('bcrypt')

let addAdmin=async (req,res)=>{
    if(req.body.uname && req.body.password && req.body.name && req.body.number && req.body.address)
    {
            
        let encrypt = await bcrypt.hash(req.body.password,10)
        let userinfo={
            role:"admin",
            uname:req.body.uname,
            password:encrypt
        }
        let admininfo={
            name:req.body.name,
            number:req.body.number,
            address:req.body.address
        }
        console.log(admininfo)
        await adminModel.insertMany([admininfo])    
        .catch((error)=>{
                console.log(error)
        })
        await usersModel.insertMany([userinfo])
       
        res.status(200).send("Admin added successfully")
    }
    else{
        res.status(400).send("Field-missing")
    
    }
  
}

let getAdmin=(req,res)=>{
    res.status(200).send(admins)
}

module.exports= {
    addAdmin,
    getAdmin
}