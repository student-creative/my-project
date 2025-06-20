import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from './ExampleCarouselImage1';
import ExampleCarouselImage2 from './ExampleCarouselImage2';
import ExampleCarouselImage3 from './ExampleCarouselImage3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

function Slider() {
  return (
    <div className='relative w-full md:w-full'>
    <Carousel fade className="w-full h-screen">
      <Carousel.Item>
        <ExampleCarouselImage1 text="First slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage2 text="Second slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage3 text="Third slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Navbar/>

    
    </div>

  )
}

export default Slider