import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import Next.js router



const slides = [
  {
    image: "/images/we.jpg",
    title: "Explore Weddings",
    description:
      "Discover stunning wedding setups, from intimate ceremonies to grand celebrations.",
    ctaText: "Book Your Wedding",
    link: "/booking",
  },
  {
    image: "/images/orpo.jpg",
    title: "Corporate Events",
    description: "Plan your next corporate event with ease. Let us handle the details.",
    ctaText: "See Corporate Packages",
    link: "/booking",
  },
  {
    image: "/images/birt.jpg",
    title: "Birthday Parties",
    description:
      "Celebrate your special day with personalized decorations and entertainment.",
    ctaText: "Plan Your Party",
    link: "/booking",
  },
  {
    image: "/images/rich.jpg",
    title: "Festive Celebrations",
    description: "Bring festive joy with decorations, catering, and more for any celebration.",
    ctaText: "Explore Festive Options",
    link: "/booking",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter(); // Initialize Next.js router

  // Function to change slides automatically
  const changeSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Use setInterval to auto-change slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(changeSlide, 5000);
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const { image, title, description, ctaText, link } = slides[currentSlide];

  // Function to handle button click navigation
  const handleNavigation = () => {
    router.push(link); // Navigate to the specified link
  };

  return (
    <section className="gallery-hero-section">
      <div className="gallery-carousel">
        <div className="gallery-carousel-slide">
          <img src={image} alt={title} className="gallery-carousel-image" />
        </div>
      </div>
      <div className="gallery-hero-overlay">
        <h1 className="gallery-hero-title">{title}</h1>
        <p className="gallery-hero-description">{description}</p>
        <button onClick={handleNavigation} className="gallery-cta-button">
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
