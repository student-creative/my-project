import React from 'react'
import '../Work.css'

function Work() {
    return (
        <div>
            <div id='Worke' className="work">

                <div className="Work-test">
                    <h1>Our Work</h1>
                    <p1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, itaque neque, </p1>
                    <p>delectus odio iure explicabo.</p>
                </div>

                <div className="main-img1">
                    <div className="main-img2">
                        <div className="img"><img src="img1.png" alt="" width={400} /></div>
                        <div className="img"><img src="img2.png" alt="" width={400} /></div>
                        <div className="img"><img src="img3.png" alt="" width={400} /></div>
                        <div className="img"><img src="img4.png" alt="" width={400} /></div>
                        <div className="img"><img src="img5.png" alt="" width={400} /></div>
                        <div className="img"><img src="img6.png" alt="" width={400} /></div>
                    </div>
                </div>
            </div>




            <div className="main-row col-12 bg-black w-100 ft-feature-1-content">
                <div className="row align-items-center">
                    <div className="img col-lg-5">
                        <img src="setup.png" alt="Image" className="img-fluid mb-4 mb-lg-0" width={400} />
                    </div>
                    <div className=" star col-lg-3 ml-auto">
                        <div className=" mb-5">
                            <h3 className="d-flex align-items-center"><span className="icon icon-beach_access mr-2" /><span>Strategy</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                            <p><a href="#">Read More</a></p>
                        </div>
                        <div>
                            <h3 className=" d-flex align-items-center"><span className="icon icon-build mr-2" /><span>Web Development</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                            <p><a href="#">Read More</a></p>
                        </div>
                    </div>
                    <div className="star col-lg-3">
                        <div className="star mb-5">
                            <h3 className=" d-flex align-items-center"><span className="icon icon-format_paint mr-2" /><span>Art Direction</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                            <p><a href="#">Read More</a></p>
                        </div>
                        <div>
                            <h3 className="  d-flex align-items-center"><span className="icon icon-question_answer mr-2" /><span>Copywriting</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                            <p><a href="#">Read More</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>




    )
}

export default Work
