import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Circular progress indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-card/80 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center z-50 shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <svg className="w-14 h-14 -rotate-90">
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-primary/20"
          />
          <motion.circle
            cx="28"
            cy="28"
            r="24"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-primary"
            style={{
              pathLength: scrollYProgress,
            }}
            strokeLinecap="round"
            strokeDasharray="0 1"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-xs font-display text-primary"
            style={{
              opacity: useSpring(scrollYProgress, { stiffness: 100, damping: 30 }),
            }}
          >
            <motion.span>
              {scrollYProgress.get() > 0.01 ? Math.round(scrollYProgress.get() * 100) : 0}%
            </motion.span>
          </motion.span>
        </div>
      </motion.div>
    </>
  );
};

export default ScrollProgress;
