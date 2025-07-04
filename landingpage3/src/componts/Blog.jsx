import React from 'react'

function Blog() {
  return (
    <div>
        <div className="w-full h-[962px] py-20" id='Blog'>
        <div className="h-[802px] mx-16 px-3">
          <div className="flex justify-center mb-5">
            <h5 className='text-center text-5xl  pb-4'>Blog</h5>
          </div>

          <div className="flex">
            <div className="w-[350px] h-[637px] px-3 mb-4">
              <img className='mb-4' src={require('../img/img1.png')} alt="" />
              <span className='no-underline text-2xl text-teal-500'>Create Beautiful Website In Less Than An Hour</span>
              <div className="mb-4 text-gray-400">Ham Brook <span className="mx-2">•</span> Jan 18, 2019<span className="mx-2 text-gray-400">•</span> <span className='no-underline text-teal-500'>News</span></div>
              <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
              <p><span  className='no-underline text-teal-500'>Continue Reading...</span></p>
            </div>


            <div className="w-[350px] h-[637px] px-3 mb-4">
              <img className='mb-4' src={require('../img/img2.png')} alt="" />
              <span className='no-underline text-2xl text-teal-500'>Create Beautiful Website In Less Than An Hour</span>
              <div className="mb-4 text-gray-400">Ham Brook <span className="mx-2">•</span> Jan 18, 2019<span className="mx-2 text-gray-400">•</span> <span  className='no-underline text-teal-500'>News</span></div>
              <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
              <p><span  className='no-underline text-teal-500'>Continue Reading...</span></p>

            </div>


            <div className="w-[350px] h-[637px] px-3 mb-4">
              <img className='mb-4' src={require('../img/img3.png')} alt="" />
              <span className='no-underline text-2xl text-teal-500'>Create Beautiful Website In Less Than An Hour</span>
              <div className="mb-4 text-gray-400">Ham Brook <span className="mx-2">•</span> Jan 18, 2019<span className="mx-2 text-gray-400">•</span> <span  className='no-underline text-teal-500'>News</span></div>
              <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
              <p><span  className='no-underline text-teal-500'>Continue Reading...</span></p>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Blog
