const app = require("express")()
const { connectDatabase } = require("./database/database")


// Database Connection Function:
connectDatabase()
app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Success"
    })
})



// create Blog API

app.listen(2000, () => {
    console.log("NodeJS has Started in port 2000");

})