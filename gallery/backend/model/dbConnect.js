import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

let connection= `${process.env.DB_URL}/${process.env.DB_NAME}`

mongoose.connect(connection).then(()=>console.log("DB is Connected with Server".bgRed)).catch((err)=>console.log(err))

export default mongoose