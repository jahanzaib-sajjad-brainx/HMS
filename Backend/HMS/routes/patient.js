const router = require("express").Router()
const patientController=require('../controller/patient')

router.post('/add-patient',patientController.addPatient)
router.get('/get-patient',patientController.getPatient)

module.exports=router