import React from 'react'
import { FaCheck } from "react-icons/fa";

function Price() {
    return (
        <div>
             <div className="w-full px-3 pt-10">
  <div className="max-w-7xl mx-auto px-4">
    <div className="pricing pt-24 pb-14">
      <h4 className="uppercase text-orange-400 text-center tracking-widest">
        M&nbsp;e&nbsp;n&nbsp;u&nbsp; &amp; P&nbsp;r&nbsp;i&nbsp;c&nbsp;i&nbsp;&nbsp;n&nbsp;g&nbsp;
      </h4>
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center">
        Competitive Pricing
      </h1>
    </div>

    <div className="coffebar flex flex-col lg:flex-row gap-8">
      {/* Hot Coffee Section */}
      <div className="w-full lg:w-1/2">
        <h1 className="mb-5 text-2xl font-semibold">Hot Coffee</h1>

        <div className="flex gap-4 items-start mt-5">
          <img
            className="w-28 h-28 sm:w-24 sm:h-24 rounded-full object-cover"
            src={require('./img/menu1.jpg')}
            alt=""
          />
          <div className="flex-1">
            <h4 className="font-semibold">Black Coffee</h4>
            <p className="m-0 text-sm text-gray-600 font-montserrat">
              Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start mt-5">
          <img
            className="w-28 h-28 sm:w-24 sm:h-24 rounded-full object-cover"
            src={require('./img/menu2.jpg')}
            alt=""
          />
          <div className="flex-1">
            <h4 className="font-semibold">Chocolate Coffee</h4>
            <p className="m-0 text-sm text-gray-600 font-montserrat">
              Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start mt-5">
          <img
            className="w-28 h-28 sm:w-24 sm:h-24 rounded-full object-cover"
            src={require('./img/menu3.jpg')}
            alt=""
          />
          <div className="flex-1">
            <h4 className="font-semibold">Coffee With Milk</h4>
            <p className="m-0 text-sm text-gray-600 font-montserrat">
              Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
            </p>
          </div>
        </div>
      </div>

      {/* Cold Coffee Section */}
      <div className="w-full lg:w-1/2">
        <h1 className="mb-5 text-2xl font-semibold">Cold Coffee</h1>

        <div className="flex gap-4 items-start mt-5">
          <img
            className="w-28 h-28 sm:w-24 sm:h-24 rounded-full object-cover"
            src={require('./img/menu1.jpg')}
            alt=""
          />
          <div className="flex-1">
            <h4 className="font-semibold">Black Coffee</h4>
            <p className="m-0 text-sm text-gray-600 font-montserrat">
              Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start mt-5">
          <img
            className="w-28 h-28 sm:w-24 sm:h-24 rounded-full object-cover"
            src={require('./img/menu2.jpg')}
            alt=""
          />
          <div className="flex-1">
            <h4 className="font-semibold">Chocolate Coffee</h4>
            <p className="m-0 text-sm text-gray-600 font-montserrat">
              Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start mt-5">
          <img
            className="w-28 h-28 sm:w-24 sm:h-24 rounded-full object-cover"
            src={require('./img/menu3.jpg')}
            alt=""
          />
          <div className="flex-1">
            <h4 className="font-semibold">Coffee With Milk</h4>
            <p className="m-0 text-sm text-gray-600 font-montserrat">
              Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* ************************************************************* */}
<div className="w-full my-5 px-3 flex items-center justify-center">
  <div className="relative w-full max-w-7xl h-auto min-h-[800px]">
    
    {/* Background Image */}
    <img
      src={require('./img/back3.jpg')}
      alt=""
      className="w-full h-full object-cover absolute inset-0 z-0"
    />
    
    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

    {/* Flex Container for Two Sides */}
    <div className="relative z-20 flex flex-col lg:flex-row items-start justify-between gap-8 p-6 lg:p-12 h-full">
      
      {/* Left Offer Text */}
      <div className="w-full lg:w-1/2 bg-opacity-80">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-2">30% OFF</h1>
        <h1 className="text-white text-xl sm:text-2xl mb-3">For Online Reservation</h1>
        <p className="text-white font-montserrat text-sm sm:text-base mb-4">
          Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
          ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea
        </p>

        <div className="space-y-2">
          <div className="flex items-start">
            <i className="mr-3 text-orange-500"><FaCheck /></i>
            <h5 className="text-white">Lorem ipsum dolor sit amet</h5>
          </div>
          <div className="flex items-start">
            <i className="mr-3 text-orange-500"><FaCheck /></i>
            <h5 className="text-white">Lorem ipsum dolor sit amet</h5>
          </div>
          <div className="flex items-start">
            <i className="mr-3 text-orange-500"><FaCheck /></i>
            <h5 className="text-white">Lorem ipsum dolor sit amet</h5>
          </div>
        </div>
      </div>

      {/* Right Booking Form */}
      <div className="w-full lg:w-1/2 bg-black bg-opacity-60 p-6 rounded-lg">
        <h1 className="text-white mb-6 text-center text-2xl md:text-3xl font-bold">Book Your Table</h1>

        <div className="space-y-3">
          <input type="text" className="w-full bg-transparent border border-amber-700 p-3 text-white placeholder-white" placeholder="Name" required />
          <input type="text" className="w-full bg-transparent border border-amber-700 p-3 text-white placeholder-white" placeholder="Email" required />
          <input type="text" className="w-full bg-transparent border border-amber-700 p-3 text-white placeholder-white" placeholder="Date" required />
          <input type="text" className="w-full bg-transparent border border-amber-700 p-3 text-white placeholder-white" placeholder="Time" required />
          <input type="text" className="w-full bg-transparent border border-amber-700 p-3 text-white placeholder-white" placeholder="Person" required />
        </div>

        <div className="mt-6 bg-amber-600 p-4 text-center rounded-md hover:bg-amber-700 transition">
          <button className="text-white text-xl font-semibold">Book Now</button>
        </div>
      </div>

    </div>
  </div>
</div>


        </div>
    )
}

export default Price