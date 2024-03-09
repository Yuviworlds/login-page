const mongoose=require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/Login")
>TouchEvent(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connected");
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection=new mongoose.model("Collection",logInSchema)

module.exports=collection