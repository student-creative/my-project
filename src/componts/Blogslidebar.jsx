import React from 'react'
import { MdOutlineInsertComment } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BiChevronRight } from 'react-icons/bi';
import Footer from './Footer';

function Blogslidebar() {
    return (
        <div>
            {/* Hero Section */}
            <div className="background-image">
                <div className="relative">
                    <img 
                        src={require('../img/back.png')} 
                        alt="Background" 
                        className="w-full h-[200px] md:h-[324px] object-cover" 
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-[#223A66] opacity-90"></div>

                    {/* Centered Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center capitalize font-exo px-4">
                        <span className="text-white text-base md:text-lg">Our blog</span>
                        <h1 className="text-white text-3xl md:text-5xl font-bold mt-2">Blog articles</h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="section-award w-full h-auto py-10 md:py-20 bg-white px-4 sm:px-6">
                <div className="container max-w-[1140px] mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Blog Posts - Full width on mobile, 2/3 on desktop */}
                        <div className="w-full lg:w-[66.666%]">
                            {[
                                { img: 'blog.jpg', title: 'Choose quality service over cheap service all type of things' },
                                { img: 'blog2.jpg', title: 'All test cost 25% in always in our laboratory' },
                                { img: 'blog3.jpg', title: 'Get Free consulation from our special surgeon and doctors' }
                            ].map((post, index) => (
                                <div key={index} className="w-full h-auto px-0 md:px-4 mb-10 last:mb-0">
                                    <div className="image rounded-lg overflow-hidden">
                                        <img 
                                            className='w-full h-auto md:h-[400px] lg:h-[486px] object-cover' 
                                            src={require(`../img/${post.img}`)} 
                                            alt={post.title} 
                                        />
                                    </div>
                                    <div className="icon mt-4 mb-4 flex flex-wrap gap-4">
                                        <span className='flex items-center gap-2 text-slate-500 text-sm md:text-base'>
                                            <MdOutlineInsertComment />5 Comments
                                        </span>
                                        <span className='flex items-center gap-2 text-slate-500 text-sm md:text-base'>
                                            <SlCalender />28th January
                                        </span>
                                    </div>
                                    <h2 className='font-exo text-2xl md:text-3xl lg:text-4xl font-semibold hover:text-[#E12454] my-3 md:my-5'>
                                        {post.title}
                                    </h2>
                                    <p className='text-slate-500 text-base md:text-lg mb-5'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquid architecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum rem id assumenda quam recusandae ipsam ea porro, dicta ad.
                                    </p>
                                    <button className='uppercase text-white bg-[#223A66] hover:bg-[#E12454] px-6 md:px-8 text-xs md:text-sm font-exo font-bold py-2 md:p-3 rounded-full flex items-center gap-2 transition-colors duration-300'>
                                        Read More <i className='text-xl'><BiChevronRight /></i>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Sidebar - Full width on mobile, 1/3 on desktop */}
                        <div className="w-full lg:w-[33.333%] h-auto pl-0 lg:pl-5">
                            {/* Search */}
                            <div className="search pb-6 md:pb-8 mb-4 bg-white p-4 md:p-6 rounded-lg shadow-sm">
                                <h5 className='font-exo font-bold text-lg md:text-xl'>Search Here</h5>
                                <div className="bg-[#E12454] w-10 h-1 my-4 md:my-6"></div>
                                <form className="w-full mt-4">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full border border-slate-300 rounded px-3 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-[#E12454]"
                                    />
                                </form>
                            </div>

                            {/* Popular Posts */}
                            <div className="popular-post pb-6 md:pb-8 mb-4 bg-white p-4 md:p-6 rounded-lg shadow-sm">
                                <h5 className='font-exo font-bold text-lg md:text-xl'>Popular Posts</h5>
                                <div className="bg-[#E12454] w-10 h-1 my-4 md:my-6"></div>
                                {[
                                    { date: '03 Mar 2018', title: 'Thoughtful living in los Angeles' },
                                    { date: '03 Mar 2018', title: 'Vivamus molestie gravida turpis.' },
                                    { date: '03 Mar 2018', title: 'Fusce lobortis lorem at ipsum semper sagittis' }
                                ].map((post, index) => (
                                    <div key={index} className="py-3 border-b border-slate-100 last:border-0">
                                        <span className='text-slate-500 text-sm'>{post.date}</span>
                                        <h6 className='font-exo font-bold text-base md:text-lg mt-1'>{post.title}</h6>
                                    </div>
                                ))}
                            </div>

                            {/* Categories */}
                            <div className="categories pb-6 md:pb-8 mb-4 bg-white p-4 md:p-6 rounded-lg shadow-sm">
                                <h5 className='font-exo font-bold text-lg md:text-xl'>Categories</h5>
                                <div className="bg-[#E12454] w-10 h-1 my-4 md:my-6"></div>
                                <ul className='space-y-2 md:space-y-3'>
                                    {[
                                        { name: 'Medicine', count: 14 },
                                        { name: 'Equipments', count: 2 },
                                        { name: 'Heart', count: 10 },
                                        { name: 'Free counselling', count: 5 },
                                        { name: 'Lab test', count: 5 }
                                    ].map((item, index) => (
                                        <li key={index} className="flex justify-between items-center">
                                            <a href={`#/${item.name.toLowerCase()}`} className="hover:text-[#E12454] transition-colors">
                                                {item.name}
                                            </a>
                                            <span className='text-slate-500 text-sm'>({item.count})</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tags */}
                            <div className="categories pb-6 md:pb-8 mb-4 bg-white p-4 md:p-6 rounded-lg shadow-sm">
                                <h5 className='font-exo font-bold text-lg md:text-xl'>Tags</h5>
                                <div className="bg-[#E12454] w-10 h-1 my-4 md:my-6"></div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 md:gap-3">
                                    {[
                                        'doctors', 'agency', 'company', 'medicine', 
                                        'surgery', 'Marketing', 'Social Media', 
                                        'Branding', 'Laboratory'
                                    ].map((tag, index) => (
                                        <a 
                                            key={index}
                                            href={`#/${tag.toLowerCase()}`} 
                                            className="uppercase p-2 md:p-3 bg-slate-100 hover:bg-slate-200 rounded-full text-center transition-colors"
                                        >
                                            <span className="text-xs md:text-sm opacity-75 font-roboto">{tag}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Time Schedule */}
                            <div className="w-full h-auto bg-[#F4F9FC] p-4 md:p-6 rounded-lg shadow-sm">
                                <h5 className='text-lg md:text-xl font-exo font-bold pb-2 md:pb-3 mb-3 md:mb-4'>Time Schedule</h5>
                                <div className="bg-[#E12454] w-10 h-1 mb-4 md:mb-5"></div>
                                <ul className='font-roboto space-y-2 md:space-y-3'>
                                    <li className='flex justify-between py-1 md:py-2'>
                                        Monday - Friday
                                        <span className='text-slate-500'>9:00 - 17:00</span>
                                    </li>
                                    <li className='flex justify-between py-1 md:py-2'>
                                        Saturday
                                        <span className='text-slate-500'>9:00 - 16:00</span>
                                    </li>
                                    <li className='flex justify-between py-1 md:py-2'>
                                        Sunday
                                        <span className='text-slate-500'>Closed</span>
                                    </li>
                                </ul>
                                <div className="mt-4 md:mt-5">
                                    <p className='text-slate-500 text-sm md:text-base'>Need Urgent Help?</p>
                                    <h3 className='font-exo text-xl md:text-2xl font-bold'>+23-4565-65768</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Blogslidebar