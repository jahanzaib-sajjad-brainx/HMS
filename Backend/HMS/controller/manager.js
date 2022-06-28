
const managerModel=require("../models/manager")
const usersModel=require("../models/user")
const bcrypt = require('bcrypt')

let addManager= async(req,res)=>{
    if(req.body.uname && req.body.password && req.body.name && req.body.number && req.body.address)
    {

        let encrypt = await bcrypt.hash(req.body.password,10)
        let userinfo={
            role:"manager",
            deactivate:false,
            uname:req.body.uname,
            password:encrypt
        }
        let managerinfo={
            name:req.body.name,
            number:req.body.number,
            address:req.body.address
        }
        await usersModel.insertMany([userinfo])
        await managerModel.insertMany([managerinfo])
        res.status(200).send("Manger added successfully")
    }
    else{
        res.status(400).send("Field-missing")
    
    }
    
}

let getManager=(req,res)=>{
    managerModel.find();
    res.status(200).send()
}

module.exports= {
    addManager,
    getManager
}