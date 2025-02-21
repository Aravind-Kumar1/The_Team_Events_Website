import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/testimonial.css"; // Custom CSS
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// TestimonialSection Component
export default function TestimonialSection() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Event Organizer",
      image: "/images/bir.jpg",
      text: "Absolutely amazing experience! 🎉 The team handled everything professionally, making our event truly special. Highly recommended!",
    },
    {
      name: "Sarah Smith",
      role: "Wedding Planner",
      image: "/images/bir.jpg",
      text: "From planning to execution, everything was seamless! The decorations and catering were top-notch. Thank you for making our wedding unforgettable!",
    },
    {
      name: "Michael Lee",
      role: "Corporate Manager",
      image: "/images/bir.jpg",
      text: "A flawless corporate event! The team ensured everything ran smoothly, and our guests were impressed. Looking forward to our next collaboration!",
    },
  ];

  return (
    <section id="testimonial" className="testimonial-section">
      {/* Section Heading & Tagline */}
      <h2 className="section-title-test">✨ What Our Clients Say ✨</h2>
      <p className="section-subtitle-test">
        See what our clients say about our event planning services.
      </p>

      {/* Swiper for Testimonials */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              {/* Image on the Left */}
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
              
              {/* Content on the Right */}
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <span className="testimonial-role">{testimonial.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
