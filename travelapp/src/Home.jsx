import React from 'react'

import { PiPlayPauseFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Navbar from './Navbar';
import Footer from './Footer';



function Home() {
    return (
        <div>

                <Navbar />


            {/* slider */}

            <div className="slider">
                <div className="image relative">
                    <img className='w-full h-auto' src={require("./img/hero.png")} alt="" />
                    <div className="absolute bg-black inset-0 opacity-45"></div>
                    <div className="contanier mx-16 px-4 absolute inset-0">
                        <div className="row flex items-center w-[1140px] h-[677px]">
                            <div className="text-row w-[475px] h-[328px] px-4">
                                <h1 className='text-white font-bold text-6xl mb-3'>Let's Enjoy The Wonders of Nature</h1>
                                <p className='text-white mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
                                <div className="icon flex items-center">
                                    <i className='text-4xl bg-slate-700 inline-block p-3 opacity-45 rounded-full text-white mr-3'>< PiPlayPauseFill /> </i>
                                    <span className='text-white font-thin mb-4'>Watch The Video</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* *****site section********** */}

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


            {/* jouery-section */}

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


            {/* amazing staff */}

            <div className="w-full h-[933px] py-24">
                <div className="mb-12">
                    <span className='text-yellow-500 text-center block uppercase font-bold'>amazing staff</span>
                    <h1 className='mb-2 text-3xl text-center'>Meet Our Team</h1>
                </div>
                <div className="contanier mx-16 w-[1140px] h-[709px] px-4">
                    <div className="row flex">
                        <div className="person w-[350px] h-[577px] px-4">
                            <div className="text-center flex justify-center">
                                <img className='mb-4' src={require("./img/person1.png")} alt="" />
                            </div>
                            <div className="text-person w-[350px] h-[293px] px-4 text-center">
                                <h2 className="mb-2 text-2xl">John Doe</h2>
                                <p className='mb-4'>staff</p>
                                <p className='mb-3 text-xl opacity-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error</p>
                                <div className="mt-8 flex items-center w-[302px] h-[58px] justify-center gap-5">
                                    <i className='p-4 bg-yellow-100 rounded-full'><FaFacebookF /></i>
                                    <i className='p-4 bg-yellow-100 rounded-full'><FaInstagram /></i>
                                    <i className='p-4 bg-yellow-100 rounded-full'><FaTwitter /></i>

                                </div>
                            </div>
                        </div>


                        <div className="person w-[350px] h-[577px] px-4">
                            <div className="text-center flex justify-center">
                                <img className='mb-4' src={require("./img/person2.png")} alt="" />
                            </div>
                            <div className="text-person w-[350px] h-[293px] px-4 text-center">
                                <h2 className="mb-2 text-2xl">John Doe</h2>
                                <p className='mb-4'>staff</p>
                                <p className='mb-3 text-xl opacity-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error</p>
                                <div className="mt-8 flex items-center w-[302px] h-[58px] justify-center gap-5">
                                    <i className='p-4 bg-yellow-100 rounded-full'><FaFacebookF /></i>
                                    <i className='p-4 bg-yellow-100 rounded-full'><FaInstagram /></i>
                                    <i className='p-4 bg-yellow-100 rounded-full'><FaTwitter /></i>

                                </div>
                            </div>
                        </div>




                        <div className="person w-[350px] h-[577px] px-4">
                            <div className="text-center flex justify-center">
                                <img className='mb-4' src={require("./img/person3.png")} alt="" />
                            </div>
                            <div className="text-person w-[350px] h-[293px] px-4 text-center">
                                <h2 className="mb-2 text-2xl">John Doe</h2>
                                <p className='mb-4'>staff</p>
                                <p className='mb-3 text-xl opacity-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error</p>
                                <div className="mt-8 flex items-center w-[302px] h-[58px] justify-center gap-5">
                                    <i className='p-4 bg-yellow-100 rounded-full'><FaFacebookF /></i>
                                    <i className='p-4 bg-yellow-100 rounded-full'><FaInstagram /></i>
                                    <i className='p-4 bg-yellow-100 rounded-full'><FaTwitter /></i>

                                </div>
                            </div>
                        </div>





                    </div>
                </div>
            </div>


            {/* happy customer */}

            <div className="testimony w-full h-[699px] py-24">
                <div className="contanier w-[1140px] h-[475px] mx-16 px-4">
                    <div className="row mb-12">
                        <p className='uppercase text-center text-xl text-yellow-300'>testimony</p>
                        <h2 className='text-3xl text-center mb-2'>Happy Customers</h2>
                    </div>
                    <div className="roww w-[1140px] h-[366px] flex gap-5">
                        <div className="slide1 w-[570px] h-[366px]  bg-orange-300 p-10 flex">
                            <div className="image1 mr-5">
                                <img className='w-[350px] h-[70px]' src={require("./img/person1.png")} alt="" />
                            </div>
                            <div className="text-slide1">
                                <p className='text-2xl opacity-50 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum vero at reprehenderit! Magni harum voluptatum eum alias dolore delectus eaque, quae totam neque illo ratione facere maxime libero. Beatae.</p>
                                <span>John Doe</span>
                            </div>
                        </div>


                        <div className="slide1 w-[570px] h-[366px]  bg-orange-300 p-10 flex">
                            <div className="image1 mr-5">
                                <img className='w-[350px] h-[70px]' src={require("./img/person2.png")} alt="" />
                            </div>
                            <div className="text-slide1">
                                <p className='text-2xl opacity-50 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum vero at reprehenderit! Magni harum voluptatum eum alias dolore delectus eaque, quae totam neque illo ratione facere maxime libero. Beatae.</p>
                                <span>John Doe</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* blog-section */}


            <div className="blog-section w-full h-[1078px] py-24">
                <div className="contanier w-[1140px] h-[853px] mx-16 px-4">
                    <div className="row mb-12">
                        <p className='uppercase text-center text-xl text-yellow-300'>update</p>
                        <h2 className='text-3xl text-center mb-2'>Our Blog</h2>
                    </div>
                    <div className="rowww w-[1140px] h-[745px] flex">
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


                    </div>
                </div>
            </div>


            {/* join trip */}

            <div className="relative h-[450px] bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${require("./img/hero.png")})` }}>
                {/* Yellow overlay with opacity */}
                <div className="absolute inset-0 bg-orange-300 bg-opacity-40 z-0"></div>

                {/* Text layer */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-4xl font-bold text-white mb-4">Join and Trip With Us</h2>
                    <p className="text-white max-w-2xl mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ut,
                        doloremque quo molestiae nesciunt officiis veniam, beatae dignissimos!
                    </p>
                    <a
                        href="#"
                        className="bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>


        <Footer/>
        </div>
    )
}

export default Home
