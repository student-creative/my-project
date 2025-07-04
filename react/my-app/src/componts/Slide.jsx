import React from 'react'
import '../Slide.css'

function Slide() {
  return (
    <div>
   
   <div id='Home' className="conatnier">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                        </div>
                        <div className="carousel-inner">
                            <div className="box">
                                <div className="carousel-item active">
                                    <img src="laptop.png" className="d-block w-100" alt="..." height={780} />
                                </div>
                                <div className="carousel-item">
                                    <img src="person.png" className="d-block w-100" alt="..." height={650} />
                                </div>
                                <div className="carousel-item">
                                    <img src="..." className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="home-text">
                       

                       
                            <h1 className="text-white1">We Love to Build Web Apps</h1>
                            <h3 className="text-white2">Free Web Template by <span>Colorlib</span></h3>

                        <div className="button">
                            <div className="btn-type">
                            <button className='btn'>WATCH VIDEO</button>
                            </div>
                        </div>

                    </div>

                </div>
    </div>
  )
}

export default Slide
