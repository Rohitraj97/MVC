const mongoose = require("mongoose")
module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://MVC:MVC123@cluster0.uqz2p.mongodb.net/MVC?retryWrites=true&w=majority"
    )
};