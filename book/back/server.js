import express from 'express'
import cors from 'cors'
import colors from 'colors'
import dotenv from 'dotenv'
import mongoose from './src/Model/mongooseDb.js'
import router from './src/Routes/index.js'


dotenv.config()

const app= express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

let PORT =  4000;

app.use('/', router)


app.listen(PORT, ()=>{
    console.log(`Back-end Server is Running On ${PORT}`.bgMagenta)
})
