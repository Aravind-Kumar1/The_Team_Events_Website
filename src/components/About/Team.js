import "../../styles/About/team.css";
import "../../styles/global.css";

const teamMembers = [
  { name: "John Doe", role: "Founder & CEO", img: "/images/HeroImage.png" },
  { name: "Jane Smith", role: "Event Manager", img: "/images/HeroImage.png" },
  { name: "Michael Johnson", role: "Creative Director", img:"/images/HeroImage.png" },
  { name: "Emily Brown", role: "Marketing Head", img: "/images/HeroImage.png" },
  { name: "David Wilson", role: "Operations Manager", img: "/images/HeroImage.png" },
  { name: "Sophia Martinez", role: "Client Relations", img: "/images/HeroImage.png" },
  { name: "David Wilson", role: "Operations Manager", img: "/images/HeroImage.png" },
  { name: "Sophia Martinez", role: "Client Relations", img: "/images/HeroImage.png" },
];

export default function Team() {
  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-heading">Meet Our Visionary Team</h2>
        <p className="team-tagline">
          Crafting **Unforgettable Experiences** with Passion & Expertise.  
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-img-wrapper">
                <img src={member.img} alt={member.name} className="team-img" />
              </div>
              <div className="team-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
