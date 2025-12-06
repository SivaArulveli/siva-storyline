import { motion } from "framer-motion";

interface LeafClusterProps {
  x: number;
  delay?: number;
}

const BodhiLeaf = ({ rotate = 0, scale = 1, offsetX = 0, offsetY = 0 }: { rotate?: number; scale?: number; offsetX?: number; offsetY?: number }) => (
  <g transform={`translate(${offsetX}, ${offsetY}) rotate(${rotate}) scale(${scale})`}>
    <path
      d="M0 0 C-8 15 -10 35 -8 55 C-5 75 0 90 0 90 C0 90 5 75 8 55 C10 35 8 15 0 0 Z"
      fill="url(#leafGradient)"
      stroke="hsl(38, 80%, 45%)"
      strokeWidth="0.5"
    />
    {/* Leaf vein */}
    <path
      d="M0 5 L0 85"
      stroke="hsl(38, 70%, 40%)"
      strokeWidth="0.8"
      fill="none"
    />
    {/* Side veins */}
    <path
      d="M0 20 L-5 30 M0 35 L-6 48 M0 50 L-5 62 M0 65 L-4 75"
      stroke="hsl(38, 70%, 40%)"
      strokeWidth="0.4"
      fill="none"
    />
    <path
      d="M0 20 L5 30 M0 35 L6 48 M0 50 L5 62 M0 65 L4 75"
      stroke="hsl(38, 70%, 40%)"
      strokeWidth="0.4"
      fill="none"
    />
  </g>
);

const Chain = ({ height = 40 }: { height?: number }) => (
  <g>
    {Array.from({ length: Math.ceil(height / 12) }).map((_, i) => (
      <ellipse
        key={i}
        cx="0"
        cy={i * 12 + 6}
        rx="2"
        ry="5"
        fill="none"
        stroke="hsl(43, 85%, 55%)"
        strokeWidth="1.5"
      />
    ))}
  </g>
);

const LeafCluster = ({ x, delay = 0 }: LeafClusterProps) => (
  <motion.g
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    transform={`translate(${x}, 0)`}
  >
    {/* Chain */}
    <Chain height={50} />
    
    {/* Three leaves cluster */}
    <g transform="translate(0, 55)">
      {/* Left leaf */}
      <BodhiLeaf rotate={-25} scale={0.85} offsetX={-12} offsetY={5} />
      {/* Center leaf */}
      <BodhiLeaf rotate={0} scale={1} offsetX={0} offsetY={0} />
      {/* Right leaf */}
      <BodhiLeaf rotate={25} scale={0.85} offsetX={12} offsetY={5} />
    </g>
  </motion.g>
);

const HangingLeaves = () => {
  const clusters = [
    { x: 80, delay: 0.1 },
    { x: 200, delay: 0.2 },
    { x: 320, delay: 0.15 },
    { x: 440, delay: 0.25 },
    { x: 560, delay: 0.1 },
    { x: 680, delay: 0.2 },
    { x: 800, delay: 0.15 },
    { x: 920, delay: 0.25 },
    { x: 1040, delay: 0.1 },
    { x: 1160, delay: 0.2 },
    { x: 1280, delay: 0.15 },
    { x: 1400, delay: 0.25 },
    { x: 1520, delay: 0.1 },
    { x: 1640, delay: 0.2 },
    { x: 1760, delay: 0.15 },
  ];

  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-20">
      <svg
        viewBox="0 0 1920 200"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-auto min-h-[150px] md:min-h-[200px]"
      >
        <defs>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(43, 90%, 60%)" />
            <stop offset="50%" stopColor="hsl(38, 85%, 50%)" />
            <stop offset="100%" stopColor="hsl(33, 80%, 40%)" />
          </linearGradient>
        </defs>
        
        {clusters.map((cluster, index) => (
          <LeafCluster key={index} x={cluster.x} delay={cluster.delay} />
        ))}
      </svg>
    </div>
  );
};

export default HangingLeaves;
