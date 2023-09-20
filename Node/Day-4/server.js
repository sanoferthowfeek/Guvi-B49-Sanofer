const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();
const PORT = 3000;


const DB_URL = 'mongodb+srv://sanofer:Thowfeek1234@cluster0.htinaip.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));



app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
  });