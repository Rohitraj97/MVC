const express = require("express")
const User = require("../model/user.model")
 
const router = express.Router()

app.get("/evaluations", async (req, res) => {
    try {
        const evaluations = await Evaluation.find().lean().exec();
        return res.status(200).send({ Evaluation: evaluations })
    }
    catch (err) {
        return res.status(500).send({ message: "something wrong" });
    }
})

//evaluation Post
// Studenteval

app.post("/evaluations", async (req, res) => {
    try {
        const evaluations = await Evaluation.create(req.body);
        console.log("rohit")
        return res.status(201).send(evaluations)
    }
    catch (err) {
        return res.status(500).send({ message: "something wrong" });
    }
})

//eval:id

app.get("/evaluations/:id",async(req,res) =>{
    try{
        const  evaluations = await   Evaluation.find({Student_id:req.params.id}) .populate({
       
        
            path: "User_id",
            select : ["firstName"],
            populate: {path:"User_id",select:["firstName"]},
        })
            .lean().exec()
        return  res.status(200).send(evaluations)
    }
    catch(err)
    {
        return res.status(500).send({message:"something wrong"});
    }
})