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