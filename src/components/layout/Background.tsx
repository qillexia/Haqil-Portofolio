// components/layout/Background.tsx
export default function Background() {
  return (
    <>
      {/* Base mesh gradient */}
      <div className="fixed inset-0 bg-mesh z-[-5]" />

      {/* Animated aurora blobs — smaller on mobile */}
      <div className="fixed inset-0 z-[-4] overflow-hidden">
        <div
          className="absolute w-[280px] sm:w-[400px] md:w-[600px] h-[280px] sm:h-[400px] md:h-[600px] rounded-full blur-[100px] sm:blur-[130px] md:blur-[160px] opacity-[0.10] md:opacity-[0.12] animate-[auroraFloat1_20s_ease-in-out_infinite]"
          style={{ background: 'radial-gradient(circle, #2b4bee, transparent 70%)', top: '10%', left: '15%' }}
        />
        <div
          className="absolute w-[220px] sm:w-[350px] md:w-[500px] h-[220px] sm:h-[350px] md:h-[500px] rounded-full blur-[90px] sm:blur-[110px] md:blur-[140px] opacity-[0.08] md:opacity-[0.10] animate-[auroraFloat2_25s_ease-in-out_infinite]"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)', top: '50%', right: '10%' }}
        />
        <div
          className="absolute w-[200px] sm:w-[320px] md:w-[450px] h-[200px] sm:h-[320px] md:h-[450px] rounded-full blur-[80px] sm:blur-[100px] md:blur-[130px] opacity-[0.06] md:opacity-[0.08] animate-[auroraFloat3_22s_ease-in-out_infinite]"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)', bottom: '10%', left: '30%' }}
        />
        <div
          className="hidden sm:block absolute w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full blur-[90px] md:blur-[120px] opacity-[0.05] md:opacity-[0.07] animate-[auroraFloat1_18s_ease-in-out_infinite_reverse]"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)', top: '30%', right: '35%' }}
        />
      </div>

      {/* Ambient glow spots — scaled down on mobile */}
      <div className="fixed inset-0 z-[-3] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-primary/[0.04] rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] md:w-[500px] h-[150px] sm:h-[200px] md:h-[300px] bg-violet-600/[0.03] rounded-full blur-[50px] sm:blur-[65px] md:blur-[80px]" />
        <div className="hidden sm:block absolute top-1/2 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-cyan-500/[0.03] rounded-full blur-[70px] md:blur-[90px]" />
      </div>

      {/* Grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern z-[-2] pointer-events-none" />

      {/* Noise grain overlay */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.035]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }} />

      {/* Floating micro particles — fewer rendered, CSS hides extras on mobile */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-[particleDrift_linear_infinite] ${i >= 15 ? 'hidden sm:block' : ''}`}
            style={{
              width: `${2 + (i % 4) * 1.5}px`,
              height: `${2 + (i % 4) * 1.5}px`,
              backgroundColor: i % 3 === 0 ? 'rgba(43,75,238,0.35)' : i % 3 === 1 ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.40)',
              boxShadow: `0 0 ${4 + (i % 3) * 3}px ${i % 3 === 0 ? 'rgba(43,75,238,0.4)' : i % 3 === 1 ? 'rgba(139,92,246,0.55)' : 'rgba(255,255,255,0.2)'}`,
              left: `${(i * 3.45) % 100}%`,
              top: `${(i * 7.13 + 10) % 100}%`,
              animationDuration: `${18 + (i % 8) * 4}s`,
              animationDelay: `${-(i * 1.7)}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}