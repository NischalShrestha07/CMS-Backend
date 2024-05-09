const app = require("express")()
const mongoose = require("mongoose")




app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Success"

    })
})





app.listen(2000, () => {
    console.log("NodeJS has Started in port 2000");

})