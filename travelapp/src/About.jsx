import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Footer from './Footer';


function About() {
    return (
        <div>

            <Navbar />
            <Slider />

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


            {/* our misson */}

            <div className="w-full h-[457px] py-10">

            </div>



            {/* meet our team */}



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
                    {/* <a
                        href="#"
                        className="bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition"
                    >
                        Get In Touch
                    </a> */}
                </div>
            </div>



        {/* footer */}
        <Footer/>

        </div>
    )
}

export default About
