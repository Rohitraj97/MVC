
//5. Submission Schema
const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema(
    {
        marks: { type: Number, required: true },
        evaluation_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "evaluation",
            required: true
        },

        student_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student",
            required: true
        },

    }
)

//5. Submission model
const Submission = mongoose.model("submission", SubmissionSchema)
module.exports = mongoose.model("section", sectionSchema);
