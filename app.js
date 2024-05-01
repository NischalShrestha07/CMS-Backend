const { connectDatabase } = require("./database/database")

const app=require("express")()

// above line comes automatically when "connectDatabase()" is called.


// DATABASE CONNECTING FUNCTION
connectDatabase()

// GET API  -->  /
app.get("/",(req,res)=>{
    res.json({
        name:"Naruto",
        jutsu:"Shadow Clone Jutsu",
        friend:"Sasuke"

    })
})

// CREATE BLOG API
app.post("/createBlog",(req,res)=>{
    res.json({
        status:200,
        message:"Blog Created Successfully."
    })
})


app.listen(2000,()=>{
    console.log("NodeJS has Started in port 2000");

})