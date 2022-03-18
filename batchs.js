const express = require("express")
const User = require("../model/batch.model")
 
const router = express.Router()
// get for batchs


app.get("/batchs", async (req, res) => {
    try {
        const batchs = await Batch.find().lean().exec();
        return res.status(200).send({ Batch: batchs })
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