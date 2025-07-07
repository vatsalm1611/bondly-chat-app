import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        email: {
            type : String,
            required: true,
            unique: true,
        },

        fullName: {
            type : String,
            required: true,
        },

        password: {
            type: String,
            required : true,
            minlength : 6,
        },

        profilePic: {
            type : String,
            default : "",

        },

        {timestamps : true}
    }
)
//we have created the schema so now we will create the model for User
const User = mongoose.model("User", userSchema) //User as 'U' capital and in singular form is mongoose convention

export default User