import React, { useEffect } from 'react';
import Slider from './Slider';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Slider />
      <Navbar />

      {/* Hero Text */}
      <div className="absolute top-1/4 w-full flex flex-col items-center justify-center text-white z-10 px-4">
        <div className="menu-bar" data-aos="fade-down">
          <h1 className="text-7xl uppercase">Contact</h1>
        </div>
        <div className="navbar space-x-3 text-xl mt-3" data-aos="fade-up">
          <Link className="text-white no-underline hover:underline" to="/">Home</Link>
          <span className="text-white"> / </span>
          <span className="no-underline text-white">Contact</span>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8" data-aos="zoom-in-up">
        <div className="max-w-4xl mx-auto shadow-xl rounded-lg p-10 bg-gray-100">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" placeholder="Your name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" placeholder="Your email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea placeholder="Your message" rows="5" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition">Send Message</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
