import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Footer from './Footer'

function Trip() {
  return (
    <div>
        <Navbar/>
        
          <div className="slider">
                        <div className="image relative">
                            <img className='w-full h-auto' src={require("./img/hero.png")} alt="" />
                            <div className="absolute bg-black inset-0 opacity-45"></div>
                            <div className="contanier mx-16 px-4  absolute inset-0 flex items-center justify-center">
                           
                                <div className="w-[475px] h-[175px] px-3 text-center">
                                <h1 class="mb-3  text-center text-white text-4xl font-bold">Trip List</h1>
                                <p className='mb-3  text-center text-white text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
                                </div>

                           
                        </div>
                        </div>
        </div>



    {/* journey start */}

        <div className="journey-section w-full h-[1315px] py-28">
                <div className="max-w-full h-[1090px] mx-16 px-4">
                    <div className="row text-center w-[1140px] h-[108px]">
                        <span className='font-bold text-1xl text-yellow-500 uppercase'>Journey</span>
                        <h2 className='text-3xl mb-2'>Your Journey Starts Here</h2>
                    </div>


                    {/* Row 1 */}
                    <div className="flex w-full justify-center gap-6 mb-10">
                        <div className="relative">
                            <img className="w-[350px] h-[467px] object-cover" src={require("./img/img1.png")} alt="" />
                            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                                <span className='bg-yellow-500 px-3 p-2 rounded-full text-white'>$200.00</span>
                            </div>
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                <h2 className='text-white'>Dignissimos debitis  </h2>`
                            </div>
                        </div>
                        <div className="relative">
                            <img className="w-[350px] h-[467px] object-cover" src={require("./img/img2.png")} alt="" />
                            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                                <span className='bg-yellow-500 px-3 p-2 rounded-full text-white'>$200.00</span>
                            </div>
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                <h2 className='text-white'>Dignissimos debitis  </h2>`
                            </div>
                        </div>
                        <div className="relative">
                            <img className="w-[350px] h-[467px] object-cover" src={require("./img/img3.png")} alt="" />
                            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                                <span className='bg-yellow-500 px-3 p-2 rounded-full text-white'>$200.00</span>
                            </div>
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                <h2 className='text-white'>Dignissimos debitis  </h2>`
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex w-full justify-center gap-6">
                        <div className="relative">
                            <img className="w-[350px] h-[467px] object-cover" src={require("./img/img4.png")} alt="" />
                            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                                <span className='bg-yellow-500 px-3 p-2 rounded-full text-white'>$200.00</span>
                            </div>
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                <h2 className='text-white'>Dignissimos debitis  </h2>`
                            </div>
                        </div>

                        <div className="relative">
                            <img className="w-[350px] h-[467px] object-cover" src={require("./img/img5.png")} alt="" />
                            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                                <span className='bg-yellow-500 px-3 p-2 rounded-full text-white'>$200.00</span>
                            </div>
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                <h2 className='text-white'>Dignissimos debitis  </h2>`
                            </div>
                        </div>

                        <div className="relative">
                            <img className="w-[350px] h-[467px] object-cover" src={require("./img/img6.png")} alt="" />
                            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                                <span className='bg-yellow-500 px-3 p-2 rounded-full text-white'>$200.00</span>
                            </div>
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                <h2 className='text-white'>Dignissimos debitis  </h2>`
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        {/* our story */}

               <div className="site-section w-full h-[657px] py-5">
                <div className="contanier mx-16 px-4">
                    <div className="row w-[1140px] h-[561px] flex items-center">
                        <div className="our-story w-[570px] h-[277px]">
                            <div className="mb-14">
                                <span className='text-yellow-600 font-bold'>Discover Story</span>
                                <h3 className='mb-2 text-3xl'>Our Story</h3>
                            </div>
                            <p className='mb-4 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente.</p>
                            <p className='mb-4 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis enim a pariatur molestiae.</p>
                        </div>
                        <div className="travel-image px-4 w-[570px] h-[561px]">
                            <img className='w-[540px] h-[561px]' src={require("./img/travel.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        <Footer/>
        
    </div>
  )
}

export default Trip