import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { BiChevronRight } from 'react-icons/bi';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function DepartmentsSingle() {
    return (
        <div>
            {/* Hero Section */}
            <div className="background-image">
                <div className="relative">
                    <img src={require('../img/back.png')} alt="Background" className="w-full h-[200px] md:h-[324px] object-cover" />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-[#223A66] opacity-90"></div>

                    {/* Centered Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center capitalize font-exo px-4">
                        <span className="text-white text-base md:text-lg">Department Details</span>
                        <h1 className="text-white text-3xl md:text-5xl font-bold mt-2">Single Department</h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full h-auto py-10 md:py-20 bg-white px-4 sm:px-6">
                <div className="container max-w-[1140px] mx-auto h-auto">
                    {/* Image */}
                    <div className="image rounded-lg overflow-hidden">
                        <img 
                            src={require('../img/services.jpg')} 
                            alt="Department Services" 
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Content Area - Changed to flex-col for mobile */}
                    <div className="flex flex-col lg:flex-row gap-8 mt-8 md:mt-10">
                        {/* Main Content - Full width on mobile, 2/3 on desktop */}
                        <div className="department-content w-full lg:w-[66.666%] h-auto">
                            <h3 className='font-exo font-bold text-2xl md:text-4xl'>Medecine and Health</h3>
                            <div className="bg-[#E12454] w-10 h-1 my-4 md:my-6"></div>
                            <p className='font-roboto text-slate-500 text-base md:text-xl mb-5'>
                                Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially affection.
                            </p>
                            <p className='font-roboto text-slate-500 text-base mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum recusandae dolor autem laudantium, quaerat vel dignissimos. Magnam sint suscipit omnis eaque unde eos aliquam distinctio, quisquam iste, itaque possimus . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet alias modi eaque, ratione recusandae cupiditate dolorum repellendus iure eius rerum hic minus ipsa at, corporis nesciunt tempore vero voluptas. Tempore.
                            </p>

                            {/* Services Features */}
                            <h3 className='font-exo font-bold text-xl md:text-3xl mt-8 md:mt-10 mb-4 md:mb-5'>Services features</h3>
                            <div className="bg-[#E12454] w-10 h-1 my-4 md:my-6"></div>
                            <ul className='space-y-2 md:space-y-3 mb-8 md:mb-10'>
                                {[
                                    "International Drug Database",
                                    "Stretchers and Stretcher Accessories",
                                    "Cushions and Mattresses",
                                    "Cholesterol and lipid tests",
                                    "Critical Care Medicine Specialists",
                                    "Emergency Assistance"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 md:gap-3">
                                        <FaCheck className='text-[#E12454] text-xs md:text-sm' />
                                        <li className='text-slate-500 text-sm md:text-base'>{item}</li>
                                    </div>
                                ))}
                            </ul>

                            {/* Appointment Button */}
                            <button className='uppercase text-white bg-[#E12454] hover:bg-[#223A66] px-6 md:px-8 text-xs md:text-sm font-exo font-bold py-2 md:p-3 rounded-full flex items-center gap-2 transition-colors duration-300'>
                                <Link to="/appoinment">Make an Appointment</Link> 
                                <i className='text-lg md:text-xl'><BiChevronRight /></i>
                            </button>
                        </div>

                        {/* Sidebar - Full width on mobile, 1/3 on desktop */}
                        <div className="w-full lg:w-[33.333%] h-[330px] bg-[#F4F9FC] p-4 md:p-5 mt-6 lg:mt-10 rounded-lg">
                            <h5 className='text-lg md:text-xl font-exo font-bold pb-2 md:pb-3 mb-3 md:mb-4'>Time Schedule</h5>
                            <div className="bg-[#E12454] w-10 h-1 mb-4 md:mb-5"></div>
                            <ul className='font-roboto space-y-2'>
                                {[
                                    { day: "Monday - Friday", time: "9:00 - 17:00" },
                                    { day: "Saturday", time: "9:00 - 16:00" },
                                    { day: "Sunday", time: "Closed" }
                                ].map((item, index) => (
                                    <li key={index} className='flex justify-between py-1 md:py-2 text-sm md:text-base'>
                                        <span>{item.day}</span>
                                        <span className='text-slate-500'>{item.time}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 md:mt-5">
                                <p className='text-slate-500 text-sm md:text-base'>Need Urgent Help?</p>
                                <h3 className='font-exo text-xl md:text-2xl font-bold mt-1'>+23-4565-65768</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default DepartmentsSingle