import { useState } from "react";
import "../../styles/Gallery/videohighlights.css";

export default function VideoHighlights() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, title: 'Birthday Party Highlights', videoUrl: '/videos/birthday.mp4', thumbnail: '/images/bir.jpg' },
    { id: 2, title: 'Wedding Highlights', videoUrl: '/videos/wedding.mp4', thumbnail: '/images/hou.jpg' },
    { id: 3, title: 'Corporate Event Highlights', videoUrl: '/videos/corporate.mp4', thumbnail: '/images/rich.jpg' },
    { id: 4, title: 'House Party Highlights', videoUrl: '/videos/bg.mp4', thumbnail: '/images/deco.jpg' },
  ];

  return (
    <section className="video-highlights">
      <h2>Event Highlights</h2>
      <p className="video-tagline">Relive the most memorable moments from our events through these stunning highlights.</p>
      
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card" onClick={() => setSelectedVideo(video.videoUrl)}>
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <div className="overlay">
              <button className="play-btn">▶</button>
            </div>
            <div className="video-info">
              <span>{video.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedVideo(null)}>✖</span>
            <video src={selectedVideo} controls autoPlay className="modal-video"></video>
          </div>
        </div>
      )}
    </section>
  );
}
