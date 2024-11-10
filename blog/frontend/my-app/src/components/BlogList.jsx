import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BlogList.css";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs").then((response) => {
      setBlogs(response.data);
    });
  }, []);

  return (
    <div className="blog-list">
      <h1>Blog List</h1>
      <Link to="/create">
        <button>Create New Blog</button>
      </Link>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
