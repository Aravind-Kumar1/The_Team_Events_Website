import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/global.css";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 🔹 Left Section - Logo & About */}
        <div className="footer-about">
          <h2 className="footer-logo">The-Teams-Events</h2>
          <p className="footer-text">
            Elevating experiences with top-notch services. Stay connected and experience excellence!
          </p>
        </div>

        {/* 🔹 Center Section - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#featured">Featured Services</a></li>
            <li><a href="#event">Event Packages</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* 🔹 Right Section - Contact Details */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt className="footer-icon" /> 1234, Luxury Street, New York, USA</p>
          <p><FaPhoneAlt className="footer-icon" /> +1 234 567 890</p>
          <p><FaEnvelope className="footer-icon" /> contact@yourbrand.com</p>
          <div className="social-icons">
            <a href="#" className="social-link facebook"><FaFacebookF /></a>
            <a href="#" className="social-link twitter"><FaTwitter /></a>
            <a href="#" className="social-link instagram"><FaInstagram /></a>
            <a href="#" className="social-link linkedin"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Section - Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} The-Team-Events. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
