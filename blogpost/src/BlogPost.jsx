import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Mastering React Components",
    author: "Amit Kumar",
    date: "May 15, 2025",
    content: `React components let you split the UI into independent, reusable pieces. Learn how to structure them smartly.`,
    image: "/person.jpg",  // <-- public folder ke liye root based path
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    author: "Priya Sharma",
    date: "May 10, 2025",
    content: `Hooks let you use state and other React features without writing a class. Discover useState, useEffect & custom hooks.`,
    image: "/person2.jpg",
  },
  {
    id: 3,
    title: "Clean Code in JavaScript",
    author: "John Doe",
    date: "May 5, 2025",
    content: `Clean code is not just beautiful—it’s maintainable, scalable, and bug-resistant. Learn the best practices.`,
    image: "/person3.jpg",
  },
  {
    id: 4,
    title: "CSS Tips for Better UI",
    author: "Sneha Gupta",
    date: "Apr 28, 2025",
    content: `Good UI is all about spacing, alignment, and color. Learn CSS tricks used in modern websites.`,
    image: "/person.webp",
  },
  {
    id: 5,
    title: "Optimizing React Performance",
    author: "Rahul Mehra",
    date: "Apr 20, 2025",
    content: `React is fast, but can be faster! Learn how to use memo, lazy loading, and performance profiling tools.`,
    image: "/person2.webp",
  },
  {
    id: 6,
    title: "Dark Mode in React Apps",
    author: "Anjali Verma",
    date: "Apr 15, 2025",
    content: `Implementing dark mode is trendy and useful. Learn how to add theme toggles using context API.`,
    image: "/person3.webp",
  },
];

// 🟡 Blog list page
export const BlogList = () => {
  return (
    <div className="blog-grid">
      {blogPosts.map((post) => (
        <motion.div
          key={post.id}
          className="blog-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: post.id * 0.1 }}
        >
          <Link to={`/post/${post.id}`}>
            <img src={post.image} alt={post.title} className="blog-image" />
          </Link>
          <div className="blog-content">
            <Link to={`/post/${post.id}`} className="blog-title-link">
              <h2 className="blog-title">{post.title}</h2>
            </Link>
            <p className="blog-meta">By {post.author} | {post.date}</p>
            <p className="blog-excerpt">{post.content.slice(0, 100)}...</p>
            <Link to={`/post/${post.id}`} className="read-more">Read More →</Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// 🔵 Single post page
export const SinglePost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) return <h2>Post not found</h2>;

  return (
    <motion.div
      className="single-post"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <img src={post.image} alt={post.title} className="single-image" />
      <h1>{post.title}</h1>
      <p className="blog-meta">By {post.author} | {post.date}</p>
      <p className="blog-full-content">{post.content}</p>
      <Link to="/" className="back-home">← Back to Blog</Link>
    </motion.div>
  );
};
