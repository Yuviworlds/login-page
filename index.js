const express=require("express")

const path=req ("[path]")
const hbs=requ("hbs")
const collection=require("./mongodb")

const tempelatepath=path.join(__dirname, '../tempelates')
const app=express()
app.use(express.json())
app.set("view engin", "hbs")
app.set("view", tempelatepath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})


app.post("/signup",async (req,res)=>{

 const data={
    name:req.body.name,
    password:req.body.password
 }

await collection.insterMany([data])

res.render("home")


})


app.post("/login",async (req,res)=>{

    try{
        const check=await collection.findOne({name:req.body.name})

        if(check.password===req.body.password){
            res.render("home")
        }
        else{
            res.send("wrong password")
        }
    

    }
    catch{

        res.send("wrong details")


    }





})


app.listen(3000, ()=>{
    console.log("port connected")
})

