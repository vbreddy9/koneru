import { useEffect, useState } from "react";
import { FaTooth, FaRegSmile, FaClinicMedical, FaUserMd, FaHandsHelping, FaPhoneAlt, FaCalendarCheck, FaClock } from "react-icons/fa";
import slider1 from "./assets/em-d.webp";
import slider2 from "./assets/free-in.webp";
import slider3 from "./assets/ns.webp";

const sliderImages = [slider1, slider2, slider3];

const WhyChooseUsWithCTA = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  const reasons = [
    { icon: FaTooth, text: "Comprehensive dental check-ups & cleanings" },
    { icon: FaClinicMedical, text: "State-of-the-art dental technology" },
    { icon: FaHandsHelping, text: "Personalized treatment plans for every patient" },
    { icon: FaPhoneAlt, text: "Emergency dental services available 24/7" },
    { icon: FaRegSmile, text: "Expert cosmetic dentistry for a brighter smile" },
    { icon: FaUserMd, text: "Experienced and caring dental professionals" },
    { icon: FaClock, text: "Flexible scheduling, including weekends" },
    { icon: FaCalendarCheck, text: "Easy online appointment booking" },
  ];

  return (
    <div className="registration-grid">
      <div className="choose-us-section">
        <h3 className="section-heading">Why Choose Us?</h3>
        <ul className="choose-us-list">
          {reasons.map((item, i) => (
            <li key={i} className="choose-us-item">
              <item.icon className="choose-us-icon" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="why-right">
        <img src={sliderImages[currentSlide]} alt={`slide-${currentSlide}`} className="slider-image" />
      </div>
    </div>
  );
};

export default WhyChooseUsWithCTA;
