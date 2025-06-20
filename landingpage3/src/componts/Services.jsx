import React from 'react'
import { FaLaptop } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineWebAsset } from "react-icons/md";
import { MdBrandingWatermark } from "react-icons/md";
import { IoIosCopy } from "react-icons/io";
import { MdOutlineLaptopMac } from 'react-icons/md';

function Services() {
  return (
    <div>
       <div className="w-full h-[735px] py-20" id='Services'>
              <div className="h-[574px] mx-16 px-3 ">
                <div className="">
                  <h5 className='text-center text-5xl pb-4'>Our Services</h5>
                </div>
      
      
      
                <div className="flex flex-wrap">
                  <div className="w-[350px] h-[200px] px-3 mb-4">
                    <div className="flex">
                      <span className='text-6xl mr-4 text-cyan-300'><FaLaptop /></span>
                      <div className="">
                        <h3 className='font-thin'>Web Design</h3>
                        <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p><span className='no-underline text-cyan-300' href="#">Learn More</span></p>
                      </div>
                    </div>
      
                  </div>
      
      
                  <div className="w-[350px] h-[200px] px-3 mb-4">
                    <div className="flex">
                      <span className='text-6xl mr-4 text-cyan-300'><FaCartShopping /></span>
                      <div className="">
                        <h3 className='font-thin'>Web Design</h3>
                        <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p><span className='no-underline text-cyan-300' href="#">Learn More</span></p>
                      </div>
                    </div>
                  </div>
      
      
      
      
                  <div className="w-[350px] h-[200px] px-3 mb-4">
                    <div className="flex">
                      <span className='text-6xl mr-4 text-cyan-300'><MdOutlineWebAsset /></span>
                      <div className="">
                        <h3 className='font-thin'>Web Design</h3>
                        <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p><span className='no-underline text-cyan-300' href="#">Learn More</span></p>
                      </div>
                    </div>
                  </div>
      
      
      
      
      
                  <div className="w-[350px] h-[200px] px-3 mb-4">
                    <div className="flex">
                      <span className='text-6xl mr-4 text-cyan-300'><MdBrandingWatermark /></span>
                      <div className="">
                        <h3 className='font-thin'>Web Design</h3>
                        <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p><span className='no-underline text-cyan-300' href="#">Learn More</span></p>
                      </div>
                    </div>
                  </div>
      
      
      
      
      
                  <div className="w-[350px] h-[200px] px-3 mb-4">
                    <div className="flex">
                      <span className='text-6xl mr-4 text-cyan-300'><IoIosCopy /></span>
                      <div className="">
                        <h3 className='font-thin'>Web Design</h3>
                        <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p><span className='no-underline text-cyan-300' href="#">Learn More</span></p>
                      </div>
                    </div>
                  </div>
      
      
      
      
                  <div className="w-[350px] h-[200px] px-3 mb-4">
                    <div className="flex">
                      <span className='text-6xl mr-4 text-cyan-300'><MdOutlineLaptopMac /></span>
                      <div className="">
                        <h3 className='font-thin'>Web Design</h3>
                        <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p><span className='no-underline text-cyan-300' href="#">Learn More</span></p>
                      </div>
                    </div>
                  </div>
      
      
      
                </div>
              </div>
            </div>
      
    </div>
  )
}

export default Services
