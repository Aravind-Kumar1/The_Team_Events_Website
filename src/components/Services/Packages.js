import React from "react";

import "../../styles/Services/packages.css";
import Link from "next/link"; 

const packagesData = [
  {
    id: 1,
    title: "Birthday Party Package",
    description: "Includes decorations, cake, entertainment, and more!. Exotic locations, luxury, full wedding service",
    image: "/images/bi.jpg",
    price: "Starts at ₹15,000",
  
  },
  {
    id: 2,
    title: "Wedding Package",
    description: "Complete wedding setup with decorations, and more!",
    image: "/images/bi.jpg",
    price: "Custom Pricing",
   
  },
  {
    id: 3,
    title: "Corporate Event Package",
    description: "Stage setup, sound system, and event management.",
    image: "/images/bi.jpg",
    price: "Starts at ₹50,000",
    
  },
  {
    id: 4,
    title: "House Party Package",
    description: "DJ, lighting, drinks, and everything for a perfect party.",
    image: "/images/bi.jpg",
    price: "Starts at ₹20,000",
  
  },
  {
    id: 5,
    title: "Music Concert Package",
    description: "Live band, stage setup, lighting, sound management.",
    image: "/images/mus.jpg",
    price: "Custom Pricing",
   
  },
  {
    id: 6,
    title: "Destination Wedding ",
    description: "Exotic locations, luxury, full wedding service. Exotic locations, luxury, full wedding service",
    image: "/images/mus.jpg",
    price: "Custom Pricing",
   
  },
];

export default function Packages() {
  return (
    <section className="packages-section">
      <h2 className="section-title-pack">Choose Your Perfect Event Package</h2>
      <p className="section-subtitle-pack">
        Save time with our all-inclusive event packages!
      </p>
      <div className="packages-container">
        {packagesData.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.title} className="package-image" />
            <div className="package-content">
              <div className="package-icon">{pkg.icon}</div>
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-description">{pkg.description}</p>
              <p className="package-price">{pkg.price}</p>
              <Link href="/booking"> <button className="btn-primary">Book Now</button></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
