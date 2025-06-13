import React from 'react'
import Slider from './Slider'
import Navbar from './Navbar' // ✅ Corrected this line
import { Link } from 'react-router-dom';
import Price from './Price';
import Footer from './Footer';

function Menu() {
  return (
    <div>
      <Slider />
      <Navbar />

      <div className="absolute top-1/4 w-full flex flex-col items-center justify-center text-white z-10 px-4">
        <div className="menu-bar">
          <h1 className='text-7xl uppercase'>menu</h1>
        </div>
        <div className="navbar space-x-3 text-xl mt-3">
          <Link className='text-white no-underline hover:underline' to="/">Home </Link>
         
        </div>
      </div>

      <Price />
      <Footer />
    </div>
  )
}

export default Menu;
