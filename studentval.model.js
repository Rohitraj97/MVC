

// student eval

const mongoose = require("mongoose");
const  studentevalSchema = new mongoose.Schema(
    {
        
        Student_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student",
            required: true
        },
        Evaluation_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "evaluation",
            required: true
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
)
const Studenteval = mongoose.model("studenteval", studentevalSchema)
module.exports = mongoose.model("studenteval",studentevalSchema );