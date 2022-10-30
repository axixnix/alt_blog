const express = require("express")
const mongoose = require("mongoose")



const PORT = 3334

const app = express()

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})







//db connection
mongoose.connect("mongodb://127.0.0.1:27017/blog")
mongoose.connection.on("connected",()=>{
  console.log("mongodb connection successful")
})
mongoose.connection.on("error",(err)=>{
    console.log("connection to mongodb not successful")
    console.log(err)
})

app.listen(PORT,()=>{
    console.log(`listening on port:${PORT}`)
})
