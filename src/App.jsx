import React from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import Navbar from './componts/Navbar';
import Home from './componts/Home';
import About from './componts/About';
import Services from './componts/Services';
import Departments from './componts/Departments';
import DepartmentsSingle from './componts/DepartmentsSingle';
import Doctor from './componts/Doctor';
import Appoinment from './componts/Appoinment';
import Doctorsingle from './componts/Doctorsingle';
import Blogslidebar from './componts/Blogslidebar';
import Blogsingle from './componts/Blogsingle';
import Contact from './componts/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departmentssingle" element={<DepartmentsSingle />} />
        <Route path="/doctor" element={<Doctor />} />
         <Route path="/appoinment" element={<Appoinment />} />
            <Route path="/doctorsingle" element={<Doctorsingle />} />
             <Route path="/blogslidebar" element={<Blogslidebar />} />
               <Route path="/blogsingle" element={<Blogsingle />} />
                 <Route path="/contact" element={<Contact />} />

      </Routes>
=======
import { IoBagOutline } from "react-icons/io5";
import { LiaArrowAltCircleLeft } from "react-icons/lia";
import { PiArrowCircleRightFill } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";




function App() {
  return (
    <div className='overflow-x-hidden'>
      <div className="slider md:w-full md:h-auto bg-[#EFF5E1]">

        {/* Navbar */}
        <div className="navbar w-full h-auto p-5 flex justify-around items-center">
          <div className="logo">
            <h1 className='text-3xl text-[#2D3B36] font-bold uppercase'>SKINCARE</h1>
          </div>

          {/* Menu - Hidden on mobile */}
          <div className="menu hidden sm:block">
            <ul className='flex gap-14 text-[#2D3B36]'>
              <li>All Product</li>
              <li>Serum</li>
              <li>Sunscreen</li>
              <li>Bundle</li>
            </ul>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="icon bg-[#F8FEE5] p-2 rounded-full leading-tight">
              <i className='text-1xl text-black'><IoBagOutline /></i>
            </div>
            <div className="text">
              <span className="hidden md:block">Cart(1)</span>
            </div>
            <div className="icon2 bg-[#F8FEE5] p-2 rounded-full">
              <i className="text-1xl fa-regular fa-heart"></i>
            </div>
            <div className="icon3 bg-[#F8FEE5] p-2 rounded-full">
              <i className="text-1xl fas fa-user-circle"></i>
            </div>
          </div>
        </div>

        {/* Mobile Layout (<640px) */}
        <div className="block sm:hidden px-4">
          <div className="text-center mb-8">
            <h1 className="uppercase text-6xl text-[#2D3B36] leading-tight">
              <span className="block font-bold">glowww</span>
              <span className="block font-bold">naturally</span>
            </h1>
          </div>

          <div className="mb-8">
            <p className='text-[#2D3B36] text-center px-4'>
              Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <img
              className='w-[402px] h-[441px] object-cover rounded-lg'
              src={require('./img/skincare.jpg')}
              alt="skincare"
            />
          </div>

          <div className="mb-8">
            <h1 className="uppercase font-inter font-bold text-[80px] leading-[80px] text-[#2D3B36] text-center">
              Skincare
            </h1>
          </div>

          <div className="flex justify-center mb-8 relative">
            <img
              src={require('./img/beuty.png')}
              alt="beauty"
              className="w-[402px] h-[399px] object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button className="bg-[#EFF5EF] p-3 px-4 rounded-full capitalize flex items-start gap-3 shadow-md">
                {/* Replace circle with image */}
                <img
                  src={require('./img/skincare.jpg')} // ⭐️ Replace with your actual image
                  alt="award-icon"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col text-left leading-tight text-[#2D3B36]">
                  <span className='text-sm'>While giving you an invigorating cleansing experience.</span>
                </div>
              </button>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <button className="capitalize px-8 py-4 rounded-full text-white bg-[#2D3B36] text-lg">
              shop now
            </button>
          </div>
        </div>

        {/* Tablet Layout (640px - 767px) */}
        <div className="hidden sm:block md:hidden">
          <div className="w-full h-auto my-12 flex justify-around items-center flex-wrap relative">
            <div className="text w-[234px] h-[61px]">
              <p className='indent-24 text-[#2D3B36]'>
                Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
              </p>
            </div>

            <div className="image-skincare">
              <img
                className='w-[335.93px] h-[332px]'
                src={require('./img/skincare.jpg')}
                alt=""
              />
            </div>

            <div className="mt-10 text-center px-4 leading-8 absolute top-56">
              <h1 className="uppercase text-5xl text-[#2D3B36] font-bold font-inter">
                <span className="block text-[110px] font-bold font-inter">glowwww</span>
                <span className="block text-[110px] font-bold font-inter">naturally</span>
              </h1>
            </div>
          </div>

          <div className="relative w-full h-auto pt-10">
            <h1 className="uppercase font-inter font-bold text-[150px] leading-[240px] text-[#2D3B36] text-center mt-[280px]">
              Skincare
            </h1>

            <div className="absolute top-72 right-4">
              <button className="capitalize px-6 py-3 rounded-full text-white bg-[#2D3B36] text-lg">
                shop now
              </button>
            </div>

            <div className="flex absolute top-36 left-2 right-0 justify-between px-4 z-20 ">
              <img
                src={require('./img/beuty.png')}
                alt="beauty"
                className="w-[360px] h-[400px] rounded-lg ml-2"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button className="bg-[#EFF5EF] p-3 px-4 rounded-full capitalize flex items-start gap-3 shadow-md">
                  {/* Replace circle with image */}
                  <img
                    src={require('./img/skincare.jpg')} // ⭐️ Replace with your actual image
                    alt="award-icon"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col text-left leading-tight text-[#2D3B36]">
                    <span className='text-sm'>While giving you an invigorating cleansing experience.</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (≥768px) */}
        <div className="hidden md:block">
          <div className="w-full h-auto my-12 flex justify-around items-center flex-wrap relative">
            <div className="text w-[335px] h-[87px]">
              <p className='indent-24 text-[#2D3B36]'>
                Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
              </p>
            </div>

            <div className="center-text w-[398px] h-[253px]">
              <h1 className="uppercase text-7xl text-[#2D3B36] font-bold font-inter">
                glow nature-ally
              </h1>
            </div>

            <div className="image-skincare">
              <img
                className='w-[222.61px] h-[220px]'
                src={require('./img/skincare.jpg')}
                alt="skincare"
              />
            </div>
          </div>

          <div className="relative w-full h-auto pt-20">
            <h1 className="uppercase font-inter font-bold text-[250px] leading-[300px] text-[#2D3B36] text-left mt-[320px]">
              Skincare
            </h1>

            <div className="absolute top-72 left-32">
              <button className="capitalize px-6 py-3 rounded-full text-white bg-[#2D3B36] text-lg">
                shop now
              </button>
            </div>

            <div className="flex absolute top-1 left-[350px] items-center gap-6 z-20">
              <img
                src={require('./img/beuty.png')}
                alt="beauty"
                className="w-[610px] h-[676px] rounded-lg"
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button className="bg-[#EFF5EF] p-3 px-4 rounded-full capitalize flex items-start gap-3 shadow-md">
                  {/* Replace circle with image */}
                  <img
                    src={require('./img/skincare.jpg')} // ⭐️ Replace with your actual image
                    alt="award-icon"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col text-left leading-tight text-[#2D3B36]">
                    <span className='text-sm'>While giving you an invigorating cleansing experience.</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* text */}
      <div className="p-20 flex justify-center">
        <div className="text-skincare w-full h-auto">
          <p className='text-3xl capitalize text-[#2D3B36] font-inter'>
            Experience the ultimate in skincare with our expertly formulated products,
            crafted to nourish, protect, and rejuvenate your skin. Combining the finest
            natural ingredients with <span className='opacity-40'>advanced science, our collection ensures every
              skin type can achieve a radiant, healthy glow. Embrace your beauty with
              confidence every day. Experience the ultimate in skincare with our
              expertly formulated products, crafted to nourish, protect, and rejuvenate
              your skin.</span>
          </p>
        </div>
      </div>

      {/* skincare */}

      <div className="max-w-[1200px] mx-auto px-4 py-20 flex flex-col md:flex-row gap-10">

        {/* Left Side */}
        <div className="w-full md:w-1/2 px-2">
          {/* Button */}
          <div className="mb-4">
            <button className="capitalize p-2 rounded-full border border-[#2D3B36] flex items-center gap-3">
              <span className="bg-[#2D3B36] w-5 h-5 rounded-full flex items-center justify-center"></span>
              why our products
            </button>
          </div>

          {/* Heading + Paragraph */}
          <div className="text-[#2D3B36] font-inter">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mt-10 mb-6 leading-snug">
              YOUR SKIN DESERVES THE BEST CARE.
            </h2>
            <p className="text-sm sm:text-base">
              Discover a curated collection of skincare products designed to rejuvenate,
              protect, and pamper your skin. Explore our rage crafted with love backed
              by science, and inspired by nature.
            </p>
          </div>

          {/* Point 01 */}
          <div className="w-full flex my-10">
            <div>
              <span className="text-[#2D3B36] text-3xl sm:text-4xl mr-6">01</span>
            </div>
            <div>
              <h3 className="text-[#2D3B36] text-xl sm:text-2xl mb-2">bio ingredients</h3>
              <p className="text-[#2D3B36] text-sm sm:text-base">
                Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.
              </p>
            </div>
          </div>

          {/* Point 02 */}
          <div className="w-full flex my-10">
            <div>
              <span className="text-[#2D3B36] text-3xl sm:text-4xl mr-6">02</span>
            </div>
            <div>
              <h3 className="text-[#2D3B36] text-xl sm:text-2xl mb-2">Everything Natural</h3>
              <p className="text-[#2D3B36] text-sm sm:text-base">
                Pure ingredients for pure skin. The Perfect solution for your skin care needs.
              </p>
            </div>
          </div>

          {/* Point 03 */}
          <div className="w-full flex my-10">
            <div>
              <span className="text-[#2D3B36] text-3xl sm:text-4xl mr-6">03</span>
            </div>
            <div>
              <h3 className="text-[#2D3B36] text-xl sm:text-2xl mb-2">All Handmade</h3>
              <p className="text-[#2D3B36] text-sm sm:text-base">
                Made with love and care. Just for you. Give your skin the tender loving care it deserves.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 px-2 relative">
          <img className="w-full h-auto object-cover" src={require('./img/person.png')} alt="" />

          {/* Award Button */}
          <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 md:left-52 md:translate-x-0">
            <button className="bg-[#EFF5EF] p-3 px-4 rounded-full capitalize flex items-start gap-3">
              <span className="w-12 h-12 bg-[#2D3B36] rounded-full"></span>
              <div className="flex flex-col text-left leading-tight">
                <span>best skin care product</span>
                <span>award winning</span>
              </div>
            </button>
          </div>

          <div className="flex justify-between mt-4 px-2">
            <h2 className="uppercase text-[#2D3B36] font-inter text-sm sm:text-base">since 2001</h2>
            <span className="uppercase text-[#2D3B36] font-inter text-sm sm:text-base">learn more</span>
          </div>
        </div>
      </div>


      {/*  */}
      <div className="max-w-[1200px] mx-4 md:mx-16 py-10">
        {/* Top Row */}
        <div className="row w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Button */}
          <div className="">
            <button className="capitalize p-2 rounded-full border border-[#2D3B36] flex items-center gap-3">
              <span className="bg-[#2D3B36] w-[20px] h-[20px] rounded-full flex items-center justify-center"></span>
              best selling product
            </button>
          </div>

          {/* Title */}
          <h2 className="text-[#2D3B36] font-inter text-2xl sm:text-3xl text-center md:text-left">
            Skincare That Brings Out<br />
            Your Natural Radiance
          </h2>

          {/* Arrows - hidden on sm/md, visible only in image row below */}
          <div className="hidden md:flex gap-5">
            <i className="text-black text-6xl"><LiaArrowAltCircleLeft /></i>
            <i className="text-6xl"><PiArrowCircleRightFill /></i>
          </div>
        </div>

        {/* Images */}
        <div className="py-10 flex flex-col items-center justify-center md:flex-row md:justify-center gap-6">
          {/* Image 1 - always visible */}
          <div className="relative w-[320px] sm:w-[350px] h-[480px] sm:h-[500px]">
            <img
              src={require('./img/product1.jpg')}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[280px] sm:w-[320px] h-[100px] bg-[#FEFFF4] rounded-md shadow-md p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#2D3B36] font-semibold text-lg">Alya Skin Cleanser</p>
                <div className="bg-[#2D3B36] p-2 rounded-md">
                  <FaShoppingCart className="text-white text-md" />
                </div>
              </div>
              <p className="text-[#2D3B36] text-sm">From $29.99</p>
            </div>
          </div>

          {/* Image 2 & 3 - hidden on sm and md */}
          <div className="hidden md:block relative w-[350px] h-[500px]">
            <img src={require('./img/product2.jpg')} alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[320px] h-[100px] bg-[#FEFFF4] rounded-md shadow-md p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#2D3B36] font-semibold text-lg">Alya Skin Cleanser</p>
                <div className="bg-[#2D3B36] p-2 rounded-md">
                  <FaShoppingCart className="text-white text-md" />
                </div>
              </div>
              <p className="text-[#2D3B36] text-sm">From $29.99</p>
            </div>
          </div>

          <div className="hidden md:block relative w-[350px] h-[500px]">
            <img src={require('./img/product3.jpg')} alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[320px] h-[100px] bg-[#FEFFF4] rounded-md shadow-md p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#2D3B36] font-semibold text-lg">Alya Skin Cleanser</p>
                <div className="bg-[#2D3B36] p-2 rounded-md">
                  <FaShoppingCart className="text-white text-md" />
                </div>
              </div>
              <p className="text-[#2D3B36] text-sm">From $29.99</p>
            </div>
          </div>
        </div>

        {/* Arrows for sm & md - centered below image */}
        <div className="flex md:hidden justify-center gap-6 mt-4">
          <i className="text-black text-5xl"><LiaArrowAltCircleLeft /></i>
          <i className="text-black text-5xl"><PiArrowCircleRightFill /></i>
        </div>
      </div>



      {/* image picture */}


      <div className="hidden md:block max-w-[1200px] mx-auto py-20 relative">
        {/* Image with dark gradient bottom */}
        <div className="relative">
          <img
            className="w-full h-auto rounded-md"
            src={require('./img/lady.png')}
            alt=""
          />

          {/* Bottom dark gradient over image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-md"></div>

          {/* Centered text and button on image bottom */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white z-10">
            <p className="text-4xl leading-snug font-inter">
              Feel Beautiful Inside and Out<br />
              with Every Product.
            </p>

            <button className="mt-4 px-6 py-2 bg-white text-black font-medium rounded-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>



      {/* feel beautiful section */}


      <div className="max-w-[1200px] mx-4 md:mx-16 h-auto py-20">
        {/* ==== Top Text Centered ==== */}
        <div className="w-full text-center mb-8">
          <h2 className="text-[#2D3B36] font-inter text-2xl md:text-3xl leading-snug">
            Feel Beautiful Inside and Out<br />
            with Every Product.
          </h2>

          {/* Filter Buttons */}
          <div className="mt-6 flex justify-center flex-wrap gap-4 sm:grid sm:grid-cols-2 sm:gap-4 md:flex">
            <button className="px-4 py-2 bg-[#FEFFF4] border border-black rounded-full text-sm font-medium">
              NEW ARRIVAL
            </button>
            <button className="px-4 py-2 bg-[#FEFFF4] border border-black rounded-full text-sm font-medium">
              CLEANSING
            </button>
            <button className="px-4 py-2 bg-[#FEFFF4] border border-black rounded-full text-sm font-medium">
              ACNE FIGHTER
            </button>
            <button className="px-4 py-2 bg-[#FEFFF4] border border-black rounded-full text-sm font-medium">
              ANTI AGGING
            </button>
          </div>
        </div>

        {/* ==== Image Section ==== */}
        <div className="py-14 px-4 flex justify-center gap-6 flex-wrap md:flex-nowrap">
          {/* Image 1 - Always visible */}
          <div className="relative w-[350px] h-[500px]">
            <img
              src={require('./img/product1.jpg')}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[320px] h-[100px] bg-[#FEFFF4] rounded-md shadow-md p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#2D3B36] font-semibold text-lg">Alya Skin Cleanser</p>
                <div className="bg-[#2D3B36] p-2 rounded-md">
                  <FaShoppingCart className="text-white text-md" />
                </div>
              </div>
              <p className="text-[#2D3B36] text-sm">From $29.99</p>
            </div>
          </div>

          {/* Images 2 & 3 - Hidden below md */}
          <div className="hidden md:block relative w-[350px] h-[500px]">
            <img
              src={require('./img/product2.jpg')}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[320px] h-[100px] bg-[#FEFFF4] rounded-md shadow-md p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#2D3B36] font-semibold text-lg">Alya Skin Cleanser</p>
                <div className="bg-[#2D3B36] p-2 rounded-md">
                  <FaShoppingCart className="text-white text-md" />
                </div>
              </div>
              <p className="text-[#2D3B36] text-sm">From $29.99</p>
            </div>
          </div>

          <div className="hidden md:block relative w-[350px] h-[500px]">
            <img
              src={require('./img/product3.jpg')}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[320px] h-[100px] bg-[#FEFFF4] rounded-md shadow-md p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#2D3B36] font-semibold text-lg">Alya Skin Cleanser</p>
                <div className="bg-[#2D3B36] p-2 rounded-md">
                  <FaShoppingCart className="text-white text-md" />
                </div>
              </div>
              <p className="text-[#2D3B36] text-sm">From $29.99</p>
            </div>
          </div>
        </div>

        {/* Arrows below image on small screens */}
        <div className="flex justify-center gap-10 mt-4 md:hidden">
          <i className="text-black text-4xl">
            <LiaArrowAltCircleLeft />
          </i>
          <i className="text-4xl">
            <PiArrowCircleRightFill />
          </i>
        </div>
      </div>



      {/* Answer to Question Skincare */}

     <div className="max-w-[1200px] mx-4 md:mx-16 h-auto py-20 flex flex-col md:flex-row gap-12 md:gap-24">
  
  {/* === Image for Desktop Only === */}
  <div className="image-beauty relative hidden md:block">
    <img className='w-[650px] h-[650px] object-cover' src={require('./img/product3.jpg')} alt="" />

    <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 md:left-56 md:translate-x-0">
      <button className="bg-[#EFF5EF] p-3 px-4 rounded-full capitalize flex items-start gap-3">
        <i className='p-3 rounded-full text-white bg-[#2D3B36]'><FaHeadphones /></i>
        <div className="flex flex-col text-left leading-tight">
          <span>24/7 We’re Here<br />to Help You</span>
        </div>
      </button>
    </div>
  </div>

  {/* === Right Side FAQ === */}
  <div className="flex flex-col items-center md:items-start">
    <div className="button mb-4">
      <button className="capitalize p-2 rounded-full border border-[#2D3B36] flex items-center gap-3">
        <span className="bg-[#2D3B36] w-[20px] h-[20px] rounded-full flex items-center justify-center"></span>
        Frequently Asked Question
      </button>
    </div>

    <div className="text-answer my-6 text-center md:text-left">
      <h2 className='text-2xl md:text-3xl text-[#2D3B36] leading-snug'>
        Answers to Your<br />
        Skincare Questions, All<br />
        in One Place.
      </h2>
    </div>

    {/* Questions (No map used) */}
    <div className="flex flex-col gap-5 mt-4 w-full max-w-[450px]">
      <div className="w-full h-[60px] bg-[#FEFFF4] border border-black flex items-center justify-between px-5 rounded">
        <p className="text-base text-[#2D3B36] font-medium capitalize">Are your products safe for sensitive skin?</p>
        <span className="text-2xl text-[#2D3B36] font-bold">+</span>
      </div>
      <div className="w-full h-[60px] bg-[#FEFFF4] border border-black flex items-center justify-between px-5 rounded">
        <p className="text-base text-[#2D3B36] font-medium capitalize">Are your products cruelty-free?</p>
        <span className="text-2xl text-[#2D3B36] font-bold">-</span>
      </div>
      <div className="w-full h-[60px] bg-[#FEFFF4] border border-black flex items-center justify-between px-5 rounded">
        <p className="text-base text-[#2D3B36] font-medium capitalize">What’s your return policy?</p>
        <span className="text-2xl text-[#2D3B36] font-bold">+</span>
      </div>
      <div className="w-full h-[60px] bg-[#FEFFF4] border border-black flex items-center justify-between px-5 rounded">
        <p className="text-base text-[#2D3B36] font-medium capitalize">Do you ship internationally?</p>
        <span className="text-2xl text-[#2D3B36] font-bold">+</span>
      </div>
      <div className="w-full h-[60px] bg-[#FEFFF4] border border-black flex items-center justify-between px-5 rounded">
        <p className="text-base text-[#2D3B36] font-medium capitalize">How do i choose the right product?</p>
        <span className="text-2xl text-[#2D3B36] font-bold">+</span>
      </div>
    </div>

    {/* === Mobile Image === */}
    <div className="block sm:hidden mt-10 relative">
      <img className='w-full max-w-[400px] mx-auto h-auto object-cover' src={require('./img/product3.jpg')} alt="" />
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button className="bg-[#EFF5EF] p-3 px-4 rounded-full capitalize flex items-start gap-3">
          <i className='p-3 rounded-full text-white bg-[#2D3B36]'><FaHeadphones /></i>
          <div className="flex flex-col text-left leading-tight text-sm">
            <span>24/7 We’re Here<br />to Help You</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</div>



      {/* Footer */}

   <div className="w-full h-auto bg-[#2D3B36]">
  {/* Top Section */}
  <div className="pt-20 px-6 sm:px-10 w-full flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
    
    {/* Left Block */}
    <div className="join w-full md:w-[485px] h-[300px] flex flex-col justify-between">
      {/* Heading */}
      <div>
        <h2 className="capitalize text-white text-4xl sm:text-5xl leading-tight">
          Join The Skincare<br />
          Community Now.
        </h2>
      </div>

      {/* Bottom Social Links */}
      <div className="flex justify-between text-white text-sm sm:text-base">
        <span>Facebook</span>
        <span>Instagram</span>
        <span>YouTube</span>
      </div>
    </div>

    {/* Right Block */}
    <div className="join w-full md:w-[485px] h-[300px] flex flex-col justify-between">
      {/* Top Content */}
      <div>
        <h2 className="capitalize text-white text-2xl sm:text-3xl mb-3">
          get in touch
        </h2>
        <span className="capitalize text-white text-3xl sm:text-4xl">
          contact.skincare.com
        </span>
      </div>

      {/* Bottom Social Links */}
      <div className="flex justify-between text-white text-sm sm:text-base">
        <span>Facebook</span>
        <span>Instagram</span>
        <span>YouTube</span>
      </div>
    </div>
  </div>

  {/* Background Skincare Text */}
  <div className="relative w-full h-[250px] sm:h-[300px] bg-[#2D3B36] mt-10 sm:mt-0">
    <h1 className="uppercase font-inter font-bold text-[100px] sm:text-[200px] md:text-[250px] leading-none text-white/10 text-center select-none pointer-events-none">
      Skincare
    </h1>
  </div>
</div>


>>>>>>> d42ee993cbaaa870ce86bea216b423ba2366334e
    </div>
  );
}

export default App;
