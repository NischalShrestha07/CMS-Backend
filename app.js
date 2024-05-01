const { connectDatabase } = require("./database/database")
// above line comes automatically when "connectDatabase()" is called.


const app=require("express")()
// const{connectDatabase}=require("./database/database")


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


app.listen(2000,()=>{
    console.log("NodeJS has Started in port 2000");

})