import React from "react";
import { motion } from "framer-motion";
import "../../styles/Services/services.css";

export default function Services() {
  const services = [
    {
      title: "Anchors",
      description: "Professional event hosts to keep your event lively and engaging.",
      image: "/images/deco.jpg",
    },
    {
      title: "Decorations",
      description: "Elegant and customized decorations to suit your event theme.",
      image: "/images/deco.jpg",
    },
    {
      title: "Catering",
      description: "Delicious catering services with a variety of cuisines.",
      image: "/images/deco.jpg",
    },
    {
      title: "Comedians",
      description: "Top comedians to bring fun and laughter to your event.",
      image: "/images/deco.jpg",
    },
    {
      title: "Photography",
      description: "High-quality photography and videography to capture moments.",
      image: "/images/deco.jpg",
    },
    {
      title: "Music Bands",
      description: "Live music bands to set the perfect vibe for your event.",
      image: "/images/deco.jpg",
    },
    {
      title: "DJ Services",
      description: "Professional DJs to keep your guests dancing all night.",
      image: "/images/deco.jpg",
    },
    {
      title: "Lighting & Sound",
      description: "State-of-the-art lighting and sound setup for your event.",
      image: "/images/deco.jpg",
    },
    {
        title: "Lighting & Sound",
        description: "State-of-the-art lighting and sound setup for your event.",
        image: "/images/deco.jpg",
      },
      {
        title: "Lighting & Sound",
        description: "State-of-the-art lighting and sound setup for your event.",
        image: "/images/deco.jpg",
      },
      
  ];

  return (
    <section className="event-services">
      <h2 className="event-services-title-ser">All Services</h2>
      <div className="event-services-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="event-service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={service.image} alt={service.title} className="event-service-image" />
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
