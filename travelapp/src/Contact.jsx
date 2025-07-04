import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
  return (
    <div>
        <Navbar/>

          <div className="slider">
                        <div className="image relative">
                            <img className='w-full h-auto' src={require("./img/hero.png")} alt="" />
                            <div className="absolute bg-black inset-0 opacity-45"></div>
                            <div className="contanier mx-16 px-4  absolute inset-0 flex items-center justify-center">
                           
                                <div className="w-[475px] h-[175px] px-3 text-center">
                                <h1 class="mb-3  text-center text-white text-4xl font-bold">Get In Touch</h1>
                                <p className='mb-3  text-center text-white text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
                                </div>

                           
                        </div>
                        </div>
        </div>


        {/* ***** */}

        <div className="contact-section w-full py-24 bg-gray-100">
  <div className="container w-[1140px] mx-auto px-4">
    {/* Heading */}
    <div className="row mb-12">
      <p className='uppercase text-center text-xl text-yellow-300'>Contact Us</p>
      <h2 className='text-3xl text-center mb-2'>Contact Us</h2>
    </div>

    {/* Two Column Layout */}
    <div className="flex flex-col lg:flex-row gap-10">
      
      {/* Left: Contact Form */}
      <div className="bg-white w-full lg:w-2/3 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right: Contact Info */}
      <div className="w-full lg:w-1/3">
        <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
        <div className="space-y-4 text-gray-800">
          <p>
            <strong>Address:</strong><br />
            123 React Street, Surat, Gujarat
          </p>
          <p>
            <strong>Phone:</strong><br />
            +91 98765 43210
          </p>
          <p>
            <strong>Email:</strong><br />
            contact@example.com
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


        <Footer/>
    </div>
  )
}

export default Contact