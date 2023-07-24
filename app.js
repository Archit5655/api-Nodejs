import  Express  from "express";
import mongoose from "mongoose";


mongoose
  .connect("mongodb://127.0.0.1:27017", { dbName: "backendapi" })
  .then(() => console.log("connected to db"))
  .catch((e) => console.log(e));


const schema=new mongoose.Schema({
    name:String,
    email: String,
    password: String,
})


const User=mongoose.model("users",schema)



const app= Express()
app.get("/", (req,res)=>{
    res.send("working")
});
app.get("/users/all" , async(req,res)=>{

    const users=await User.find({})


    res.json({
        success:true,
        users,
    })
});
app.post("/users/new", async(req,res)=>{
    await User.create({
        name: "Archit",
     
        email:"architgarga@gmai",
        password: "f2f2f",
        })
        res.json({
            success:true,
            message:"REgisted successfully"
        });
        
    });





app.listen(4000,()=>{
    console.log("server is working")

});