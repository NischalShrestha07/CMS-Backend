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
const Blog=mongoose.model("Blog",blogSchema)
module.exports=Blog
// instead of two line above we can also write
// model.exports=mongoose.model("Blog",blogSchema)