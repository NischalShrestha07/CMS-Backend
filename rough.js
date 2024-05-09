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



// ************app.js************
// above line comes automatically when "connectDatabase()" is called.
// DATABASE CONNECTING FUNCTION
// Error Alert:when we call below function it should automatically add details at top




// // ************database.js************
//await --> jaba samma database  sga connect hudaina wait gar vanya ho
// await ko error hatauma mathi "async" halnuparxa

// CONECTING TO THE DATABASE.
// mongoose.connect("mongodb+srv://nischalshrestha800:<password>@cluster0.0tq8wyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ")
// THINGS TO REMEMBER:-- Mathi ko line ma vako <password> lai replace garne agi afule rakhya password bata hai ta.
//*******************************************/




//*******************************************/
//     Blog.create({
//         title: req.body.title,
//         subTitle: req.body.subTitle,
//         description: req.body.description
//     })


//     res.json({
//         status: 201,
//         message: "Blog Created SuccessFully"
//     })
//*******************************************/


// PASSWORD
/*
mongoose.connect("mongodb+srv://nischalshrestha800:narayanShrestha800@cluster0.0tq8wyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Database connected successfully");
    })
*/ 