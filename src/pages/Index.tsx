import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WhyPuriTechSection from "@/components/sections/WhyPuriTechSection";
import AboutSection from "@/components/sections/AboutSection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import FounderSection from "@/components/sections/FounderSection";
import ContactSection from "@/components/sections/ContactSection";
import TermsSection from "@/components/sections/TermsSection";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <WhyPuriTechSection />
        <AboutSection />
        <MissionVisionSection />
        <FounderSection />
        <ContactSection />
        <TermsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
