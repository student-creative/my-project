// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Trip from './Trip';
import Blog from './Blog';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/blog" element={<Blog />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
