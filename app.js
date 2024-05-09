const app = require("express")()
const mongoose = require("mongoose")

// connecting to Database
mongoose.connect("mongodb+srv://nischalshrestha800:narayanShrestha800@cluster0.0tq8wyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Database connected successfully");
    })



app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Success"

    })
})





app.listen(2000, () => {
    console.log("NodeJS has Started in port 2000");

})