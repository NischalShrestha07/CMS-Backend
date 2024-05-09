
const mongoose = require("mongoose")

exports.connectDatabase = async () => {
  //  await mongoose.connect("mongodb+srv://nischalshrestha800:narayanShrestha800@cluster0.0tq8wyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  await mongoose.connect("mongodb+srv://nischalshrestha800:narayanShrestha800@cluster0.0tq8wyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  console.log("Database Connected SucessFully")

}































// exports.connectDatabase=()=>{
//     mongoose.connect("mongodb+srv://nischalshrestha800:narayanShrestha800@cluster0.0tq8wyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//    .then(()=>{
//       console.log("Database connected Sucessfully");

//    })

// }