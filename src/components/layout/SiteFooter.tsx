import { Heart } from "lucide-react";

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-border/30 bg-background/50">
      <div className="container mx-auto max-w-4xl">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/30" />
          <span className="text-primary text-xl">❈</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        {/* Main content */}
        <div className="text-center space-y-4">
          <p className="font-body text-base text-muted-foreground">
            In loving remembrance of{" "}
            <span className="text-primary font-display">Sri Siva Swamigal</span>
          </p>
          
          <p className="font-body text-sm text-muted-foreground/70 italic">
            "The Guru's grace flows eternally, guiding seekers across generations"
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground/60">
            <span>Created with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by devotees</span>
          </div>

          <p className="text-xs text-muted-foreground/50">
            © {currentYear} Divine Saga Weaver. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
