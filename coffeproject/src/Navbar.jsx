import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Lucide icons for hamburger

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl text-white">KOPPE</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-bold items-center text-white">
          <li><Link className="no-underline font-montserrat text-white" to="/">Home</Link></li>
          <li><Link className="no-underline font-montserrat text-white" to="/about">About</Link></li>
          <li><Link className="no-underline font-montserrat text-white" to="/services">Services</Link></li>
          <li><Link className="no-underline font-montserrat text-white" to="/menu">Menu</Link></li>
          <li className="relative">
            <button onClick={toggleDropdown} className="font-montserrat text-white">Pages</button>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50">
                <li><Link to="/pages/Reservation" className="block px-4 py-2 hover:bg-gray-100 text-white">Reservation</Link></li>
                <li><Link to="/pages/Testimonial" className="block px-4 py-2 hover:bg-gray-100 text-white">Testimonial</Link></li>
              </ul>
            )}
          </li>
          <li><Link className="no-underline font-montserrat text-white" to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 py-4 space-y-4 font-bold text-white">
          <Link to="/" className="block font-montserrat" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block font-montserrat" onClick={toggleMenu}>About</Link>
          <Link to="/services" className="block font-montserrat" onClick={toggleMenu}>Services</Link>
          <Link to="/menu" className="block font-montserrat" onClick={toggleMenu}>Menu</Link>
          <button onClick={toggleDropdown} className="block font-montserrat w-full text-left text-white">Pages</button>
          {dropdownOpen && (
            <div className="pl-4 space-y-2">
              <Link to="/pages/Reservation" className="block font-montserrat text-white" onClick={toggleMenu}>Reservation</Link>
              <Link to="/pages/Testimonial" className="block font-montserrat text-white" onClick={toggleMenu}>Testimonial</Link>
            </div>
          )}
          <Link to="/contact" className="block font-montserrat" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
