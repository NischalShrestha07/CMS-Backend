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

// CREATE BLOG API
// app.post("/createBlog", async (req, res) => {
//     // console.log(req.body);
//     // Insert to database logics goess here.


//     // Error Alert:when we call below "Blog" it should automatically add details at top
//     await Blog.create({
//         title: req.body.title,
//         subTitle: req.body.subTitle,
//         description: req.body.description
//     })



//     // res.json({
//     //     status: 201,
//     //     message: "Blog Created Successfully."
//     // })

// })

app.post("/createBlog", (req, res) => {
    console.log(req.body);

    //     Blog.create({
    //         title: req.body.title,
    //         subTitle: req.body.subTitle,
    //         description: req.body.description
    //     })


    //     res.json({
    //         status: 201,
    //         message: "Blog Created SuccessFully"
    //     })
})

app.listen(2000, () => {
    console.log("NodeJS has Started in port 2000");

})