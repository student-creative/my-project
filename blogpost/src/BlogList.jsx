import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Mastering React Components",
    author: "Amit Kumar",
    date: "May 15, 2025",
    content: "React components let you split the UI into reusable pieces...",
    image: "/person.jpg",
    category: "React",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    author: "Priya Sharma",
    date: "May 10, 2025",
    content: "Hooks let you use state and other React features...",
    image: "/person2.jpg",
    category: "React",
  },
  {
    id: 3,
    title: "Clean Code in JavaScript",
    author: "John Doe",
    date: "May 5, 2025",
    content: "Clean code is not just beautiful...",
    image: "/person3.jpg",
    category: "JavaScript",
  },
  {
    id: 4,
    title: "CSS Tips for Better UI",
    author: "Sneha Gupta",
    date: "Apr 28, 2025",
    content: "Good UI is all about spacing and color...",
    image: "/person.webp",
    category: "CSS",
  },
];

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-5">
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <h2>All Blog Posts</h2>
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search by title or author"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="row">
        {filteredPosts.map((post) => (
          <motion.div
            className="col-md-4 mb-4"
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="card shadow-sm h-100">
              <img
                src={post.image}
                className="card-img-top"
                alt={post.title}
                style={{ height: "230px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-muted">
                  By <strong>{post.author}</strong> | {post.date}
                </p>
                <span className="badge bg-primary mb-2">{post.category}</span>
                <p className="card-text">
                  {post.content.slice(0, 90)}...
                </p>
                <Link to={`/post/${post.id}`} className="btn btn-outline-dark btn-sm">
                  Read More →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
