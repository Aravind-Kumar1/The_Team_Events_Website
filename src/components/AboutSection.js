import "../styles/aboutsec.css"; // Importing custom CSS
export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-heading">
        <h2 className="section-title-a">✨ About Us ✨</h2>
        <p className="section-subtitle-a">Creating memorable experiences with passion and precision.</p>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src="/images/discu.jpg" alt="Event" className="about-img" />
        </div>
        <div className="about-text">
          <div className="text-card">
            <p className="about-description">
              We are passionate about creating unforgettable experiences for our clients. From weddings to corporate events, our team is dedicated to providing exceptional services tailored to your needs. Let us help you make your event truly memorable.
            </p>
            <div className="about-buttons">
              <a href="#contact" className="about-btn">Contact Us</a>
              <a href="/about" className="meet-team-btn">Meet Our Team</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
