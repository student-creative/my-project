import React from 'react'
import '../About.css'

function About() {
  return (
    <div>

      <div className="site-section" id="about-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-5 ml-auto mb-5 order-md-2 aos-init aos-animate" data-aos="fade">
              <img src="setup.png" alt width={500} />
            </div>
            <div className="col-md-6 order-md-1 aos-init aos-animate" data-aos="fade">
              <div className="row">
                <div className="col-12">
                  <div className="text-left pb-1">
                    <h2 className="text-black h1 site-section-heading">About Us</h2>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt magnam corrupti, odit eos harum quaerat nostrum voluptatibus aspernatur eligendi accusantium cum, impedit blanditiis voluptate commodi doloribus, nemo dignissimos recusandae.</p>
                </div>
                <div className="col-md-12 mb-md-5 mb-0 col-lg-6">
                  <div className="unit-4">
                    <div className="unit-4-icon mr-4 mb-3"><span className="text-secondary icon-phonelink" /></div>
                    <div>
                      <h3>Web &amp; Mobile Specialties</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</p>
                      <p className="mb-0"><a href="#">Learn More</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-md-5 mb-0 col-lg-6">
                  <div className="unit-4">
                    <div className="unit-4-icon mr-4 mb-3"><span className="text-secondary icon-extension" /></div>
                    <div>
                      <h3>Intuitive Thinkers</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.</p>
                      <p className="mb-0"><a href="#">Learn More</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default About
