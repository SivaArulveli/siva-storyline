const SacredDecoration = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Radial glow from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-glow-pulse" />
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/20" />

      {/* Floating lotus symbols */}
      <div className="absolute top-20 left-10 text-4xl text-primary/10 animate-float">❈</div>
      <div className="absolute top-40 right-20 text-3xl text-accent/10 animate-float" style={{ animationDelay: '2s' }}>✦</div>
      <div className="absolute bottom-40 left-20 text-5xl text-primary/10 animate-float" style={{ animationDelay: '4s' }}>❈</div>
      <div className="absolute bottom-20 right-10 text-4xl text-accent/10 animate-float" style={{ animationDelay: '1s' }}>✦</div>

      {/* Sacred vertical lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
    </div>
  );
};

export default SacredDecoration;
