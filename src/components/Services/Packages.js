import React from "react";
import Image from "next/image"; // Optimized image handling
import Link from "next/link";
import "../../styles/Services/packages.css";

const packagesData = [
  {
    id: 1,
    title: "Birthday Party Package",
    description: "Includes decorations, cake, entertainment, and more!",
    image: "/images/bi.jpg",
    price: "Starts at ₹15,000",
  },
  {
    id: 2,
    title: "Wedding Package",
    description: "Complete wedding decorations, catering, and more!",
    image: "/images/weds.jpg",
    price: "Custom Pricing",
  },
  {
    id: 3,
    title: "Corporate Event Package",
    description: "Stage setup, sound system, and event management.",
    image: "/images/corp.jpg",
    price: "Starts at ₹50,000",
  },
  {
    id: 4,
    title: "House Party Package",
    description: "DJ, lighting, drinks, and everything for a perfect party.",
    image: "/images/house.jpg",
    price: "Starts at ₹20,000",
  },
  {
    id: 5,
    title: "Music Concert Package",
    description: "Live band, stage setup, lighting, sound management.",
    image: "/images/_con.jpg",
    price: "Custom Pricing",
  },
  {
    id: 6,
    title: "Destination Wedding",
    description: "Exotic locations, luxury, and full wedding service.",
    image: "/images/des.jpg",
    price: "Custom Pricing",
  },
];

export default function Packages() {
  return (
    <section className="packages-section">
      <h2 className="section-title-pack">✨ Choose Your Perfect Event Package ✨</h2>
      <p className="section-subtitle-pack">
        Save time with our all-inclusive event packages!
      </p>
      <div className="packages-container">
        {packagesData.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <div className="package-image-wrapper">
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={400} // Optimized size
                height={250}
                className="package-image"
                loading="lazy"
              />
            </div>
            <div className="package-content">
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-description">{pkg.description}</p>
              <p className="package-price">{pkg.price}</p>
              <Link href="/booking">
                <button className="btn-primary">Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
