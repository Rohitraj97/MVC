
const mongoose=require("mongoose")

const StudentSchema = new mongoose.Schema(
    {
        rollId: { type: String, required: true },
        // currentBatch: { type: String, required: true },
        User_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        Batch_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "batch",
            required: true
        },
        evaluation_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "evaluation",
            required: false
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }

)
//2. student model
const Student = mongoose.model("student", StudentSchema)
module.exports = mongoose.model("student", studentSchema);