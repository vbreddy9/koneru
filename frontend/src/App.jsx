import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import HeroSection from './HeroSection.jsx';
import Footer from './Footer.jsx';
import ContactDetails from './ContactDetails.jsx';
import RegistrationForm from './RegistrationForm.jsx';

import ReviewCard from './ReviewCard.jsx';
import DentalFeatures from './DentalFeatures.jsx';
import WorryFreeSection from './WorryFreeSection.jsx';
import DoctorProfile from './DoctorProfile.jsx';
import DentalFAQ from './DentalFAQ.jsx';

const HomePage = () => (
  <>
    <Navbar />
    <HeroSection />
    <RegistrationForm/>
    
    <DoctorProfile />
    <DentalFeatures />
    <WorryFreeSection />
    <ReviewCard />
    <DentalFAQ />
    <ContactDetails />
    <Footer />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
