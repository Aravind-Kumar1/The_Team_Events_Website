import Header from "../components/Header";
import Footer from "../components/Footer";

import UniqueServicesHero from "@/components/Services/UniqueServicesHero";
import Services from "@/components/Services/Services";
import Packages from "@/components/Services/Packages";
import WhyChooseUs from "@/components/Services/WhyChooseUs";

export default function Service() {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Unique Services Hero Section */}
      <UniqueServicesHero />

      {/* Services Section */}
      <Services />

      {/* Packages Section */}
      <Packages />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
