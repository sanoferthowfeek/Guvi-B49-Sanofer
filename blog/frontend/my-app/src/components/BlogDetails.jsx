import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./BlogDetails.css";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`).then((response) => {
      setBlog(response.data);
    });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/blogs/${id}`).then(() => {
      navigate("/");
    });
  };
  const handleBack = () => {
    navigate("/"); 
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <p>
        <strong>Author:</strong> {blog.author}
      </p>
      <button onClick={handleDelete}>Delete Blog</button>
      <button onClick={handleBack}>Back to Home</button>
    </div>
  );
}

export default BlogDetails;
