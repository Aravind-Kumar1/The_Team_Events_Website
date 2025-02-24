

export default function GalleryShowcase() {
  const events = [
    { id: 1, title: 'Birthday Party', image: '/images/bir.jpg' },
    { id: 2, title: 'Wedding', image: '/images/ma.jpg' },
    { id: 3, title: 'Corporate Event', image: '/images/cor.jpg' },
    { id: 4, title: 'House Party', image: '/images/house.jpg' },
    { id: 5, title: 'Anniversary', image: '/images/anni.jpg' },
    { id: 6, title: 'Product Launch', image: '/images/pro.jpg' },
    { id: 7, title: 'Charity Gala', image: '/images/cha.jpg' },
    { id: 8, title: 'Concert', image: '/images/cons.jpg' },
 
  ];

  return (
    <section className="gallery-showcase">
      <h2>Unforgettable Moments</h2>
      <p className="gallery-intro">A glimpse into the celebrations that defined happiness.</p>
      <div className="showcase-grid">
        {events.map(event => (
          <div key={event.id} className="showcase-item">
            <img src={event.image} alt={event.title} />
            <div className="highlight-overlay">
              <span>{event.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
