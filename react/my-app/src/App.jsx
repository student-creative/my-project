import React from 'react'
import Navbar from './componts/Navbar'
import Slide from './componts/Slide';
import Card from './componts/Card';
import Work from './componts/Work';
import Services from './componts/Services';
import About from './componts/About';
import Blog from './componts/Blog';
import Contact from './componts/Contact';
import Footer from './componts/Footer';

// import Navbar from './componts/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.




function App() {
    return (
        <div>
         
            <Navbar />
           
           <Slide />
           <div className="Card">
           <Card />
           <Card  />
           <Card />
           </div>
           <Work />
           <Services />
           <About />
           <Blog />
           <Contact />
           <Footer />
        
        </div>



    )
}

export default App
