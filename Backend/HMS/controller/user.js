const usersModel=require("../models/user")
const bcrypt = require('bcrypt')

let verifyUser=async(req,res)=>{
    console.log(req.body);
    if(req.body.username && req.body.password){

        let user=await usersModel.findOne({username: req.body.username});
        if(user){
        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if(result == true) {
                res.status(200).send({Status:"found",uname:user._username});} 
            else{
                res.status(400).send({Status:"incorrect-password"});}
            })
        }
        else{
            res.send({Status:"not-found"});
        }
    
    }

}

module.exports={
    verifyUser
}