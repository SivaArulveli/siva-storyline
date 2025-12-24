import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import { motion } from "framer-motion";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === "en" ? "ta" : "en")}
        className="flex items-center gap-2 text-foreground/80 hover:text-primary hover:bg-primary/10 font-display transition-colors"
        aria-label="Switch Language"
      >
        <Languages className="w-4 h-4" />
        <span className="min-w-[2ch] uppercase font-bold">
          {language === "en" ? "EN" : "TA"}
        </span>
      </Button>
    </motion.div>
  );
};

export default LanguageToggle;
