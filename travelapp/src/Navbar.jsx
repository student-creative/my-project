import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <div className="navbar w-full h-[102px] p-4 flex justify-between">
                    <div className="logo px-4">
                      <img className='w-[73px] h-[70px]' src={require("./img/logo.png")} alt="logo" />
                    </div>
                    <div className="menubar flex items-center">
                      <ul className='flex gap-12 capitalize font-semibold'>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/trip">trip</Link></li>
                        <li><Link to="/blog">blog</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                      </ul>
                    </div>
                  </div>
      
    </div>
  )
}

export default Navbar
