import React from 'react'
import '../custom.css'


function Navbar() {
  return (
  

      <div className="contanier">
        <div className="Navbar">

          <div className="logo">
            <h1>Create
              <span>.</span></h1>
          </div>
          <ul className="list">
            <li className="list2">
              <li><a href="#Home">Home</a> </li>
              <li><a href="#Worke">Work</a></li>
              <li><a href="#Services">Services</a></li>
              <li><a href="#Blog">Blog</a></li>
              <li><a href="#Contact">Contact us</a></li>

            </li>
          </ul>


        </div>


      </div>

   
  )
}

export default Navbar


