
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import ReservationSection from "@/components/ReservationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <MenuSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
