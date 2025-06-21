import React, { useEffect } from 'react';
import Slider from './Slider';
import Navbar from './Navbar';
import Client from './Client';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Slider />
      <Navbar />

      {/* Header Section with Animation */}
      <div
        className="absolute top-1/4 w-full flex flex-col items-center justify-center text-white z-10 px-4"
        data-aos="fade-down"
      >
        <div className="menu-bar">
          <h1 className='text-7xl uppercase'>Testimonial</h1>
        </div>
        <div className="navbar space-x-3 text-xl mt-3">
          <Link className='text-white no-underline hover:underline' to="/">Home</Link>
          <span className='text-white'> / </span>
          <span className='no-underline text-white'>Testimonial</span>
        </div>
      </div>

      {/* Client Section (already animated inside if using AOS inside Client.jsx) */}
      <div data-aos="fade-up">
        <Client />
      </div>

      <Footer />
    </div>
  );
}

export default Testimonial;
