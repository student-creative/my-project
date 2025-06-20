import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogList from "./BlogList";
import SinglePost from "./SinglePost";
import AddBlog from "./AddBlog";



const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<BlogList posts={posts} />} />
          <Route path="/post/:id" element={<SinglePost posts={posts} />} />
          <Route path="/add" element={<AddBlog setPosts={setPosts} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
