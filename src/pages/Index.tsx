import SacredDecoration from "@/components/SacredDecoration";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import HangingLeaves from "@/components/HangingLeaves";
import FloatingParticles from "@/components/FloatingParticles";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import TimelineRail from "@/components/storyline/TimelineRail";
import EraSection from "@/components/storyline/EraSection";
import EventDetails from "@/components/storyline/EventDetails";
import MainLayout from "@/components/layout/MainLayout";
import { TIMELINE_BY_ERA, type TimelineEvent } from "@/data/timeline";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";
import heroImage from "@/assets/hero-temple.jpeg";
import { motion } from "framer-motion";
import { useState } from "react";
import { Keyboard } from "lucide-react";

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleViewDetails = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setDetailsOpen(true);
  };

  // Enable keyboard navigation
  useKeyboardNavigation(selectedEvent, handleViewDetails);

  return (
    <div className="relative min-h-screen">
      {/* Background elements */}
      <FloatingParticles />
      <HangingLeaves />
      <SacredDecoration />

      {/* Interactive UI elements */}
      <ScrollProgress />
      <BackToTop />

      {/* Hero Section */}
      <section id="hero" className="pt-16 md:pt-20">
        <HeroSection heroImage={heroImage} />
      </section>

      {/* Timeline Rail Navigation */}
      <TimelineRail />

      {/* Timeline Section */}
      <section id="timeline" className="relative z-10 py-20 md:py-32">
        <MainLayout>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="text-primary text-3xl mb-4 block">❈</span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
              Sacred <span className="text-gradient-gold">Timeline</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-accent">✦</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              Journey through the milestones of divine grace and spiritual heritage
            </p>
            
            {/* Keyboard navigation hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground/70"
            >
              <Keyboard className="w-4 h-4" />
              <span>Use ← → arrow keys to navigate between events</span>
            </motion.div>
          </motion.div>

          {/* Timeline by Era */}
          <div className="space-y-20 md:space-y-32">
            {TIMELINE_BY_ERA.map((era, index) => (
              <EraSection key={era.name.en} era={era} index={index} totalEras={TIMELINE_BY_ERA.length} onViewDetails={handleViewDetails} />
            ))}
          </div>
        </MainLayout>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 md:py-32 bg-card/30">
        <MainLayout>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-3xl mb-4 block">❈</span>
            <h2 className="font-display text-3xl md:text-4xl text-gradient-gold mb-6">
              About This Journey
            </h2>
            <div className="space-y-4 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                This sacred timeline chronicles the annual Gurupooja celebrations honoring{" "}
                <span className="text-primary font-display">Sri Siva Swamigal</span>, a journey
                that began in 2009 and continues to this day.
              </p>
              <p>
                Each year marks a deepening of devotion, a strengthening of community, and a
                renewal of the eternal Guru-Shishya bond. Through these celebrations, we honor
                the divine teachings and living presence of the Guru.
              </p>
              <p className="italic text-sm">
                "The Guru's grace flows eternally, guiding seekers across generations"
              </p>
            </div>
          </motion.div>
        </MainLayout>
      </section>

      {/* Event Details Dialog/Drawer */}
      <EventDetails event={selectedEvent} open={detailsOpen} onOpenChange={setDetailsOpen} />
    </div>
  );
};

export default Index;
