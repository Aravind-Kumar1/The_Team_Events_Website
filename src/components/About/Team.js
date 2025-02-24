import Image from "next/image"; 



const teamMembers = [
  { name: "Shiva Kumar", role: "Founder & CEO", img: "/images/lead.jpg" },
  { name: "Jane Smith", role: "Event Manager", img: "/images/lead.jpg" },
  { name: "Michael Johnson", role: "Creative Director", img: "/images/lead.jpg" },
  { name: "Emily Brown", role: "Marketing Head", img: "/images/lead.jpg" },
  { name: "David Wilson", role: "Operations Manager", img: "/images/lead.jpg" },
  { name: "Sophia Martinez", role: "Client Relations", img: "/images/lead.jpg" },
  { name: "David Wilson", role: "Operations Manager", img: "/images/lead.jpg" },
  { name: "Sophia Martinez", role: "Client Relations", img: "/images/lead.jpg" },
];

export default function Team() {
  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-heading">Meet Our Visionary Team</h2>
        <p className="team-tagline">
          Crafting <strong>Unforgettable Experiences</strong> with Passion & Expertise.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-img-wrapper">
                {/* ✅ Uses Next.js <Image> for optimization */}
                <Image 
                  src={member.img} 
                  alt={`Photo of ${member.name}, ${member.role}`} 
                  width={200} 
                  height={200} 
                  className="team-img"
                  loading="lazy" // Lazy loads images
                />
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
