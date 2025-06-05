import React from "react";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Payment from "./pages/Payment";
import Programs from "./pages/Programs";
import Registration from "./pages/Registration";
import Liability from "./pages/Liability";
import About from "./pages/AboutUs";
import AboutUs2 from "./pages/AboutUs2";
import Success from "./pages/SuccessPayment";
import SuccessPayment from "./pages/SuccessPayment";
import PageNotFound from "./pages/PageNotFound";
import FailedPayment from "./pages/FailedPayment";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AdminDashboard from "./pages/AdminDashboard";
import Gallery from "./pages/Gallery";

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
        <Route path="/" element={<Home />} />

        <Route path="/aboutus" element={<AboutUs2 />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/programs" element={<Programs />} />

        <Route path="/register" element={<Registration />} />

        <Route path="/liability" element={<Liability />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/success-payment" element={<SuccessPayment />} />

        <Route path="/failed-payment" element={<FailedPayment />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin-register" element={<AdminRegister />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

// [1:51 PM, 5/9/2025] Akavn Office: "At Shraddha Multicare Hospital, we believe in more than just healing – we believe in caring for you like no one else can. 🌟 Your well-being is our top priority! 🏥💖 #ShraddhaMulticare #CareBeyondHealing #HealthWithHeart #CompassionateCare #MedicalExcellence #HealingHands #PatientCentric #WellnessFirst #TrustedCare
// [1:51 PM, 5/9/2025] Akavn Office: Meet Dr. Shraddha – With 10 years of experience and a commitment to traditional care, your health is in expert hands at Shraddha Multicare Hospital! 🩺✨ #DrShraddha #ExperienceMatters #TraditionalCare #ShraddhaMulticare #HealthExperts #MedicalCare #PatientFirst #HealthcareProfessionals #10YearsOfCare
