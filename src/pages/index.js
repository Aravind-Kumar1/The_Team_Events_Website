import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedServices from "@/components/FeaturedServices";
import EventPackages from "@/components/EventPackages";
import Testimonials from "@/components/TestimonialSection";
import ContactUs from "@/components/ContactUs";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Event Management | Home</title>
      </Head>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedServices />
      <EventPackages />
      <Testimonials />
      <ContactUs />
      <FaqSection />
      <Footer />
    </div>
  );
}
