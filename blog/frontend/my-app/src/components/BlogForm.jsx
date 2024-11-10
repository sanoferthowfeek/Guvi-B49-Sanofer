import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./BlogForm.css";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/blogs", { title, content, author })
      .then(() => {
        navigate("/");
      });
  };
  const handleBack = () => {
    navigate("/");
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2>Create Blog</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Create</button>
      <button onClick={handleBack}>Back to Home</button>
    </form>
  );
}

export default BlogForm;
