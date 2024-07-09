import mongoose from "./dbConnect.js"

const data=new mongoose.Schema({
    photo:{
        type: String,
        require:[true, "Photo is Required"]
    }
},
{timestamps:true},
{versionKey:false},
)

const schema= mongoose.model("photo",data)

export default schema