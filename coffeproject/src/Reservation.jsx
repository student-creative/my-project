import React from 'react'
import Slider from './Slider'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import Footer from './Footer';


function Reservation() {
  return (
    <div>
        <Slider />
                    <Navbar />
                    <div className="absolute top-1/4 w-full flex flex-col items-center justify-center text-white z-10 px-4">
                        <div className="menu-bar">
                            <h1 className='text-7xl uppercase'>Reservation</h1>
                        </div>
                        <div className="navbar space-x-3 text-xl mt-3">
                            <Link className='text-white no-underline hover:underline' to="/">Home </Link>
                            <a href="" className='text-white no-underline'>/</a>
                            <a className='no-underline text-white' href="">Reservation</a>
                        </div>
                    </div>

        
                <div className="container-fluid my-5 px-3 flex items-center justify-center">
              
              <div className="row-table relative">
                <div className="absolute inset-0 bg-black opacity-40"></div>
        
        
                <img src={require('./img/back3.jpg')} alt="" />
        
                <div className="book-table absolute top-20 px-3 p-5">
                  <h1 className="text-white text-7xl">30% OFF</h1>
                  <h1 className="text-white">For Online Reservation</h1>
                  <p className="text-white font-montserrat">Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                    ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea</p>
                  <div className="flex">
                    <i className='mr-3 text-orange-500'><FaCheck /></i>
                    <h5 class="mb-3 text-white"> Lorem ipsum dolor sit amet</h5>
                  </div>
                  <div className="flex">
                    <i className='mr-3 text-orange-500'><FaCheck /></i>
                    <h5 class="mb-3 text-white"> Lorem ipsum dolor sit amet</h5>
                  </div>
                  <div className="flex">
                    <i className='mr-3 text-orange-500'><FaCheck /></i>
                    <h5 class="mb-3 text-white"> Lorem ipsum dolor sit amet</h5>
                  </div>
        
                </div>
        
                <div className="booking absolute top-0 left-1/2 px-3 p-5">
                  <h1 class="text-white mb-4 mt-5 text-center text-4xl">Book Your Table</h1>
                  <div className="from-group1">
                    <div class="form-group ">
                      <input type="text" className="input bg-transparent border border-amber-700 p-4 text-white mb-2" placeholder="Name" required="required" />
                    </div>
                    <div class="form-group">
                      <input type="text" className="input bg-transparent border border-amber-700 p-4 text-white mb-2" placeholder="Email" required="required" />
                    </div>
                    <div class="form-group">
                      <input type="text" className="input bg-transparent border border-amber-700 p-4 text-white mb-2" placeholder="Date" required="required" />
                    </div>
                    <div class="form-group">
                      <input type="text" className="input bg-transparent border border-amber-700 p-4 text-white mb-2" placeholder="Time" required="required" />
                    </div>
                    <div class="form-group">
                      <input type="text" className="input bg-transparent border border-amber-700 p-4 text-white mb-2" placeholder="Person" required="required" />
                    </div>
                  </div>
                  <div className="main-btn bg-amber-600 p-4 text-center">
                    <button className='text-xl'>Book Now</button>
                  </div>
                </div>
        
              </div>
            </div>            
        
        <Footer/>
    </div>
  )
}

export default Reservation