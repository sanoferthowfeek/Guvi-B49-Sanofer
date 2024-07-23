import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

mongoose.connect('mongodb+srv://hibba:hibba@cluster0.htinaip.mongodb.net/book').then(()=>{
    console.log('MongoDB is connected'.bgRed)
}).catch((err)=> console.log(err))

export default mongoose