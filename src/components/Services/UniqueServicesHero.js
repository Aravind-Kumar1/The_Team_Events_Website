import { useEffect, useState, useRef } from "react";
import "../../styles/Services/uniqueHeroSection.css";

export default function UniqueServicesHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null); // Reference for video

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 200);

    // Set the video playback speed when the component loads
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // Set speed (0.5 = half speed, 1 = normal, 2 = double speed)
    }
  }, []);

  return (
    <section className={`unique-hero-section ${isLoaded ? "fade-in-effect" : ""}`}>
      {/* Background Video */}
      <div className="unique-video-wrapper">
        <video 
          ref={videoRef} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="unique-hero-video"
        >
          <source src="/images/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="unique-hero-content">
        <h1 className="unique-hero-title">
          Elevate Your Event with <span>Premium Services</span>
        </h1>
        <p className="unique-hero-subtitle">
          We bring your vision to life with expert planning, stunning decor, and top-tier services.
        </p>

        {/* CTA Buttons */}
        <div className="unique-hero-buttons">
          <a href="#services" className="btn btn-primary-s-h">Explore Services</a>
          <a href="#contact" className="btn btn-secondary">Get a Free Quote</a>
        </div>
      </div>
    </section>
  );
}
