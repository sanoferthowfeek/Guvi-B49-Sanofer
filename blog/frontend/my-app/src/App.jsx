import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import BlogForm from "./components/BlogForm.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/create" element={<BlogForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
