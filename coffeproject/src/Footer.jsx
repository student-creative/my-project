import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="footer relative pt-5 px-0 mt-5 w-full bg-[#004AA5]">
  <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

  <div className="relative z-10 pt-5 px-5 mt-3 flex flex-col md:flex-row flex-wrap gap-6 justify-between">
    
    {/* Contact Info */}
    <div className="information-footer w-full sm:w-[48%] md:w-[45%] lg:w-[22%] px-3 mb-5">
      <h4 className="text-white text-uppercase mb-4 tracking-wide">Get In Touch</h4>
     
        <li className="text-white flex items-start">
          <FaLocationDot className="mt-1" />
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

export default Footer