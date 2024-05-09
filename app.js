const { connectDatabase } = require("./database/database")
const Blog = require("./model/blogModel")

const app = require("express")()

// above line comes automatically when "connectDatabase()" is called.


// DATABASE CONNECTING FUNCTION
// Error Alert:when we call below function it should automatically add details at top
connectDatabase()

// GET API  -->  /
app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Success"

    })
})



app.post("/createBlog", (req, res) => {
    console.log(req.body);


})

app.listen(2000, () => {
    console.log("NodeJS has Started in port 2000");

})