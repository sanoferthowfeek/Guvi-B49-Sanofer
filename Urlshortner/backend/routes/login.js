const express = require('express');
const router = express.Router();
const Register = require("./../models/Register")
const bcrypt = require("bcrypt");

//const dburl = process.env.DB_URL //|| "mongodb://localhost/urlshortener";

router
    .route('/')
    .post(async(req, res) => {
        try {
            let data = await Register.findOne({ email: req.body.email });
            if (data) {
                let compare = await bcrypt.compare(req.body.password, data.password);
                if (compare) {
                    res.status(200).json({ message: "Login Success!!" });
                } else {
                    res.status(400).json({ message: "Login Failed!!" });
                }
            } else {
                res.status(401).json({ message: "Email not registered!" })
            }
        } catch (error) {
            console.log('Login Error :' + error);
        }
    })


module.exports = router;