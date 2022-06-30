const router=require("express").Router()
const userController=require("../controller/user")

router.post('/verify-user',userController.verifyUser)
router.post('/send-email-code',userController.sendCode)
router.post('/verify-code',userController.verifyCode)
router.post('/update-password',userController.updatePassword)



module.exports=router