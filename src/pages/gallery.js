import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "@/components/Gallery/HeroSection";
import EventCategories from "@/components/Gallery/EventCategories";
import VideoHighlights from "@/components/Gallery/VideoHighlights";
import GalleryShowcase from "@/components/Gallery/GalleryShowcase";

export default function Gallery() {
  return (
    <div>
      <Header />
      <HeroSection />
      <EventCategories />
      <GalleryShowcase />
      <VideoHighlights />
      <Footer />
    </div>
  );
}
