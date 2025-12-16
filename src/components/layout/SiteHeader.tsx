import { motion } from "framer-motion";
import { Home, BookOpen, Info, ExternalLink } from "lucide-react";

const SiteHeader = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Title and subtitle */}
          <div className="text-center md:text-left">
            <h1 className="font-display text-xl md:text-2xl text-gradient-gold">
              Sri Siva Swamigal
            </h1>
            <p className="font-body text-sm text-muted-foreground italic">
              A Sacred Journey Through Time
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-center gap-2 md:gap-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-display text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-display text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Timeline</span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-display text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Info className="w-4 h-4" />
              <span className="hidden sm:inline">About</span>
            </button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default SiteHeader;
