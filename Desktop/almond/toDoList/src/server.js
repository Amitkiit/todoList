const mysql= require("mysql")
const express = require("express")
const route = require("./routes/route")
const app = express()
app.use(express.json())
require('./models/mainModel')
app.use('/',route)

app.use("/",route)
app.listen(3000,()=>{
    console.log("server is connected on : " + 3000)
})