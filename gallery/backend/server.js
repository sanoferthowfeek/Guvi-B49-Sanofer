import express from 'express'
import cors from 'cors'
import colors from 'colors'
import dotenv from 'dotenv'
import router from './routes/index.js'
import mongoose from './model/dbConnect.js'


dotenv.config()

const app = express()
app.use(express.json())
app.use(cors()) 
app.use(express.static('public')) 

const PORT= 3000;

app.use('/', router)

app.listen(PORT, ()=>{
    console.log(`App is Listening On Port : ${PORT}`.bgMagenta)
})
