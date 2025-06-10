import React from 'react'

function Client() {
  return (
    <div>
      <div className="client py-5 px-3">
        <div className=" mx-5 px-3">
          <div className="pt-24 pb-5">
            <h4 className="text-center text-orange-400 text-3xl">T&nbsp;e&nbsp;s&nbsp;t&nbsp;i&nbsp;m&nbsp;o&nbsp;n&nbsp;i&nbsp;a&nbsp;l&nbsp;</h4>
            <h1 class="text-center text-7xl">Our Clients Say</h1>
          </div>

          <div className="person flex">
            <div className="item1 flex flex-wrap">
              <img className='w-[80px] h-[80px] ' src={require('./img/person.jpg')} alt="" />
              <div className="heading ml-3">

                <h4>Client Name</h4>
                <i>Profession</i>

              </div>
              <p class="m-0 font-montserrat">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
            </div>
         
          
            <div className="item1 flex flex-wrap">
              <img className='w-[80px] h-[80px] ' src={require('./img/person2.jpg')} alt="" />
              <div className="heading ml-3">

                <h4>Client Name</h4>
                <i>Profession</i>

              </div>
              <p class="m-0 font-montserrat">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
            </div>

         
         
            <div className="item1 flex flex-wrap">
              <img className='w-[80px] h-[80px] ' src={require('./img/person3.jpg')} alt="" />
              <div className="heading ml-3">

                <h4>Client Name</h4>
                <i>Profession</i>

              </div>
              <p class="m-0 font-montserrat">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
           
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Client