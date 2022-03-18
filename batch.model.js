
//3. Batch schema
const mongoose=require("mongoose")
const BatchSchema = new mongoose.Schema(
    {
        batchName: { type: String, required: true },

    },
    {
        versionKey: false,
        timestamps: true,
    }
)
//3. Batch Model
const Batch = mongoose.model("batch", BatchSchema)

module.exports = mongoose.model("batch", BatchSchema);