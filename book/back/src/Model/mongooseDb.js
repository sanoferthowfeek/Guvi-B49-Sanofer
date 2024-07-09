import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

mongoose.connect('mongodb://127.0.0.1:27017/books').then(()=>{
    console.log('MongoDB is connected'.bgRed)
}).catch((err)=> console.log(err))

export default mongoose