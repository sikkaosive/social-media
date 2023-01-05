const express=require("express")
const cookieParser = require("cookie-parser")
const app=express()
if(process.env.NODE_ENV!=="production")
require("dotenv").config({path:"backend/config/config.env"})

//using middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

//importing routes
const post= require("./routes/Post")
const user= require("./routes/User")

//using routes
app.use("/api/v1", post)
app.use("/api/v1", user)

module.exports=app