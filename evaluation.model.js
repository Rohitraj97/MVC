

//4. Evaluation Schema
 const mongoose=require("mongoose")
const EvaluationSchema = new mongoose.Schema(
    {
        dateOfEval: { type: Date, required: true },
        Student_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student",
            required: true
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

//4. Evaluation model
const Evaluation = mongoose.model("evaluation", EvaluationSchema)
module.exports = mongoose.model("evaluation", evaluationSchema);