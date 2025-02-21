// import React, { useState } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube,
//   FaWhatsapp,
//   FaTimes,
//   FaEnvelope,
// } from "react-icons/fa";
// import { MdDirections } from "react-icons/md";
// import { IoShareSocial } from "react-icons/io5";
// import "../styles/call.css";

// export default function Call() {
//   const [showShareModal, setShowShareModal] = useState(false);

//   const handleGetDirections = () => {
//     const destination = "Emmanuel Church, Film Nagar, Jubilee Hills, Hyderabad, India";
//     const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
//       destination
//     )}`;
//     window.open(directionsUrl, "_blank");
//   };

//   const handleShare = () => setShowShareModal(true);
//   const handleCloseShareModal = () => setShowShareModal(false);

//   return (
//     <section className="call-wrapper">
//       <div className="call-container">
//         <h1 className="call-heading">Be a Part of Our Family</h1>
//         <p className="call-description">
//           Stay connected with us through our social platforms and grow in faith together.
//         </p>

//         {/* ✅ Social Media Links */}
//         <div className="social-links">
//           <a href="https://wa.me/919640540157" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
//             <FaWhatsapp />
//           </a>
//           <a href="https://www.instagram.com/elimimpact/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
//             <FaInstagram />
//           </a>
//           <a href="https://www.youtube.com/@elimimpact" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
//             <FaYoutube />
//           </a>
//           <a href="https://x.com/elimimpact" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
//             <FaTwitter />
//           </a>
//         </div>

//         {/* ✅ Action Buttons */}
//         <div className="action-buttons">
//           <button className="action-button" onClick={handleGetDirections}>
//             <MdDirections className="button-icon" />
//             <span>Get Directions</span>
//           </button>
//           <button className="action-button" onClick={handleShare}>
//             <IoShareSocial className="button-icon" />
//             <span>Share</span>
//           </button>
//         </div>
//       </div>

//       {/* ✅ Share Modal */}
//       {showShareModal && (
//         <div className="share-modal-wrapper">
//           <div className="share-modal">
//             <button className="close-button" onClick={handleCloseShareModal}>
//               <FaTimes />
//             </button>
//             <h2 className="share-heading">Share via</h2>
//             <div className="share-links">
//               <a
//                 href={`mailto:?subject=Join us at Emmanuel Church&body=Be a part of our family!`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="share-icon email"
//               >
//                 <FaEnvelope />
//               </a>
//               <a href={`https://wa.me/?text=Join us at Emmanuel Church!`} target="_blank" rel="noopener noreferrer" className="share-icon whatsapp">
//                 <FaWhatsapp />
//               </a>
//               <a
//                 href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="share-icon facebook"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=Join us at Emmanuel Church!`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="share-icon twitter"
//               >
//                 <FaTwitter />
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
