const { connectDatabase } = require("./database/database")
const Blog = require("./model/blogModel")
const express = require("express")
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Database Connection Function:
connectDatabase()
app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Success"
    })
})

// GET API => /blogs (All Blogs)
app.get("/blogs", async (req, res) => {
    // fetching/reading all Blogs from Blog model
    const blogs = await Blog.find()
    // check if blogs contains data or not
    if (blogs.length == 0) {
        res.status(404).json({
            // status: 200,
            message: "Empty Blogs",
        })

    } else {

        res.status(200).json({
            // status: 200,
            message: "Blogs Fetched Successfully.",
            data: blogs
        })
    }
})

// GET API-> /blogs/:id (single Blog)   


// create Blog API
app.post("/createBlog", async (req, res) => {
    const title = req.body.title;
    const subTitle = req.body.subTitle;
    const description = req.body.description;


    // Insert to database logic goes here
    await Blog.create({
        title: title,
        subTitle: subTitle,
        description: description
    })




    res.json({
        status: 200,
        message: "Blog Created Successfully."
    })
})

app.listen(2000, () => {
    console.log("NodeJS has Started in port 2000");

})