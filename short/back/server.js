const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const dotenv = require("dotenv").config();
const bodyparser = require('body-parser');
const Shorturl = require('./models/Shorturl');
const Register = require("./models/Register");
const short = require('./routes/shorturl');
const cors = require('cors');
const login = require('./routes/login');
const signup = require('./routes/signup');


const app = express();
const db_url = "mongodb://0.0.0.0:27017/admin";
const port = 3001;

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));


app.use('/shorturl', short);
app.use("/login", login);
app.use("/signup", signup);

app.get("/", (req, res) => {
    res.send("welcome to url shortener backend")
})

//root route
app.get('/load', async(req, res) => {
    try {
        let data = await Shorturl.find();
        if (data == null) return res.status(200).json({ message: "data not found" })
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
    }
})


app.get('/:shorturl', async(req, res) => {
    try {
        let data = await Shorturl.findOne({ shortURL: req.params.shorturl })
        if (data == null) return res.status(404).json({ message: "URL not found" })
        data.clicks++;
        data.save();
        res.status(200).redirect(data.fullURL);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message })
    }
})

app.listen(port, () => console.log(`server started at ${port}`));