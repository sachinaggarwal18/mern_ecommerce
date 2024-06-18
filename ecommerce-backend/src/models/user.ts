import mongoose from "mongoose";
import validator from "validator";

interface IUser extends Document{
    _id: string,
    name: string,
    photo: string,
    email: string,
    role: "admin" | "user",
    gender: "male" | "female",
    dob: Date,
    createdAt: Date,
    updatedAt: Date,
    //virtal attribute
    age:number,
}

const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "please enter your ID"],
    },
    name: {
        type: String,
        required: [true, "please enter your name"],
    },
    email: {
        type: String,
        unique: [true, "Email already exists."],
        required: [true, "please enter your email"],
        validate: {
            validator: validator.isEmail,
            message: "Please provide a valid email",
        },
    },
    photo: {
        type: String,
        required: [true, "please add photo"],
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    dob: {
        type: Date,
        required: [true, "please enter your Date Of Birth"],
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "please enter your gender"],
    },
    timeStamp: {
        type: Boolean,
        default: true,
    },
});

schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
});

export const User = mongoose.model<IUser>("User", schema);
  