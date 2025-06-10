import React from 'react'
import { MdOutlineLaptopMac } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from 'react-icons/fa';  // NOT from 'react-icons/ti'
function About() {
  return (
    <div>
       <div className="w-full h-[773px] py-20" id='About'>
        <div className="h-[565px] mx-20 px-3 flex">

          <div className="w-[570px] h-[565px]">
            <h2 className='pb-4 text-5xl'>About Us</h2>
            <p className='text-2xl font-thin mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt magnam corrupti, odit eos harum quaerat nostrum voluptatibus aspernatur eligendi accusantium cum, impedit blanditiis voluptate commodi doloribus, nemo dignissimos recusandae.</p>
            <div className="flex">
              <div className="w-[255px] h-[226px] px-3">
                <div className="text-4xl mr-4 mb-3">
                  < MdOutlineLaptopMac />
                </div>
                <h3 className='font-thin text-xl mb-3'>Web &amp; Mobile Specialties</h3>
                <p className='mb-3 text-[17px] font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</p>
                <p><a className='no-underline text-cyan-300' href="#">Learn More</a></p>

              </div>
              <div className="w-[255px] h-[226px] px-3">
                <div className="text-4xl mr-4 mb-3">
                  < FaPuzzlePiece />
                </div>
                <h3 className='font-thin text-xl mb-3'>Web &amp; Mobile Specialties</h3>
                <p className='mb-3 text-[17px] font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</p>
                <p><a className='no-underline text-cyan-300' href="#">Learn More</a></p>

              </div>



            </div>

          </div>
          <div className="image ml-auto px-3 mb-4">
            <img className='w-[445px] h-[430px]' src={require('../img/setup.png')} alt="" />
          </div>
        </div>


      </div>


      {/* ******************************ourteam*************** */}

      <div className="w-full h-[798px]">
        <div className="h-[638px] mx-16 px-3">
          <div className="flex justify-center mb-5">
            <h5 className='text-center text-5xl font-normal pb-4'>Our Services</h5>
          </div>

          <div className="flex">
            <div className="w-[350px] h-[512px] px-3 flex justify-center flex-wrap">
              <div className="">
                <img className='w-[175px] h-[175px] rounded-full mb-10' src={require('../img/person.webp')} alt="" />
              </div>
              <div className="">
                <h3 className='font-normal text-center'>John Rooster</h3>
                <p className='font-thin text-center'>Co-Founder, President</p>
                <p className='mb-4 font-thin text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>


              </div>
              <div className="icon flex space-x-3">
                <span className=' bg-gray-500 p-3 rounded-full text-white'><FaFacebook /></span>
                <span className=' bg-gray-500 p-3 rounded-full text-white'><FaTwitter /></span>
                <span className=' bg-gray-500 p-3 rounded-full text-white'><FaLinkedin /></span>
                <span className=' bg-gray-500 p-3 rounded-full text-white'><FaSquareInstagram /></span>
              </div>
            </div>


            <div className="w-[350px] h-[512px] px-3 flex justify-center flex-wrap">
              <div className="">
                <img className='w-[175px] h-[175px] rounded-full mb-10' src={require('../img/person2.webp')} alt="" />
              </div>
              <div className="">
                <h3 className='font-normal text-center'>John Rooster</h3>
                <p className='font-thin text-center'>Co-Founder, President</p>
                <p className='mb-4 font-thin text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
              </div>
              <div className="icon flex space-x-3">
                <span className=' bg-gray-500 p-3 rounded-full text-white'><FaFacebook /></span>
                <span className=' bg-gray-500 p-3 rounded-full text-white'><FaTwitter /></span>
                <span className=' bg-gray-500 p-3 rounded-full text-white'><FaLinkedin /></span>
                <span className=' bg-gray-500 p-3 rounded-full text-white'><FaSquareInstagram /></span>
              </div>
            </div>



            <div className="w-[350px] h-[512px] px-3 flex justify-center flex-wrap">
              <div className="">
                <img className='w-[175px] h-[175px] rounded-full mb-10' src={require('../img/person3.webp')} alt="" />
              </div>
              <div className="">
                <h3 className='font-normal text-center'>John Rooster</h3>
                <p className='font-thin text-center'>Co-Founder, President</p>
                <p className='mb-4 font-thin text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
              </div>
              <div className="icon flex space-x-3">
                <span className=' bg-gray-500 p-3 rounded-full text-white'><FaFacebook /></span>
                <span className=' bg-gray-500 p-3 rounded-full text-white'><FaTwitter /></span>
                <span className=' bg-gray-500 p-3 rounded-full text-white'><FaLinkedin /></span>
                <span className=' bg-gray-500 p-3 rounded-full text-white'><FaSquareInstagram /></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
