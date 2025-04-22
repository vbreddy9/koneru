import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import ContactDetails from './ContactDetails';
import WhyChooseUsWithCTA from './WhyChooseUsWithCTA.jsx';
import ReviewCard from './ReviewCard.jsx';
import DentalFeatures from './DentalFeatures.jsx';
import WorryFreeSection from './WorryFreeSection.jsx';
import DoctorProfile from './DoctorProfile.jsx';
import DentalFAQ from './DentalFAQ.jsx';

const HomePage = () => (
  <>
    <Navbar />
    <HeroSection />
    <WhyChooseUsWithCTA />
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
