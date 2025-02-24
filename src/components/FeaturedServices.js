import { Calendar, Mic, UtensilsCrossed, PartyPopper, Users, Briefcase } from "lucide-react";


export default function FeaturedServices() {
  const services = [
    { icon: <Calendar size={36} />, title: "Event Planning", desc: "End-to-end event management & seamless execution." },
    { icon: <Mic size={36} />, title: "Anchoring", desc: "Engaging & professional hosts for every occasion." },
    { icon: <UtensilsCrossed size={36} />, title: "Catering", desc: "Delicious cuisines tailored to your event needs." },
    { icon: <PartyPopper size={36} />, title: "Decorations", desc: "Stunning themes & decor to set the mood." },
    { icon: <Users size={36} />, title: "Wedding Management", desc: "Complete wedding solutions from start to finish." },
    { icon: <Briefcase size={36} />, title: "Corporate Events", desc: "Professional event execution for businesses." }
  ];

  return (
    <section id="featured" className="featured-section">
      <div className="section-heading">
        <h2 className="section-title-fea">✨ Our Featured Services ✨</h2>
        <p className="section-subtitle-fea">Explore our top-notch services to make your event unforgettable!</p>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
