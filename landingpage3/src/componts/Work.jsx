import React from 'react'
import { FaUmbrella } from "react-icons/fa";

function Work() {
  return (
    <div>
           <div className="w-full h-[1212px] py-24" id='Work'>
        
                <div className="w-full h-[162px] text-center flex justify-center mb-16">
                  <div className="w-[760px] h-[162px]">
                    <h2 className='pb-4 text-6xl'>Our Works</h2>
                    <p className='font-thin text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, itaque neque, delectus odio iure explicabo.</p>
                  </div>
                </div>
        
                <div className="w-full h-auto flex flex-wrap justify-center">
        
                  <img className='w-[392px] h-[392px] mx-2 mb-2' src={require('../img/img1.png')} alt="" />
                  <img className='w-[392px] h-[392px] mx-2 mb-2' src={require('../img/img2.png')} alt="" />
                  <img className='w-[392px] h-[392px] mx-2 mb-2' src={require('../img/img3.png')} alt="" />
                  <img className='w-[392px] h-[392px] mx-2 mb-2' src={require('../img/img4.png')} alt="" />
                  <img className='w-[392px] h-[392px] mx-2 mb-2' src={require('../img/img5.png')} alt="" />
                  <img className='w-[392px] h-[392px] mx-2 mb-2' src={require('../img/img6.png')} alt="" />
        
                </div>
              </div>
        
        
        
              {/* **********setup******************* */}
        
              <div className="w-full h-[478px] mb-16 flex justify-center">
                <div className="w-[1140px] h-[478px] bg-black p-3 flex items-center">
                  <div className="px-3 w-[440px] h-[418px]">
                    <img className='' src={require('../img/setup.png')} alt="" />
                  </div>
        
                  <div className="w-[278px] h-[390px] ml-20 px-3">
                    <div className="w-[248px] h-[163px] mb-5">
                      <p className='text-white text-2xl flex items-center leading-tight'> <FaUmbrella /><span className='ml-4'>Strategy</span></p>
                      <p className='text-white opacity-45 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                      <a href="" className='text-white text-1xl'>Read More</a>
                    </div>
                    <div className="w-[248px] h-[163px] mb-5">
                      <p className='text-white text-2xl flex items-center leading-tight'> <FaUmbrella /><span className='ml-4'>Strategy</span></p>
                      <p className='text-white opacity-45 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                      <a href="" className='text-white text-1xl'>Read More</a>
                    </div>
                  </div>
        
                  <div className="w-[278px] h-[390px]  px-3">
                    <div className="w-[248px] h-[163px] mb-5">
                      <p className='text-white text-2xl flex items-center leading-tight'> <FaUmbrella /><span className='ml-4'>Strategy</span></p>
                      <p className='text-white opacity-45 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                      <a href="" className='text-white text-1xl'>Read More</a>
                    </div>
                    <div className="w-[248px] h-[163px] mb-5">
                      <p className='text-white text-2xl flex items-center leading-tight'> <FaUmbrella /><span className='ml-4'>Strategy</span></p>
                      <p className='text-white opacity-45 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                      <a href="" className='text-white text-1xl'>Read More</a>
                    </div>
                  </div>
                </div>
        
        
              </div>
        
        
              {/* ***********testimonials******************** */}
        
              <div className="w-full h-[574px] py-16">
                <h2 class="text-center text-5xl py-5">Testimonials</h2>
        
        
                <div className="w-full h-[277px] mb-3 flex justify-center text-center text-4xl font-thin flex-wrap">
                  <div className="w-[800px] h-[277px]">
                    <p className='italic mb-5'>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p>
        
                    <div className="flex justify-center items-center">
                      <img className='w-[100px] h-[70px] rounded-full flex' src={require('../img/person.webp')} alt="" />
                      <p className='ml-3 text-xl'>Robert Spears</p>
                    </div>
                  </div>
                </div>
        
        
        
              </div>
        
        
    </div>
  )
}

export default Work