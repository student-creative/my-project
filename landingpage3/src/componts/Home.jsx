import React from 'react'
import { FaCheck } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from '../ExampleCarouselImage1';
function Home() {
  return (
    <div>
        <div className="sticky top-0 z-50 bg-white py-6 flex items-center justify-around shadow" id="Home">
  <h1 className="text-4xl px-3">Create <span className="text-cyan-500">.</span></h1>
  <div className="menubar">
    <ul className="flex space-x-16 font-thin">
      <li><a href="#Home" className="hover:text-cyan-400 no-underline text-black">Home</a></li>
      <li><a href="#Work" className="hover:text-cyan-400 no-underline text-black">Work</a></li>
      <li><a href="#Services" className="hover:text-cyan-400 no-underline text-black">Services</a></li>
      <li><a href="#About" className="hover:text-cyan-400 no-underline text-black">About</a></li>
      <li><a href="#Blog" className="hover:text-cyan-400 no-underline text-black">Blog</a></li>
      <li><a href="#Contact" className="hover:text-cyan-400 no-underline text-black">Contact</a></li>
    </ul>
  </div>
</div>


      {/* ***********slider***************** */}

      <div className='slider relative'>

        <Carousel>
          <Carousel.Item interval={1000}>
            <ExampleCarouselImage1 text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <ExampleCarouselImage1 text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage1 text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className='absolute inset-0 bg-black opacity-30'></div>

        <div className='flex justify-center'>
          <div className="absolute top-80 text-center">
            <h1 className='text-white'>We Love To Build <span class="typed-words">Web Apps</span><span class="typed-cursor typed-cursor--blink">|</span></h1>
            <p className='text-white mb-10'>Free Web Template by <span className='text-cyan-300 no-underline'>Colorlib</span></p>
            <button className='uppercase bg-teal-400 p-3 px-4 rounded-xl'>watch video</button>
          </div>
        </div>
      </div>


      {/* *******************section***************** */}

      <div className="section w-full h-[525px] py-14 flex justify-center">

        <div className="w-[400px] h-[365px] px-3">
          <div className="p-4">
            <h2 className='mb-2 text-cyan-300'>Innovate</h2>
            <p className='mb-4 font-thin '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.</p>


            <b className=' flex leading-tight items-center'><FaCheck /><span className='ml-3 font-thin mb-3'>Customer Experience</span></b>
            <b className=' flex leading-tight items-center'><FaCheck /><span className='ml-3 font-thin mb-3'>Product Managment</span></b>
            <b className=' flex leading-tight items-center'><FaCheck /><span className='ml-3 font-thin mb-3'>Proof of Concept</span></b>

          </div>
        </div>



        <div className="w-[400px] h-[365px] px-3">
          <div className="p-4">
            <h2 className='mb-2 text-cyan-300'>Create</h2>
            <p className='mb-4 font-thin '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.</p>


            <b className=' flex leading-tight items-center'><FaCheck /><span className='ml-3 font-thin mb-3'>Customer Experience</span></b>
            <b className=' flex leading-tight items-center'><FaCheck /><span className='ml-3 font-thin mb-3'>Product Managment</span></b>
            <b className=' flex leading-tight items-center'><FaCheck /><span className='ml-3 font-thin mb-3'>Proof of Concept</span></b>

          </div>
        </div>




        <div className="w-[400px] h-[365px] px-3">
          <div className="p-4">
            <h2 className='mb-2 text-cyan-300'>Scale</h2>
            <p className='mb-4 font-thin '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.</p>


            <b className=' flex leading-tight items-center'><FaCheck /><span className='ml-3 font-thin mb-3'>Customer Experience</span></b>
            <b className=' flex leading-tight items-center'><FaCheck /><span className='ml-3 font-thin mb-3'>Product Managment</span></b>
            <b className=' flex leading-tight items-center'><FaCheck /><span className='ml-3 font-thin mb-3'>Proof of Concept</span></b>

          </div>
        </div>





      </div>
    </div>
  )
}

export default Home