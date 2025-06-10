import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Blog() {
  return (
    <div>
        <Navbar/>
          <div className="slider">
                        <div className="image relative">
                            <img className='w-full h-auto' src={require("./img/hero.png")} alt="" />
                            <div className="absolute bg-black inset-0 opacity-45"></div>
                            <div className="contanier mx-16 px-4  absolute inset-0 flex items-center justify-center">
                           
                                <div className="w-[475px] h-[175px] px-3 text-center">
                                <h1 class="mb-3  text-center text-white text-4xl font-bold">Our Blog</h1>
                                <p className='mb-3  text-center text-white text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
                                </div>

                           
                        </div>
                        </div>
        </div>


        {/* **************************** */}

         <div className="blog-section w-full h-[1078px] py-24">
                <div className="contanier w-[1140px] h-[853px] mx-16 px-4">
                    <div className="row mb-12">
                        <p className='uppercase text-center text-xl text-yellow-300'>update</p>
                        <h2 className='text-3xl text-center mb-2'>Our Blog</h2>
                    </div>
                    <div className="rowww w-[1140px] h-[745px] flex flex-wrap">
                        <div className="blog1 w-[380px] h-[721px] px-4">
                            <img src={require("./img/img3.png")} alt="" />
                            <div className=" p-4">
                                <a className='block text-2xl mb-4' href="">Lorem ipsum dolor sit amet</a>
                                <span className='block opacity-50 mb-4'>July 17, 2019 </span>
                                <p className='mb-3 text-xl opacity-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                            </div>
                        </div>


                        <div className="blog1 w-[380px] h-[721px] px-4">
                            <img src={require("./img/img4.png")} alt="" />
                            <div className=" p-4">
                                <a className='block text-2xl mb-4' href="">Lorem ipsum dolor sit amet</a>
                                <span className='block opacity-50 mb-4'>July 17, 2019 </span>
                                <p className='mb-3 text-xl opacity-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                            </div>
                        </div>


                        <div className="blog1 w-[380px] h-[721px] px-4">
                            <img src={require("./img/img5.png")} alt="" />
                            <div className=" p-4">
                                <a className='block text-2xl mb-4' href="">Lorem ipsum dolor sit amet</a>
                                <span className='block opacity-50 mb-4'>July 17, 2019 </span>
                                <p className='mb-3 text-xl opacity-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                            </div>
                        </div>


                        <div className="blog1 w-[380px] h-[721px] px-4">
                            <img src={require("./img/img1.png")} alt="" />
                            <div className=" p-4">
                                <a className='block text-2xl mb-4' href="">Lorem ipsum dolor sit amet</a>
                                <span className='block opacity-50 mb-4'>July 17, 2019 </span>
                                <p className='mb-3 text-xl opacity-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                            </div>
                        </div>



                        <div className="blog1 w-[380px] h-[721px] px-4">
                            <img src={require("./img/img2.png")} alt="" />
                            <div className=" p-4">
                                <a className='block text-2xl mb-4' href="">Lorem ipsum dolor sit amet</a>
                                <span className='block opacity-50 mb-4'>July 17, 2019 </span>
                                <p className='mb-3 text-xl opacity-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                            </div>
                        </div>



                        <div className="blog1 w-[380px] h-[721px] px-4">
                            <img src={require("./img/img3.png")} alt="" />
                            <div className=" p-4">
                                <a className='block text-2xl mb-4' href="">Lorem ipsum dolor sit amet</a>
                                <span className='block opacity-50 mb-4'>July 17, 2019 </span>
                                <p className='mb-3 text-xl opacity-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                            </div>
                        </div>




                    </div>
                </div>
            </div>


        {/* footer */}

        <Footer />
    </div>
  )
}

export default Blog
