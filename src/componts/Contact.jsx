import React, { useEffect } from 'react';
import Footer from './Footer';
import { MdPerson, MdEmail } from 'react-icons/md';
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="background-image">
        <div className="relative" data-aos="fade-down">
          <img
            src={require('../img/back.png')}
            alt="Background"
            className="w-full h-[200px] md:h-[324px] object-cover"
          />
          <div className="absolute inset-0 bg-[#223A66] opacity-90"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center capitalize font-exo px-4">
            <span className="text-white text-base md:text-lg">Contact Us</span>
            <h1 className="text-white text-3xl md:text-5xl font-bold mt-2">Get in Touch</h1>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="w-full h-auto py-12 md:py-20 bg-white px-4 sm:px-6">
        <div className="container max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Call Us */}
            <div
              className="bg-white border p-6 md:p-8 lg:p-10 rounded-md text-center shadow-sm hover:shadow-md transition duration-300"
              data-aos="fade-up"
            >
              <div className="text-4xl md:text-5xl text-[#E12454] mb-2 flex justify-center">
                <MdPerson />
              </div>
              <h5 className="text-base md:text-lg font-semibold mb-1 text-slate-800">Call Us</h5>
              <p className="text-slate-600 text-sm md:text-base">+823-4565-13456</p>
            </div>

            {/* Email Us */}
            <div
              className="bg-white border p-6 md:p-8 lg:p-10 rounded-md text-center shadow-sm hover:shadow-md transition duration-300"
              data-aos="zoom-in"
            >
              <div className="text-4xl md:text-5xl text-[#E12454] mb-2 flex justify-center">
                <MdEmail />
              </div>
              <h5 className="text-base md:text-lg font-semibold mb-1 text-slate-800">Email Us</h5>
              <p className="text-slate-600 text-sm md:text-base">contact@mail.com</p>
            </div>

            {/* Location */}
            <div
              className="bg-white border p-6 md:p-8 lg:p-10 rounded-md text-center shadow-sm hover:shadow-md transition duration-300"
              data-aos="fade-left"
            >
              <div className="text-4xl md:text-5xl text-[#E12454] mb-2 flex justify-center">
                <FaLocationDot />
              </div>
              <h5 className="text-base md:text-lg font-semibold mb-1 text-slate-800">Location</h5>
              <p className="text-slate-600 text-sm md:text-base">North Main Street, Brooklyn Australia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="w-full h-auto py-12 md:py-20 bg-white px-4 sm:px-6">
        <div className="container max-w-[1140px] mx-auto">
          <div className="flex justify-center">
            <div className="w-full md:w-[655px] text-center space-y-5 md:space-y-7 px-4 mb-12 md:mb-20" data-aos="fade-up">
              <div className="section-title">
                <h2 className="text-[#223A66] text-2xl md:text-[40px] mb-3 md:mb-4 font-exo font-bold">
                  Contact Us
                </h2>
              </div>
              <div className="line-div flex justify-center mb-4 md:mb-5">
                <div className="bg-[#E12454] w-10 h-1"></div>
              </div>
              <div className="text-award">
                <p className="text-slate-500 text-sm md:text-base mb-4">
                  Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
         
        <form className="max-w-5xl mx-auto space-y-6" data-aos="fade-up">
  {/* Box 1: Name + Email */}
 
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" placeholder="Your Full Name" className="w-full px-4 py-3 text-sm md:text-base border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E12454]" />
      <input type="email" placeholder="Your Email Address" className="w-full px-4 py-3 text-sm md:text-base border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E12454]"/>
    </div>
 

  {/* Box 2: Query + Phone */}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input  type="text" placeholder="Your Query Topic"  className="w-full px-4 py-3 text-sm md:text-base border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E12454]" />
      <input type="tel" placeholder="Your Phone Number"  className="w-full px-4 py-3 text-sm md:text-base border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E12454]"
      />
    </div>
 

  {/* Message */}
  <textarea
    rows="5"
    placeholder="Your Message"
    className="w-full px-4 py-3 border border-slate-300 rounded-md resize-none text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#E12454]"
  ></textarea>

  {/* Submit Button */}
  <div className="flex justify-center">
    <button
      type="submit"
      className="bg-[#223A66] text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-[#E12454] transition duration-300 text-sm md:text-base"
    >
      Send Message
    </button>
  </div>
</form>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;
