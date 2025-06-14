    import React from 'react'
    import { FaCheck } from "react-icons/fa";
    import Navbar from './Navbar';
    import { FaTruck } from "react-icons/fa";
    import { FaCoffee } from "react-icons/fa";
    import { FaAward } from "react-icons/fa6";
    import { FaTable } from "react-icons/fa6";
    import Footer from './Footer';
    import Carousel from 'react-bootstrap/Carousel';
    import ExampleCarouselImage1 from './ExampleCarouselImage1';
    import ExampleCarouselImage2 from './ExampleCarouselImage2';
    import ExampleCarouselImage3 from './ExampleCarouselImage3';
    import 'bootstrap/dist/css/bootstrap.min.css';

    function Home() {
      return (

        <div>

          <div className="main relative w-full h-screen overflow-hidden">
      {/* Carousel Fullscreen */}
      <Carousel fade className="w-full h-full">
        <Carousel.Item>
          <ExampleCarouselImage1 />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage2 />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage3 />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Navbar />
      </div>

      {/* Centered Text */}
      <div className="absolute top-1/3 w-full z-20 flex flex-col items-center justify-center text-white px-4 text-center">
        <h2 className="capitalize text-yellow-600 text-base md:text-xl lg:text-2xl">
          We have been serving
        </h2>
        <h1 className="uppercase text-[40px] sm:text-[60px] md:text-[100px] lg:text-[170px] leading-none font-bold">
          coffe
        </h1>
        <h2 className="text-sm md:text-lg m-0">* SINCE 1950 *</h2>
      </div>
    </div>


        <div className="bg-amber-50 pt-5 px-4 sm:px-6 md:px-16">
                        <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
                            <div className="w-full pt-24 pb-5 text-center">
                                <h4 className="uppercase text-lg md:text-xl font-semibold">Our Services</h4>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold">Fresh & Organic Beans</h1>
                            </div>
        
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Service 1 */}
                                <div className="service-item flex flex-col items-center text-center">
                                    <img className='w-40 h-40 object-cover mb-4' src={require('./img/services1.jpg')} alt="Fastest Door Delivery" />
                                    <div className="text-center">
                                        <h4 className='flex items-center justify-center text-lg font-medium'>
                                            <i className='mr-3 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center'>
                                                <FaTruck />
                                            </i>
                                            Fastest Door Delivery
                                        </h4>
                                        <p className="mt-2 text-sm text-gray-700">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor.</p>
                                    </div>
                                </div>
        
                                {/* Service 2 */}
                                <div className="service-item flex flex-col items-center text-center">
                                    <img className='w-40 h-40 object-cover mb-4' src={require('./img/services2.jpg')} alt="Fresh Coffee Beans" />
                                    <div className="text-center">
                                        <h4 className='flex items-center justify-center text-lg font-medium'>
                                            <i className='mr-3 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center'>
                                                <FaCoffee />
                                            </i>
                                            Fresh Coffee Beans
                                        </h4>
                                        <p className="mt-2 text-sm text-gray-700">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor.</p>
                                    </div>
                                </div>
        
                                {/* Service 3 */}
                                <div className="service-item flex flex-col items-center text-center">
                                    <img className='w-40 h-40 object-cover mb-4' src={require('./img/services3.jpg')} alt="Best Quality Coffee" />
                                    <div className="text-center">
                                        <h4 className='flex items-center justify-center text-lg font-medium'>
                                            <i className='mr-3 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center'>
                                                <FaAward />
                                            </i>
                                            Best Quality Coffee
                                        </h4>
                                        <p className="mt-2 text-sm text-gray-700">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor.</p>
                                    </div>
                                </div>
        
                              {/* Service 4 */}
                              <div className="service-item flex flex-col items-center text-center">
                                  <img className='w-40 h-40 object-cover mb-4' src={require('./img/services3.jpg')} alt="Online Table Booking" />
                                  <div className="text-center">
                                      <h4 className='flex items-center justify-center text-lg font-medium'>
                                          <i className='mr-3 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center'>
                                              <FaTable />
                                          </i>
                                          Online Table Booking
                                      </h4>
                                      <p className="mt-2 text-sm text-gray-700">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
      
        {/* ********************************************** */}


      
          {/* ************************************************************************************************** */}
  <div className="services w-full bg-amber-50 pt-5">
    <div className="mx-20 px-4">
      <div className="text-center py-16">
        <h4 className="uppercase">Our Services</h4>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Fresh & Organic Beans
        </h1>
      </div>

      <div className="flex flex-wrap -mx-2">
        {/* Service 1 */}
        <div className="w-full sm:w-1/2 px-2 mb-6 flex">
          <img
            src={require('./img/services1.jpg')}
            alt=""
            className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 object-cover rounded-md"
          />
          <div className="pl-3 sm:pl-4 flex flex-col justify-center">
            <h4 className="flex items-center text-base sm:text-lg font-semibold mb-2">
              <span className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                <FaTruck />
              </span>
              Fastest Door Delivery
            </h4>
            <p className="text-xs sm:text-sm text-gray-700">
              Sit lorem ipsum et diam elitr est dolor sed duo...
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="w-full sm:w-1/2 px-2 mb-6 flex">
          <img
            src={require('./img/services2.jpg')}
            alt=""
            className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 object-cover rounded-md"
          />
          <div className="pl-3 sm:pl-4 flex flex-col justify-center">
            <h4 className="flex items-center text-base sm:text-lg font-semibold mb-2">
              <span className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                <FaCoffee />
              </span>
              Fresh Coffee Beans
            </h4>
            <p className="text-xs sm:text-sm text-gray-700">
              Sit lorem ipsum et diam elitr est dolor sed duo...
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="w-full sm:w-1/2 px-2 mb-6 flex">
          <img
            src={require('./img/services3.jpg')}
            alt=""
            className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 object-cover rounded-md"
          />
          <div className="pl-3 sm:pl-4 flex flex-col justify-center">
            <h4 className="flex items-center text-base sm:text-lg font-semibold mb-2">
              <span className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                <FaAward />
              </span>
              Best Quality Coffee
            </h4>
            <p className="text-xs sm:text-sm text-gray-700">
              Sit lorem ipsum et diam elitr est dolor sed duo...
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div className="w-full sm:w-1/2 px-2 mb-6 flex">
          <img
            src={require('./img/services3.jpg')}
            alt=""
            className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 object-cover rounded-md"
          />
          <div className="pl-3 sm:pl-4 flex flex-col justify-center">
            <h4 className="flex items-center text-base sm:text-lg font-semibold mb-2">
              <span className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                <FaTable />
              </span>
              Online Table Booking
            </h4>
            <p className="text-xs sm:text-sm text-gray-700">
              Sit lorem ipsum et diam elitr est dolor sed duo...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


      

        {/* ****************************** */}
      <div className="relative my-5 w-full">
    <img
      src={require('./img/back3.jpg')}
      alt="Background"
      className="w-full h-[520px] md:h-[520px] object-cover opacity-90"
    />
    <div className="absolute inset-0 bg-black opacity-60"></div>

    <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-3 drop-shadow-lg">
        50% OFF
      </h1>
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl mb-3 drop-shadow-lg">
        Sunday Special Offer
      </h2>
      <p className="text-white text-base sm:text-lg md:text-xl mb-6 max-w-4xl drop-shadow-lg">
        Only for Sunday from 1st Jan to 30th Jan 2045
      </p>

      <form className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-xl">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full sm:flex-1 px-4 py-3 rounded text-gray-900 font-montserrat"
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-amber-600 text-white px-6 py-3 rounded hover:bg-amber-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>

        {/* ****************************************************** */}


        {/* *******************price *************** */}

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
      

        {/* ******************************************************** */}
    <div className="client py-5 px-3">
    <div className="mx-5 px-3 max-w-screen-xl mx-auto">
      <div className="pt-24 pb-5">
        <h4 className="text-center text-orange-400 text-xl sm:text-2xl md:text-3xl tracking-widest mb-2">
          T&nbsp;e&nbsp;s&nbsp;t&nbsp;i&nbsp;m&nbsp;o&nbsp;n&nbsp;i&nbsp;a&nbsp;l&nbsp;
        </h4>
        <h1 className="text-center text-3xl sm:text-5xl md:text-7xl font-bold">
          Our Clients Say
        </h1>
      </div>

      <div className="person flex flex-wrap justify-center gap-8">
        
        {/* Testimonial 1 */}
        <div className="item1 flex flex-col sm:flex-row items-center sm:items-start max-w-md sm:max-w-lg lg:max-w-xl">
          <img
            className="w-20 h-20 rounded-full object-cover"
            src={require('./img/person.jpg')}
            alt="Client 1"
          />
          <div className="heading sm:ml-4 mt-3 sm:mt-0 text-center sm:text-left">
            <h4 className="font-semibold text-lg">Client Name</h4>
            <i className="text-sm text-gray-500">Profession</i>
            <p className="mt-2 font-montserrat text-sm sm:text-base text-gray-700 max-w-sm">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem.
              Dolor tempor ipsum sanct clita.
            </p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="item1 flex flex-col sm:flex-row items-center sm:items-start max-w-md sm:max-w-lg lg:max-w-xl">
          <img
            className="w-20 h-20 rounded-full object-cover"
            src={require('./img/person2.jpg')}
            alt="Client 2"
          />
          <div className="heading sm:ml-4 mt-3 sm:mt-0 text-center sm:text-left">
            <h4 className="font-semibold text-lg">Client Name</h4>
            <i className="text-sm text-gray-500">Profession</i>
            <p className="mt-2 font-montserrat text-sm sm:text-base text-gray-700 max-w-sm">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem.
              Dolor tempor ipsum sanct clita.
            </p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="item1 flex flex-col sm:flex-row items-center sm:items-start max-w-md sm:max-w-lg lg:max-w-xl">
          <img
            className="w-20 h-20 rounded-full object-cover"
            src={require('./img/person3.jpg')}
            alt="Client 3"
          />
          <div className="heading sm:ml-4 mt-3 sm:mt-0 text-center sm:text-left">
            <h4 className="font-semibold text-lg">Client Name</h4>
            <i className="text-sm text-gray-500">Profession</i>
            <p className="mt-2 font-montserrat text-sm sm:text-base text-gray-700 max-w-sm">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem.
              Dolor tempor ipsum sanct clita.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>


        <Footer />
      </div>








    )
  }

  export default Home
