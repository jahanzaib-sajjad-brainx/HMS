const router=require("express").Router()
const userController=require("../controller/user")

router.post('/verify-user',userController.verifyUser)


module.exports=router