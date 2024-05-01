
const mongoose=require("mongoose")
exports.connectDatabase=async()=>{
// CONECTING TO THE DATABASE.
// mongoose.connect("mongodb+srv://nischalshrestha800:<password>@cluster0.0tq8wyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ")
// THINGS TO REMEMBER:-- Mathi ko line ma vako <password> lai replace garne agi afule rakhya password bata hai ta.

   await mongoose.connect("mongodb+srv://nischalshrestha800:narayanShrestha800@cluster0.0tq8wyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ")
   console.log("DataBase connected Successfully.");
//await --> jaba samma database  sga connect hudaina wait gar vanya ho
// await ko error hatauma mathi "async" halnuparxa

}