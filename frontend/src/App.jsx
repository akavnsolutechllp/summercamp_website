import React from 'react'
import Lenis from 'lenis'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Payment from './pages/Payment';
import Programs from './pages/Programs';
import Registration from './pages/Registration';
import Liability from './pages/Liability';
import About from './pages/AboutUs';
import AboutUs2 from './pages/AboutUs2';


const App = () => {
  // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUs2/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/programs' element={<Programs/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/liability' element={<Liability/>} />
      </Routes>
    </Router>
  )
}

export default App;