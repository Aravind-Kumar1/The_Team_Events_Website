import { useRouter } from "next/router";
import Link from "next/link"; // Import Link from Next.js
import "../styles/herosection.css"; // Importing custom CSS

export default function HeroSection() {
  const router = useRouter(); // Initialize router

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="main-heading">
            <span className="bold">ONE</span> STOP <span className="light">SOLUTION</span>
            <br />
            <span className="light">FOR</span> <span className="highlight">EVENT DISCOVERY</span>
          </h1>
          <p className="tagline">Your Perfect Event Awaits!</p>
          <p className="sub-tagline">Discover, Plan, and Celebrate – It's That Easy!</p>
          
          <div className="hero-buttons">
            {/* Button to navigate to the Booking page */}
            <Link href="/booking" className="book-event-btn">
              Book Your Event
            </Link>

            {/* Learn More Button */}
            <button className="learn-more-btn">Learn More</button>

            {/* Link to the About page with active class */}
           
          </div>
        </div>

        <div className="hero-images">
          <div className="hero-image" style={{ animationDelay: "0.2s" }}>
            <img src="/images/bir.jpg" alt="Event 1" />
          </div>
          <div className="hero-image" style={{ animationDelay: "0.4s" }}>
            <img src="/images/ma.jpg" alt="Event 2" />
          </div>
          <div className="hero-image" style={{ animationDelay: "0.6s" }}>
            <img src="/images/hou.jpg" alt="Event 3" />
          </div>
          <div className="hero-image" style={{ animationDelay: "0.8s" }}>
            <img src="/images/ch.jpg" alt="Event 4" />
          </div>
        </div>
      </div>
    </div>
  );
}
