
import { Schema, model } from "mongoose";


const userSchema = new Schema({
    email: String,
    age: Number,
    name: String,
})

const User = model("user", userSchema)


export default User;



