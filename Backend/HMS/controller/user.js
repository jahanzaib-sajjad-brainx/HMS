const usersModel=require("../models/user")
const bcrypt = require('bcrypt')
const nodemailer=require('nodemailer')

// #Function-1
const verifyUser=async(req,res)=>{
    if(req.body.useremail && req.body.password){

        let user=await usersModel.findOne({useremail: req.body.useremail});
        if(user){
        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if(result == true) {
                res.status(200).send({Status:"found",uemail:user._useremail});} 
            else{
                res.status(400).send({Status:"incorrect-password"});}
            })
        }
        else{
            res.send({Status:"not-found"});
        }
    }
}
// #Function-2
const sendCode = async (req,res)=>{

    if(req.body.useremail){
        let user=await usersModel.findOne({useremail: req.body.useremail});
        
        if (user){
            let code = Math.floor(1000 + Math.random() * 9000);

            await usersModel.findOneAndUpdate({useremail:req.body.useremail},{
                code:code})

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'jahanzaib.sajjad@brainxtech.com',
                  pass: 'brainxtech54086'
                }
              });
              
              var mailOptions = {
                from: 'jahaznaib.sajjad@branxtech.com',
                to: user.useremail,
                subject: 'Code verification Email',
                text: String(code)
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            res.status(200).send({uemail:user.useremail, status:"found"});
        }
        else{
            res.send({Status:"not-found"});
        }
    }
}
// #Function-3
const verifyCode= async (req,res)=>{
    if(req.body.code){
        let user=await usersModel.findOne({code: req.body.code});
        if(user){
            res.status(200).send("verified")
        }
        else{
            res.send("incorrect-code")
        }
    }
}
// Function-4
const updatePassword=async (req,res)=>{

    await usersModel.findOneAndUpdate({useremail:req.body.useremail},{password:req.body.userpassword})
    res.status(200).send("password-updates successfully")

}
module.exports={
    verifyUser,
    sendCode,
    verifyCode,
    updatePassword
}