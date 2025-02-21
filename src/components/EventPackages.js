import "../styles/event-packages.css"; // Updated CSS file
import { FaCheckCircle, FaCamera, FaMusic, FaStar, FaCrown, FaUtensils, FaChair, FaPaintBrush, FaUserTie } from "react-icons/fa";

export default function EventPackages() {
  const packages = [
    {
      tier: "Basic",
      title: "Basic Package",
      desc: "Ideal for small gatherings with elegant, minimal décor and quality catering.",
      features: [
        { text: "Minimal decor", icon: <FaPaintBrush /> },
        { text: "Standard catering", icon: <FaUtensils /> },
        { text: "Basic seating", icon: <FaChair /> },
      ],
      image: "./images/basic.jpg",
    },
    {
      tier: "Standard",
      title: "Standard Package",
      desc: "A themed experience with professional photography and live entertainment.",
      features: [
        { text: "Themed decor", icon: <FaPaintBrush /> },
        { text: "Professional photography", icon: <FaCamera /> },
        { text: "Live entertainment", icon: <FaMusic /> },
      ],
      image: "./images/stan.jpg",
    },
    {
      tier: "Premium",
      title: "Premium Package",
      desc: "A luxury VIP experience with celebrity hosts and a five-star setup.",
      features: [
        { text: "Luxury decor", icon: <FaStar /> },
        { text: "Celebrity hosts", icon: <FaUserTie /> },
        { text: "Exclusive dining", icon: <FaCrown /> },
      ],
      image: "./images/rich.jpg",
    },
  ];

  return (
    <section id="event" className="packages-section">
      <div className="section-heading">
        <h2 className="section-title-p">✨ Our Event Packages ✨</h2>
        <p className="section-subtitle-p">
          Choose a <strong>perfectly tailored</strong> package for an unforgettable experience.
        </p>
      </div>
      <div className="packages-container">
        {packages.map((pkg, index) => (
          <div key={index} className={`package-card ${pkg.tier.toLowerCase()}`}>
            <div className="package-image">
              <img src={pkg.image} alt={pkg.title} />
            </div>
            <div className="package-content">
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-desc">{pkg.desc}</p>
              <ul className="package-features">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    {feature.icon} {feature.text}
                  </li>
                ))}
              </ul>
              <div className="cta-container">
                <button className="cta-button">Get a Custom Quote</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
