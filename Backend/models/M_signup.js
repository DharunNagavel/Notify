import mongoose from "mongoose";

const signup_schema = new mongoose.Schema({
    name:
    {
        type:String,
        required :true
    },
    mail:
    {
        type : String,
        required : true,
        unique : true
    },
    pass:
    {
        type:String,
        required : true
    }
},{ timestamps : true })

const Signup_Model = mongoose.model("Signup", signup_schema);
export default Signup_Model;