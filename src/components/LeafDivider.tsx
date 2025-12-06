import { motion } from "framer-motion";

interface LeafDividerProps {
  index?: number;
}

const BodhiLeaf = ({ rotate = 0, scale = 1, offsetX = 0, offsetY = 0 }: { rotate?: number; scale?: number; offsetX?: number; offsetY?: number }) => (
  <g transform={`translate(${offsetX}, ${offsetY}) rotate(${rotate}) scale(${scale})`}>
    <path
      d="M0 0 C-6 12 -8 28 -6 44 C-4 60 0 72 0 72 C0 72 4 60 6 44 C8 28 6 12 0 0 Z"
      fill="url(#leafGradientDivider)"
      stroke="hsl(38, 80%, 45%)"
      strokeWidth="0.4"
    />
    {/* Leaf vein */}
    <path
      d="M0 4 L0 68"
      stroke="hsl(38, 70%, 40%)"
      strokeWidth="0.6"
      fill="none"
    />
    {/* Side veins */}
    <path
      d="M0 16 L-4 24 M0 28 L-5 38 M0 40 L-4 50 M0 52 L-3 60"
      stroke="hsl(38, 70%, 40%)"
      strokeWidth="0.3"
      fill="none"
    />
    <path
      d="M0 16 L4 24 M0 28 L5 38 M0 40 L4 50 M0 52 L3 60"
      stroke="hsl(38, 70%, 40%)"
      strokeWidth="0.3"
      fill="none"
    />
  </g>
);

const LeafDivider = ({ index = 0 }: LeafDividerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex justify-center my-8 md:my-12"
    >
      <svg
        viewBox="0 0 120 90"
        className="w-24 h-16 md:w-32 md:h-20"
      >
        <defs>
          <linearGradient id="leafGradientDivider" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(43, 90%, 60%)" />
            <stop offset="50%" stopColor="hsl(38, 85%, 50%)" />
            <stop offset="100%" stopColor="hsl(33, 80%, 40%)" />
          </linearGradient>
        </defs>
        
        {/* Three leaves cluster */}
        <g transform="translate(60, 10)">
          {/* Left leaf */}
          <BodhiLeaf rotate={-20} scale={0.8} offsetX={-18} offsetY={8} />
          {/* Center leaf */}
          <BodhiLeaf rotate={0} scale={0.95} offsetX={0} offsetY={0} />
          {/* Right leaf */}
          <BodhiLeaf rotate={20} scale={0.8} offsetX={18} offsetY={8} />
        </g>
      </svg>
    </motion.div>
  );
};

export default LeafDivider;
