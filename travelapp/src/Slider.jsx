import React from 'react'

function Slider() {
  return (
    <div>
         <div className="slider">
                        <div className="image relative">
                            <img className='w-full h-auto' src={require("./img/hero.png")} alt="" />
                            <div className="absolute bg-black inset-0 opacity-45"></div>
                            <div className="contanier mx-16 px-4  absolute inset-0 flex items-center justify-center">
                           
                                <div className="w-[475px] h-[175px] px-3 text-center">
                                <h1 class="mb-3  text-center text-white text-4xl font-bold">About Us</h1>
                                <p className='mb-3  text-center text-white text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
                                </div>

                           
                        </div>
                        </div>
        </div>
    </div>
  )
}

export default Slider