import { useState, useEffect } from 'react';
import "../../styles/Gallery/hero-section.css";
import "../../styles/global.css"

const slides = [
  {
    image: '/images/bir.jpg',
    title: 'Explore Weddings',
    description: 'Discover stunning wedding setups, from intimate ceremonies to grand celebrations.',
    ctaText: 'Book Your Wedding',
    link: '/book-wedding',
  },
  {
    image: '/images/deco.jpg',
    title: 'Corporate Events',
    description: 'Plan your next corporate event with ease. Let us handle the details.',
    ctaText: 'See Corporate Packages',
    link: '/corporate-packages',
  },
  {
    image: '/images/hou.jpg',
    title: 'Birthday Parties',
    description: 'Celebrate your special day with personalized decorations and entertainment.',
    ctaText: 'Plan Your Party',
    link: '/birthday-party',
  },
  {
    image: '/images/rich.jpg',
    title: 'Festive Celebrations',
    description: 'Bring festive joy with decorations, catering, and more for any celebration.',
    ctaText: 'Explore Festive Options',
    link: '/festive-events',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
        <a href={link} className="gallery-cta-button">{ctaText}</a>
      </div>
    </section>
  );
};

export default HeroSection;
