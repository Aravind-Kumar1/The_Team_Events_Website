import { ShieldCheck, Clock, DollarSign, Users } from "lucide-react";
import "../../styles/Services/whychooseus.css";

export default function WhyChooseUs() {
  const benefits = [
    { icon: <Clock size={40} />, title: "Save Time & Hassle-Free", desc: "Let us handle everything while you enjoy your event." },
    { icon: <DollarSign size={40} />, title: "Affordable & Customizable", desc: "Tailor packages to fit your budget & needs." },
    { icon: <ShieldCheck size={40} />, title: "Trusted & Reliable", desc: "Served 100+ happy clients with top-tier service." },
    { icon: <Users size={40} />, title: "Professional Team", desc: "Expert planners & organizers ensure perfection." }
  ];

  return (
    <section className="why-choose-section">
      <h2 className="section-title-cho">Why We're the Best Choice for Your Event?</h2>
      <p className="tagline">Making Every Event Unforgettable with Seamless Planning & Execution!</p>
      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div key={index} className="benefit-card">
            <div className="icon-wrapper">{item.icon}</div>
            <h3 className="benefit-title">{item.title}</h3>
            <p className="benefit-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
