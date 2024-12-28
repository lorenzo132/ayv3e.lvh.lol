import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import SocialLinks from "@/components/SocialLinks";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Header />
      <AboutSection />
      <SocialLinks />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;