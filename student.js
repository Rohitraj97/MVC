const express = require("express")
const User = require("../model/student.model")
 
const router = express.Router()


app.post("/students", async (req, res) => {
    try {
        const students = await Student.create(req.body);
        return res.status(201).send(students)
    }
    catch (err) {
        return res.status(500).send({ message: "something wrong" });
    }
})


app.get("/students", async (req, res) => {
    try {
        const students = await Student.find().lean().exec();
        return res.status(200).send({ Student: students })
    }
    catch (err) {
        return res.status(500).send({ message: "something wrong" });
    }
})



app.get("/students/:id",async(req,res) =>{
    try{
        const  students = await    Student.find({evaluation_id:req.params.id}) .populate({
       
        
            path: "User_id",
            select : ["firstName"],
            // populate: {path:"User_id",select:["firstName"]},
        })
            .lean().exec()
        return  res.status(200).send(students)
    }
    catch(err)
    {
        return res.status(500).send({message:"something wrong"});
    }
})


app.get("/students/:id",async(req,res) =>{
    try{
        const  students = await    Student.find({evaluation_id:req.params.id}) .populate({
       
        //
            path: "User_id",
            select : ["firstName"],
            // populate: {path:"User_id",select:["firstName"]},
        })
            .lean().exec()
        return  res.status(200).send(students)
    }
    catch(err)
    {
        return res.status(500).send({message:"something wrong"});
    }
})
