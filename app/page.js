import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ServicesSection from "./components/ServicesSection";
import BannerSection from "./components/BannerSection";
import Contact from "./components/Contact";
import PracticeAreas from "./components/practiceAreas";
import WhatsAppButton from "./components/WhatsAppButton";
import GoToTopButton from "./components/GoToTopButton";
import PhoneButton from "./components/PhoneButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <BannerSection />

      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <PracticeAreas />
      <ServicesSection />

      <Contact />

      <Footer />
      <WhatsAppButton />
      <PhoneButton />
      <GoToTopButton />
    </>
  );
}
