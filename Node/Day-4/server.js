const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
// const DB_URL = "mongodb://localhost:27017/admin";
// const DB_URL = "mongodb://0.0.0.0:27017/admin";
const DB_URL = 'mongodb+srv://sanofer:guvi1234@cluster0.htinaip.mongodb.net/?retryWrites=true&w=majori';
mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));



app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
  });