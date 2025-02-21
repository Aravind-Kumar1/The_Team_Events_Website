import "../../styles/About/abouthero.css"; 
import "../../styles/global.css"; 

export default function AboutHero() {
  return (
    <section className="about-hero-section">
      <div className="about-hero-container">
        <div className="about-hero-text">
          <h1>About Us</h1>
          <p className="about-hero-tagline">
            Bringing Dreams to Life with Passion and Creativity
          </p>
          <p className="about-hero-description">
            We specialize in crafting unforgettable moments by providing unique and tailored event services. Whether it's a birthday, wedding, corporate event, or any celebration, we are dedicated to delivering excellence in every detail. Let's make your next event extraordinary!
          </p>
          <a href="#contact" className="about-cta-button">
            Get in Touch
          </a>
        </div>
        <div className="about-hero-image">
          <img src="/images/deco.jpg" alt="Event Services" />
        </div>
      </div>
    </section>
  );
}
