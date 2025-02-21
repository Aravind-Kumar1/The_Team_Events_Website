import "../../styles/About/missionvision.css";
import "../../styles/global.css";

export default function MissionVision() {
  return (
    <section className="mission-vision-section">
      {/* Section Heading */}
      <h2 className="mission-vision-heading">Our Essence & Aspirations</h2>
      <p className="mission-vision-tagline">Shaping unforgettable moments with passion & creativity.</p>

      <div className="mission-vision-container">
        {/* Left Side - Image */}
        <div className="mission-vision-image">
          <img src="/images/deco.jpg" alt="Mission & Vision" />
        </div>

        {/* Right Side - Text Content */}
        <div className="mission-vision-text">
          <div className="mission-vision-content">
            <div className="mission-item">
              <h3>Our Mission</h3>
              <p>
                Our mission is to craft unforgettable experiences by offering
                personalized event services that exceed client expectations and
                leave lasting memories.
              </p>
            </div>
            <div className="vision-item">
              <h3>Our Vision</h3>
              <p>
                Our vision is to become the leading event management company,
                recognized for our passion, creativity, and exceptional service,
                transforming every event into a masterpiece.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
