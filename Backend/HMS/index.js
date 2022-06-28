const express=require('express')
const mongoose=require('mongoose')
const app=express()
const port = 3000


app.use(express.json())

app.use("/admin",require('./routes/admin'))
app.use("/manager",require('./routes/manager'))
app.use("/patient",require('./routes/patient'))

mongoose.connect('mongodb://127.0.0.1/HMS')
.then(res => {
  console.log("Database connected successfully...")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})