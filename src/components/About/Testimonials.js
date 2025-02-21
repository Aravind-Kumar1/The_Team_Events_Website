const testimonials = [
    { name: "Alice", text: "Best event organizers ever!" },
    { name: "Mark", text: "They made our event truly special!" },
  ];
  
  export default function Testimonials() {
    return (
      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((review, index) => (
              <div key={index} className="testimonial-card">
                <p>"{review.text}"</p>
                <h4>- {review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  