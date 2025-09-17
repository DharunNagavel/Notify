import mongoose from "mongoose";

const Notes_schema = new mongoose.Schema({
    mail_id : 
    {
        type :String,
        required : true
    },
    title : 
    {
        type :String,
        default : ""
    },
    content : 
    {
        type:String,
        default : ""
    }
},{ timestamps : true })
const Notes = mongoose.model("Notes",Notes_schema);
export default Notes;