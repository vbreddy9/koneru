import { FaTooth, FaRegSmile, FaClinicMedical, FaUserMd, FaHandsHelping, FaPhoneAlt, FaCalendarCheck, FaClock } from "react-icons/fa";
import slider1 from "./assets/slider1.jpg";
import slider2 from "./assets/slider2.jpg";
import slider3 from "./assets/slider3.jpg";

const WhyChooseUsWithCTA = () => {
  const reasons = [
    { icon: FaTooth, text: "Comprehensive dental check-ups & cleanings" },
    { icon: FaRegSmile, text: "Expert cosmetic dentistry for a brighter smile" },
    { icon: FaClinicMedical, text: "State-of-the-art dental technology" },
    { icon: FaUserMd, text: "Experienced and caring dental professionals" },
    { icon: FaHandsHelping, text: "Personalized treatment plans for every patient" },
    { icon: FaClock, text: "Flexible scheduling, including weekends" },
    { icon: FaPhoneAlt, text: "Emergency dental services available 24/7" },
    { icon: FaCalendarCheck, text: "Easy online appointment booking" },
  ];

  return (
    <div className="why-cta-wrapper">
      <div className="why-choose-us">
        <h3 className="section-heading">Why Choose Us?</h3>
        <ul className="choose-us-list">
          {reasons.map((item, index) => (
            <li key={index} className="choose-us-item">
              <item.icon className="choose-us-icon" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA with Slider */}
      <div className="doctor-cta">
        <div className="cta-grid">
          <div className="cta-slider">
            <img src={slider1} alt="Clinic View 1" />
            <img src={slider2} alt="Clinic View 2" />
            <img src={slider3} alt="Clinic View 3" />
          </div>
          <div className="cta-box">
            <div className="cta-icon">📅</div>
            <h3>WE CAN’T WAIT TO SEE YOU!</h3>
            <p>
              Looking for a dentist committed to your care? Reach out to us today and schedule a visit!
            </p>
            <div className="cta-phone">📱 (919)-851-9690</div>
            <a href="tel:+19198519690" className="cta-button">
              REQUEST APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsWithCTA;
