
const mongoose=require("mongoose")


// CONECTING TO THE DATABASE.
// mongoose.connect("mongodb+srv://nischalshrestha800:<password>@cluster0.0tq8wyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ")
// THINGS TO REMEMBER:-- Mathi ko line ma vako <password> lai replace garne agi afule rakhya password bata hai ta.

exports.connectDatabase=async()=>{
    await mongoose.connect("mongodb+srv://nischalshrestha800:narayanShrestha800@cluster0.0tq8wyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  console.log("Database Connected SucessFully")

}
//await --> jaba samma database  sga connect hudaina wait gar vanya ho
// await ko error hatauma mathi "async" halnuparxa






























// exports.connectDatabase=()=>{
//     mongoose.connect("mongodb+srv://nischalshrestha800:narayanShrestha800@cluster0.0tq8wyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//    .then(()=>{
//       console.log("Database connected Sucessfully");

//    })

// }