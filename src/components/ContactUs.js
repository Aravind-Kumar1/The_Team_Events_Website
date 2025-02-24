
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, 
  FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp, FaTimes 
} from "react-icons/fa";
import { MdOutlineSubject, MdDirections } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser"; 
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [showSharePopup, setShowSharePopup] = useState(false);
  const formRef = useRef(null);

  // 📌 Toggle Share Popup  
  const toggleSharePopup = (event) => {
    event.stopPropagation();
    setShowSharePopup(!showSharePopup);
  };

  // 📌 Close popup when clicking outside  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        showSharePopup && 
        !event.target.closest(".share-popup") &&
        !event.target.closest(".share-btn")
      ) {
        setShowSharePopup(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [showSharePopup]);

  // 📌 Handle Form Submission with EmailJS
  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm(
      "service_a7wqa7q",  
      "template_myl3xp1", 
      formRef.current,
      "MikydQenH8f_SH65S"
    ).then(
      () => {
        toast.success("Message Sent Successfully! 🎉");
        formRef.current.reset();
      },
      () => {
        toast.error("Failed to send message. Please try again. ❌");
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <ToastContainer /> {/* ✅ Toast notifications */}
      
      <div className="contact-heading">
        <h2 className="contact-title">Let's Connect with Us</h2>
        <p className="contact-subtitle">
          Reach out and make your special event unforgettable!
        </p>
      </div>
      
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form-container">
          <h3 className="form-title">Send Us a Message</h3>
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <FaUser className="form-icon" />
              <input type="text" name="user_name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <FaEnvelope className="form-icon" />
              <input type="email" name="user_email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <FaPhoneAlt className="form-icon" />
              <input type="tel" name="user_phone" placeholder="Your Phone Number" required />
            </div>
            <div className="form-group">
              <MdOutlineSubject className="form-icon" />
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group textarea-group">
              <textarea name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-button-c">Send Message</button>
          </form>
        </div>
        
        {/* Contact Details */}
        <div className="contact-details">
          <h3 className="details-title">Contact Information</h3>
          <p className="details-item">
            <FaMapMarkerAlt className="details-icon" /> 
            ELITE Event Management, 456 Grand Avenue.
          </p>
          <p className="details-item">
            <FaPhoneAlt className="details-icon" /> 
            Customer Support: +1 (800) 123-4567
          </p>
          <p className="details-item">
            <FaPhoneAlt className="details-icon" /> 
            Business Inquiries: +1 (800) 765-4321
          </p>
          <p className="details-item">
            <FaEnvelope className="details-icon" /> 
            support@eliteevents.com
          </p>
          <p className="details-item">
            <FaEnvelope className="details-icon" /> 
            business@eliteevents.com
          </p>

          {/* Buttons for Directions & Share */}
          <div className="contact-buttons">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=456+Grand+Avenue,+New+York,+USA"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn directions-btn"
            >
              <MdDirections className="btn-icon" /> Get Directions
            </a>

            <button className="contact-btn share-btn" onClick={toggleSharePopup}>
              <IoShareSocial className="btn-icon" /> Share
            </button>
          </div>

          {/* Social Media Handles */}
          <div className="social-media">
            <h3 className="social-title">Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" className="social-link">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" className="social-link">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" className="social-link">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Share Popup */}
      {showSharePopup && (
        <div className="share-popup" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={toggleSharePopup}>
            <FaTimes />
          </button>
          <h3>Share This Page</h3>
          <div className="share-options">
            <a href={`mailto:?subject=Check this out&body=Visit: ${window.location.href}`} target="_blank">
              <FaEnvelope className="share-icon email" />
            </a>
            <a href={`https://wa.me/?text=Check this out: ${window.location.href}`} target="_blank">
              <FaWhatsapp className="share-icon whatsapp" />
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank">
              <FaFacebookF className="share-icon facebook" />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=Check this out!`} target="_blank">
              <FaTwitter className="share-icon twitter" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
