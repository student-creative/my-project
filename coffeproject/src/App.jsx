import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Menu from './Menu';
import Contact from './Contact';
import Pages from './Pages';
import Home from './Home';
import Reservation from './Reservation';
import Testimonial from './Testimonial';
// import Subpage2 from './Subpage2';
// import Subpage3 from './Subpage3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pages" element={<Pages />} />
        
        {/* Subpages routing */}
        <Route path="/pages/Reservation" element={<Reservation />} />
        <Route path="/pages/Testimonial" element={<Testimonial />} />
   
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
