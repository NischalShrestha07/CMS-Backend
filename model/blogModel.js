// This is called the Schema. We have to built it on our own but SQL gives automatically.

const mongoose=require("mongoose")
const blogSchema=new mongoose.Schema({
    title:{
        type:String
    },
    subTitle:{
        type:String

    },
    description:{
        type:String
    }
},{
    timestamps:true
})