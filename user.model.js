
//  SCHEMA
//1.User Schema


const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        gender: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        type: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
)
//1. user model
const User = mongoose.model("user", UserSchema)
module.exports = mongoose.model("user", userSchema);
//2.  student schema

