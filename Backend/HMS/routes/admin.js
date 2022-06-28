const router = require("express").Router();
const adminController=require('../controller/admin')

router.post('/add-admin',adminController.addAdmin)
router.get('/get-admin',adminController.getAdmin)

module.exports=router