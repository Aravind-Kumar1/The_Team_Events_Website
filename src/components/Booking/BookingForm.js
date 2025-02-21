import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { useUser } from "@clerk/clerk-react";
import "../../styles/booking.css";
import "../../styles/global.css";
import {
  FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaUsers, FaComment,
  FaMapMarkerAlt, FaBuilding, FaClock
} from "react-icons/fa";
import Card from "../../components/ui/Card";

export default function BookingForm() {
  const { isSignedIn } = useUser();

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", eventType: "",
    eventDate: "", eventTime: "", guests: "",
    companyName: "", venue: "", message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignedIn) {
      toast.error("Please log in to submit the booking!");
      return;
    }

    const requiredFields = ["name", "email", "phone", "eventType", "eventDate", "eventTime", "guests", "venue"];
    for (let field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Please fill in the ${field.replace(/([A-Z])/g, " $1").toLowerCase()} field.`);
        return;
      }
    }

    emailjs.send(
      "service_a7wqa7q", "template_i26yacp",
      {
        from_name: formData.name, from_email: formData.email,
        phone: formData.phone, event_type: formData.eventType,
        event_date: formData.eventDate, event_time: formData.eventTime,
        guests: formData.guests, company_name: formData.companyName || "N/A",
        venue: formData.venue, message: formData.message || "None",
      },
      "MikydQenH8f_SH65S"
    ).then(() => {
      toast.success("Booking request submitted successfully!");
      setFormData({
        name: "", email: "", phone: "", eventType: "",
        eventDate: "", eventTime: "", guests: "",
        companyName: "", venue: "", message: "",
      });
    }).catch(() => {
      toast.error("Failed to send booking request. Please try again.");
    });
  };

  return (
    <Card>
      <div className="booking-container">
        <h2 className="booking-title">Book Your Event</h2>
        <p className="booking-subtitle">Fill in the details below and we'll handle the rest!</p>

        {!isSignedIn ? (
          <div className="login-warning-container">
            <div className="login-warning">
              <span className="warning-icon">⚠️</span>
              <div className="warning-text">
                <h3>Please Log In to Continue</h3>
                <p>
                  Booking an event requires an account.{" "}
                  <a href="/login">Log in</a> now or <a href="/signup">sign up</a> to get started!
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-columns">
              {/* Column 1 */}
              <div className="form-column">
                <div className="form-group">
                  <label><FaUser /> Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                  <label><FaEnvelope /> Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label><FaPhone /> Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                  <label><FaUsers /> Event Type</label>
                  <select name="eventType" value={formData.eventType} onChange={handleChange} required>
                    <option value="">Select Event Type</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="House Party">House Party</option>
                  </select>
                </div>
                <div className="form-group">
                  <label><FaBuilding /> Company Name</label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Enter company name (if any)" />
                </div>
              </div>

              {/* Column 2 */}
              <div className="form-column">
                <div className="form-group">
                  <label><FaCalendarAlt /> Event Date</label>
                  <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label><FaClock /> Event Time</label>
                  <input type="time" name="eventTime" value={formData.eventTime} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label><FaUsers /> No. of Guests</label>
                  <input type="number" name="guests" value={formData.guests} onChange={handleChange} placeholder="Enter number of guests" required />
                </div>
                <div className="form-group">
                  <label><FaMapMarkerAlt /> Venue</label>
                  <input type="text" name="venue" value={formData.venue} onChange={handleChange} placeholder="Enter venue address" required />
                </div>
                <div className="form-group">
                  <label><FaComment /> Additional Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter any additional details"></textarea>
                </div>
              </div>
            </div>
            
            <button type="submit" className="submit-button">
              Submit Booking
            </button>
          </form>
        )}

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Card>
  );
}
