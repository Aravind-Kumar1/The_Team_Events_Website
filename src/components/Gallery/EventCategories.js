import "../../styles/Gallery/event-categories.css";

export default function EventCategories() {
  const events = [
    { id: 1, title: 'Birthday Party', image: '/images/bir.jpg' },
    { id: 2, title: 'Wedding', image: '/images/hou.jpg' },
    { id: 3, title: 'Corporate Event', image: '/images/rich.jpg' },
    { id: 4, title: 'House Party', image: '/images/deco.jpg' },
  ];

  return (
    <section className="event-categories">
      <h2 className="event-head">Our Special Events</h2>
      <p className="event-tagline">Explore the unforgettable moments we’ve created for every occasion.</p>
      <div className="categories-container">
        {events.map(event => (
          <div key={event.id} className="category-card">
            <img src={event.image} alt={event.title} />
            <div className="category-title">
              <span>{event.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
