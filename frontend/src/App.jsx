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
import Success from './pages/SuccessPayment';
import SuccessPayment from './pages/SuccessPayment';
import PageNotFound from './pages/PageNotFound';


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
        <Route path='/success-payment' element={<SuccessPayment/>} />
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
    </Router>
  )
}

export default App;