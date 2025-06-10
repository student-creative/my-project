import React from 'react'
// Contact.jsx (top of the file)
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { TiSocialFacebook } from 'react-icons/ti';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';


function Contact() {
  return (
    <div>
          <div className="w-full min-h-[800px] bg-white text-black px-6 md:px-20 py-12 flex flex-col md:flex-row" id='Contact'>
  
  {/* Left Side - Wider (2/3 width) */}
  <div className="w-full md:w-2/3 bg-white p-4 md:p-8 rounded-lg shadow-lg">
    <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>

    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="block mb-1">Email</label>
        <input type="email" id="email" className="w-full p-3 rounded border border-gray-300" />
      </div>

      <div>
        <label htmlFor="password" className="block mb-1">Password</label>
        <input type="password" id="password" className="w-full p-3 rounded border border-gray-300" />
      </div>

      <div>
        <label htmlFor="address1" className="block mb-1">Address</label>
        <input type="text" id="address1" placeholder="1234 Main St" className="w-full p-3 rounded border border-gray-300" />
      </div>

      <div>
        <label htmlFor="address2" className="block mb-1">Address 2</label>
        <input type="text" id="address2" placeholder="Apartment, studio, or floor" className="w-full p-3 rounded border border-gray-300" />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="city" className="block mb-1">City</label>
          <input type="text" id="city" className="w-full p-3 rounded border border-gray-300" />
        </div>
        <div className="flex-1">
          <label htmlFor="state" className="block mb-1">State</label>
          <select id="state" className="w-full p-3 rounded border border-gray-300">
            <option>Choose...</option>
            <option>Maharashtra</option>
          </select>
        </div>
        <div className="w-1/4">
          <label htmlFor="zip" className="block mb-1">Zip</label>
          <input type="text" id="zip" className="w-full p-3 rounded border border-gray-300" />
        </div>
      </div>

      <div className="flex items-center">
        <input type="checkbox" id="check" className="mr-2" />
        <label htmlFor="check">Check me out</label>
      </div>

      <div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded">
          Sign In
        </button>
      </div>
    </form>
  </div>

  {/* Right Side - Narrower (1/3 width), aligned to heading */}
  <div className="w-full md:w-1/3 flex items-start justify-end">
    <div className="pt-1 md:pt-6 pl-8 space-y-6">
      <div>
        <h3 className="text-lg font-medium">📧 Email</h3>
        <p className="text-gray-700">support@example.com</p>
      </div>

      <div>
        <h3 className="text-lg font-medium">📞 Phone</h3>
        <p className="text-gray-700">+91 98765 43210</p>
      </div>

      <div>
        <h3 className="text-lg font-medium">🏠 Address</h3>
        <p className="text-gray-700">1234 Main Street, Mumbai, Maharashtra</p>
      </div>
    </div>
  </div>
</div>



      {/* ************footer********* */}

        <div className="footer relative pt-5 px-0 mt-5 w-full bg-[#4D4D4D]">
  <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

  <div className="relative z-10 pt-5 px-5 mt-3 flex flex-col md:flex-row flex-wrap gap-6 justify-between opacity-65">
    
    {/* Contact Info */}
    <div className="information-footer w-full sm:w-[48%] md:w-[45%] lg:w-[22%] px-3 mb-5">
      <h4 className="text-white text-uppercase mb-4 tracking-wide">Get In Touch</h4>
     
        <li className="text-white flex items-start">
          <FaMapMarkerAlt className="mt-1" />
          <p className="pl-2">123 Street, New York, USA</p>
        </li>
        <li className="text-white flex items-start">
          <IoIosCall className="mt-1" />
          <p className="pl-2">+012 345 67890</p>
        </li>
        <li className="text-white flex items-start">
          <MdEmail className="mt-1" />
          <p className="pl-2">info@example.com</p>
        </li>
   
    </div>

    {/* Social Media */}
    <div className="information-footer w-full sm:w-[48%] md:w-[45%] lg:w-[22%] px-3 mb-5">
      <h4 className="text-white text-uppercase mb-4 tracking-wide">Follow Us</h4>
      <p className="text-white font-montserrat mb-3">
        Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
      </p>
      <div className="flex flex-wrap gap-2">
        <a className="btn3 w-[46px] h-[46px] border border-white text-white flex items-center justify-center" href="#"><FaTwitter /></a>
        <a className="btn3 w-[46px] h-[46px] border border-white text-white flex items-center justify-center" href="#"><TiSocialFacebook /></a>
        <a className="btn3 w-[46px] h-[46px] border border-white text-white flex items-center justify-center" href="#"><FaLinkedinIn /></a>
        <a className="btn3 w-[46px] h-[46px] border border-white text-white flex items-center justify-center" href="#"><FaInstagram /></a>
      </div>
    </div>

    {/* Open Hours */}
    <div className="information-footer w-full sm:w-[48%] md:w-[45%] lg:w-[22%] px-3 mb-5 font-montserrat">
      <h4 className="text-white text-uppercase mb-4 tracking-wide">Open Hours</h4>
      <div>
        <h6 className="text-white text-uppercase">Monday - Friday</h6>
        <p className="text-white">8.00 AM - 8.00 PM</p>
        <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
        <p className="text-white">2.00 PM - 8.00 PM</p>
      </div>
    </div>

    {/* Newsletter */}
    <div className="information-footer w-full sm:w-[48%] md:w-[45%] lg:w-[22%] px-3 mb-5">
      <h4 className="text-white text-uppercase mb-4 tracking-wide">Newsletter</h4>
      <p className="text-white font-montserrat mb-3">
        Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
      </p>
      <input
        type="text"
        className="w-full sm:w-[80%] h-[52px] text-center mb-3 bg-white text-black rounded outline-none"
        placeholder="Your Name"
      />
      <button className="btn-sign bg-amber-500 w-[90px] h-[52px] text-white font-bold rounded hover:bg-amber-600 transition">
        Sign Up
      </button>
    </div>

  </div>
</div>
    </div>
  )
}

export default Contact
