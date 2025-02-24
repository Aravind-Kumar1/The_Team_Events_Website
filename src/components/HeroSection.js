import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image


export default function HeroSection() {
  const router = useRouter();

  const heroImages = [
    { src: "/images/bir.jpg", alt: "Birthday Event", delay: "0.2s" },
    { src: "/images/ma.jpg", alt: "Marriage Event", delay: "0.4s" },
    { src: "/images/hou.jpg", alt: "House Party", delay: "0.6s" },
    { src: "/images/ch.jpg", alt: "Corporate Event", delay: "0.8s" }
  ];

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
          </div>
        </div>

        {/* Optimized Hero Images */}
        <div className="hero-images">
          {heroImages.map((image, index) => (
            <div className="hero-image" key={index} style={{ animationDelay: image.delay }}>
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={300} 
                height={200} 
                className="event-image"
                priority={index === 0} //  Only first image gets priority
                loading={index === 0 ? "eager" : "lazy"} //  Others lazy load
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
