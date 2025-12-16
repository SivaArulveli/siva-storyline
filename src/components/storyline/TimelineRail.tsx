import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TIMELINE_BY_ERA } from "@/data/timeline";
import { useEffect, useState } from "react";

const TimelineRail = () => {
  const [activeEra, setActiveEra] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = TIMELINE_BY_ERA.map((era) => {
        const id = `era-${era.name.toLowerCase().replace(/\s+/g, "-")}`;
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: era.name,
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter(Boolean);

      // Find the section that's currently in view
      const current = sections.find(
        (section) => section && section.top <= 200 && section.bottom >= 200
      );

      if (current) {
        setActiveEra(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToEra = (eraName: string) => {
    const id = `era-${eraName.toLowerCase().replace(/\s+/g, "-")}`;
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Desktop: Vertical rail on the left */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40"
      >
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 w-48">
          <h3 className="font-display text-sm text-primary mb-4 text-center">Timeline Eras</h3>
          <ScrollArea className="h-[400px]">
            <nav className="space-y-2">
              {TIMELINE_BY_ERA.map((era) => (
                <button
                  key={era.name}
                  onClick={() => scrollToEra(era.name)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-body transition-all ${
                    activeEra === era.name
                      ? "bg-primary/20 text-primary border-l-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                  }`}
                >
                  <div className="font-display text-xs mb-1">{era.period}</div>
                  <div className="text-sm">{era.name}</div>
                </button>
              ))}
            </nav>
          </ScrollArea>
        </div>
      </motion.aside>

      {/* Mobile: Horizontal rail at the top (below header) */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="lg:hidden sticky top-16 z-40 bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
      >
        <ScrollArea className="w-full">
          <div className="flex gap-3 px-4">
            {TIMELINE_BY_ERA.map((era) => (
              <button
                key={era.name}
                onClick={() => scrollToEra(era.name)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-display transition-all whitespace-nowrap ${
                  activeEra === era.name
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-primary/20"
                }`}
              >
                {era.name}
              </button>
            ))}
          </div>
        </ScrollArea>
      </motion.div>
    </>
  );
};

export default TimelineRail;
