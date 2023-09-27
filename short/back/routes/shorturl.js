const express = require('express');
const router = express.Router();
const Shorturl = require('../models/Shorturl');

router
    .route('/')
    .post(async(req, res) => {
        try {
            // console.log(req.body);
            await Shorturl.create({ fullURL: req.body.url });
            let data = await Shorturl.findOne({ fullURL: req.body.url });
            res.status(200).json({ shorturl: data.shortURL });
        } catch (error) {
            console.log(error);
        }

    })

module.exports = router;