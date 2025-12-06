import SacredDecoration from "@/components/SacredDecoration";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-temple.jpg";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-sacred">
      <SacredDecoration />
      
      <main className="relative z-10">
        <HeroSection heroImage={heroImage} />
        <Timeline />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
