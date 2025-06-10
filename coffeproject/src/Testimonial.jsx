import React from 'react'
import Slider from './Slider'
import Navbar from './Navbar'
import Client from './Client'
import { Link } from 'react-router-dom';
import Footer from './Footer';


function Testimonial() {
  return (
    <div>
         <Slider />
            <Navbar />
            <div className="absolute top-1/4 w-full flex flex-col items-center justify-center text-white z-10 px-4">
                <div className="menu-bar">
                    <h1 className='text-7xl uppercase'>Testimonial</h1>
                </div>
                <div className="navbar space-x-3 text-xl mt-3">
                    <Link className='text-white no-underline hover:underline' to="/">Home </Link>
                    <a href="" className='text-white no-underline'>/</a>
                    <a className='no-underline text-white' href="">Testimonial</a>
                </div>
            </div>

        <Client/>
        <Footer/>
    </div>
  )
}

export default Testimonial