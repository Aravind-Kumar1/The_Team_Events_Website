import AboutHero from "@/components/About/AboutHero";
import MissionVision from "@/components/About/MissionVision";
import Team from "@/components/About/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../styles/global.css";

export default function About() {
  return (
    <div>
      <Header />
      <AboutHero />
      <MissionVision />
      <Team />
      <Footer />
    </div>
  );
}
