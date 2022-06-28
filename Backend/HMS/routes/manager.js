const router = require("express").Router()
const managerController=require('../controller/manager')

router.post('/add-manager',managerController.addManager)
router.get('/get-manager',managerController.getManager)

module.exports=router