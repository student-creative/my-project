import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './componts/Navbar';
import Home from './componts/Home';
import About from './componts/About';
import Services from './componts/Services';
import Departments from './componts/Departments';
import DepartmentsSingle from './componts/DepartmentsSingle';
import Doctor from './componts/Doctor';
import Appoinment from './componts/Appoinment';
import Doctorsingle from './componts/Doctorsingle';
import Blogslidebar from './componts/Blogslidebar';
import Blogsingle from './componts/Blogsingle';
import Contact from './componts/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departmentssingle" element={<DepartmentsSingle />} />
        <Route path="/doctor" element={<Doctor />} />
         <Route path="/appoinment" element={<Appoinment />} />
            <Route path="/doctorsingle" element={<Doctorsingle />} />
             <Route path="/blogslidebar" element={<Blogslidebar />} />
               <Route path="/blogsingle" element={<Blogsingle />} />
                 <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
