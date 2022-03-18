const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json());
const connect = () => {
 
}

//  SCHEMA
//1.User Schema


// CRUD

//get for users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send({ User: users })
    }
    catch (err) {
        return res.status(500).send({ message: "something wrong" });
    }
})

//get for batchs


app.get("/batchs", async (req, res) => {
    try {
        const batchs = await Batch.find().lean().exec();
        return res.status(200).send({ Batch: batchs })
    }
    catch (err) {
        return res.status(500).send({ message: "something wrong" });
    }
})

//post for users

app.post("/users", async (req, res) => {
    try {
        const users = await User.create(req.body);
        return res.status(201).send(users)
    }
    catch (err) {
        return res.status(500).send({ message: "something wrong" });
    }
})

//batch Name


app.post("/batchs", async (req, res) => {
    try {
        const batchs = await Batch.create(req.body);
        return res.status(201).send(batchs)
    }
    catch (err) {
        return res.status(500).send({ message: "something wrong" });
    }
})

//student post


app.post("/students", async (req, res) => {
    try {
        const students = await Student.create(req.body);
        return res.status(201).send(students)
    }
    catch (err) {
        return res.status(500).send({ message: "something wrong" });
    }
})

// get for student

 

app.get("/students", async (req, res) => {
    try {
        const students = await Student.find().lean().exec();
        return res.status(200).send({ Student: students })
    }
    catch (err) {
        return res.status(500).send({ message: "something wrong" });
    }
})


//eval get




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

app.post("/studenteval", async (req, res) => {
    try {
        const studenteval = await Studenteval.create(req.body);
        console.log("rohit")
        return res.status(201).send(studenteval)
    }
    catch (err) {
        return res.status(500).send({ message: "something wrong" });
    }
})

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

app.listen(5000, async () => {
    try {
        await connect()
    }

    catch (err) {
        console.log(err)
    }
    console.log("listening on port 5000")
})




//userId=   62336485cd0951344090d038
//userId =  623364cf1269939cd4abba60
//batchId=  6233659f7017f69f161c923f
//studentid= 623373ca6761583b60a08405

//submission.findOne().sort({"marks:-1"}).populate({
  //  path : "studentid",
  //select : ["rollid"]
  // populate: {path:"User_id",select:["firstName"]},
// })