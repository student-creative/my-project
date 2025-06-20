import React from 'react'

function Footer() {
  return (
    <div>
            {/* footer */}

            <div className="footer w-full h-[680px] py-24">
                <div className="conatnier w-[1140px] h-[423px] mx-16 px-4">
                    <div className="row w-[1140px] h-[235px] flex justify-between">

                        <div className="image w-[285px] h-[235px] px-3">
                            <h2 className='text-xl mb-3'>Instagram</h2>
                            <div className="flex flex-wrap gap-1">
                                <img className='w-[80px] h-[80px]' src={require("./img/img1.png")} alt="" />
                                <img className='w-[80px] h-[80px]' src={require("./img/img2.png")} alt="" />
                                <img className='w-[80px] h-[80px]' src={require("./img/img3.png")} alt="" />
                                <img className='w-[80px] h-[80px]' src={require("./img/img4.png")} alt="" />
                                <img className='w-[80px] h-[80px]' src={require("./img/img5.png")} alt="" />
                                <img className='w-[80px] h-[80px]' src={require("./img/img6.png")} alt="" />
                            </div>
                        </div>

                        <div className="w-[380px] h-[235px] px-3 ml-auto">
                            <h2 className='text-xl mb-4'>Ouick Links</h2>
                            <ul>
                                <li className='mb-2 text-orange-400 font-medium'>About us</li>
                                <li className='mb-2 text-orange-400 font-medium'>Testimonials</li>
                                <li className='mb-2 text-orange-400 font-medium'>Terms of Service</li>
                                <li className='mb-2 text-orange-400 font-medium'>Privacy</li>
                                <li className='mb-2 text-orange-400 font-medium'>Contact Us</li>
                            </ul>
                        </div>

                        <div className="w-[380px] h-[235px] px-3">
                            <h2 className='mb-4'>Newsletter</h2>
                            <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odio iure animi ullam quam, deleniti rem!</p>
                            <div className="">
                                <input className='p-3 mr-3 border border-black' type="text" placeholder='Email' />
                                <button className='px-3 p-3 bg-orange-400 uppercase'>send</button>
                            </div>
                        </div>

                        
                    </div>
                    <div className="pt-10 mt-10">
                           <p className='text-center pt-10'>CopyRight @2025 All rights reserved | This template is made with </p>
                        </div>
                </div>
            </div>

    </div>
  )
}

export default Footer