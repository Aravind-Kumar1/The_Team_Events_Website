import Link from "next/link";
import Image from "next/image";
import "../../styles/About/abouthero.css";


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
          <Link href="/#contact" scroll={false}>
            <button className="about-cta-button">Get in Touch</button>
          </Link>
        </div>
        <div className="about-hero-image">
        <Image 
  src="/images/team.jpg" 
  alt="Event Services" 
  width={500} 
  height={300} 
  priority // Loads this image faster 
/>
        </div>
      </div>
    </section>
  );
}
