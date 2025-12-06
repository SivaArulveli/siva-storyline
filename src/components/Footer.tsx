import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-16 md:py-24 px-4 border-t border-border/30">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 rounded-full blur-[100px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Om symbol */}
        <div className="text-5xl text-primary mb-6 animate-float">ॐ</div>

        {/* Quote */}
        <blockquote className="font-body text-xl md:text-2xl italic text-foreground/80 mb-8 leading-relaxed">
          "The Guru is not different from the conscious Self. Without doubt, 
          this is the truth. Therefore, wise men should make every effort 
          to seek the Guru."
        </blockquote>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-primary/50">✦</span>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <span className="text-accent/50">❈</span>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <span className="text-primary/50">✦</span>
        </div>

        {/* Dedication */}
        <p className="font-display text-sm tracking-widest text-muted-foreground uppercase mb-2">
          In Eternal Remembrance
        </p>
        <p className="font-display text-lg text-primary">
          Sri Siva Swamigal
        </p>
        <p className="font-body text-muted-foreground mt-2">
          1926 — 2008
        </p>

        {/* Bottom text */}
        <p className="font-body text-sm text-muted-foreground/60 mt-12">
          Created with devotion • Preserving sacred heritage
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
