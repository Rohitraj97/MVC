const express = require("express")
const User = require("../model/student.model")
 
const router = express.Router()


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
