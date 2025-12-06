import { motion } from "framer-motion";

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sacred temple atmosphere"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Sacred symbol */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="text-6xl md:text-8xl text-primary animate-float inline-block">ॐ</span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide mb-6"
        >
          <span className="text-gradient-gold">Sri Siva Swamigal</span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="text-primary">✦</span>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <span className="text-accent">❈</span>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <span className="text-primary">✦</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-xl md:text-2xl text-muted-foreground italic mb-6"
        >
          A Sacred Journey Through Time
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-lg text-foreground/70 max-w-2xl mx-auto"
        >
          Celebrating the divine life, teachings, and eternal legacy of 
          Sri Siva Swamigal — from the auspicious 80th birthday in 2006 
          through the sacred Maha Jeeva Samadhi and the continuing tradition of Gurupooja.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm tracking-widest uppercase">Explore the Timeline</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary text-2xl"
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
