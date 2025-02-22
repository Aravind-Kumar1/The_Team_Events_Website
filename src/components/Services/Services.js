import React from "react";
import Image from "next/image"; // Optimized image handling
import { motion } from "framer-motion";
import "../../styles/Services/services.css";

export default function Services() {
  const services = [
    {
      title: "Anchors",
      description: "Professional event hosts to keep your event lively and engaging.",
      image: "/images/anchor.jpg",
    },
    {
      title: "Decorations",
      description: "Elegant and customized decorations to your event theme.",
      image: "/images/o.jpg",
    },
    {
      title: "Catering",
      description: "Delicious catering services with a variety of cuisines.",
      image: "/images/cat.jpg",
    },
    {
      title: "Comedians",
      description: "Top comedians to bring fun and laughter to your event.",
      image: "/images/comedy.jpg",
    },
    {
      title: "Photography",
      description: "High-quality photography and videography to capture moments.",
      image: "/images/photo.jpg",
    },
    {
      title: "Music Bands",
      description: "Live music bands to set the perfect vibe for your event.",
      image: "/images/music.jpg",
    },
    {
      title: "DJ Services",
      description: "Professional DJs to keep your guests dancing all night.",
      image: "/images/dj.jpg",
    },
    {
      title: "Lighting & Sound",
      description: "State-of-the-art lighting and sound setup for your event.",
      image: "/images/light.jpg",
    },
    {
      title: "Stage Setup",
      description: "Professional stage setup for birthday, weddings events.",
      image: "/images/decoo.jpg",
    },
    {
      title: "Fireworks & Special",
      description: "Dazzling fireworks and effects to make your event unforgettable.",
      image: "/images/fire.jpg",
    },
  ];
  
  return (
    <section className="event-services">
      <h2 className="event-services-title-ser">✨ All Services ✨</h2>
      <div className="event-services-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="event-service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="event-service-image-wrapper">
              <Image
                src={service.image}
                alt={service.title}
                width={300} // Set width & height for optimization
                height={200}
                className="event-service-image"
                loading="lazy"
              />
            </div>
            <div className="event-service-content">
              <h3 className="event-service-name">{service.title}</h3>
              <p className="event-service-description">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
