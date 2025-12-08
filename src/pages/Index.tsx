import SacredDecoration from "@/components/SacredDecoration";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import HangingLeaves from "@/components/HangingLeaves";
import heroImage from "@/assets/hero-temple.jpeg";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-sacred">
      <HangingLeaves />
      <SacredDecoration />

      <main className="relative z-10 pt-32 md:pt-40">
        <HeroSection heroImage={heroImage} />
        <Timeline />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
