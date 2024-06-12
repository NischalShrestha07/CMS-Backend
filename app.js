const { connectDatabase } = require("./database/database")
const Blog = require("./model/blogModel")
const express = require("express")
const app = express()
const cors = require("cors")


// if want to use multiple then use array Examples: origin:["http://localhost:5174/","http://localhost:5174/"]
app.use(cors({
    origin: "http://localhost:5173"
}))



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//manage
// Database Connection Function:
connectDatabase()
app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Success I am alive."
    })
})
// API => http://localhost:2000/

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
            blogs: blogs
        })
    }
})

// GET API-> /blogs/:id (single Blog)   
app.get("/blogs/:id", async (req, res) => {

    const id = req.params.id
    // const blog = await Blog.find({ _id: id })
})


// create Blog API naya blogs banuda xainxa!!
app.post("/createBlog", async (req, res) => {
    const title = req.body.title;
    const subTitle = req.body.subTitle;
    const description = req.body.description;

    // changes

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


// UPDATE BLOG API  yo naya kai halna xainxa!!fd
app.patch("/blogs/:id", async (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const subTitle = req.body.subTitle
    const description = req.body.description

    // check if blog with id exists or not

    // const isBlogFound = await Blog.find({
    //     id: id
    // })
    // if (isBlogFound.length == 0) {
    //     return res.json({
    //         message: "No Blog found with that id"
    //     })
    // }


    await Blog.findByIdAndUpdate(id, {
        title: title,
        subTitle: subTitle,
        description: description
    })
    res.status(200).json({
        message: "Blog updated SuccessFully"

    })

})


// DELETE API aba post garya lai xai delete garne
app.delete("/blogs/:id", async (req, res) => {
    const id = req.params.id
    // const {id} =req.params
    await Blog.findByIdAndDelete(id)

    res.status(200).json({
        message: "Blogs Deleted SuccessFully."
    })
})

app.listen(2000, () => {
    console.log("NodeJS has Started in port 2000");

})
