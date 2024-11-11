const express = require("express");
const mongoose = require("mongoose");
const{MongoClient} = require('mongodb');
require("dotenv").config();

const cors = require("cors");
// require('dotenv').config();

// import mongoose from "./model/dbConnect.js";

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.DB_URL);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Access the database
    const db = client.db();
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

connectToDatabase();

// mongoose
//   .connect(process.env.DB_URL)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err.message);
//   });

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  created_at: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", blogSchema);

app.get("/api/blogs", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

app.get("/api/blogs/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
});

app.post("/api/blogs", async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.json(blog);
});

app.put("/api/blogs/:id", async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(blog);
});

app.delete("/api/blogs/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
