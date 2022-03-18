const express = require("express")
const User = require("../model/user.model")
 
const router = express.Router()

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

//

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


//student post



// get for student

 



//eval get









