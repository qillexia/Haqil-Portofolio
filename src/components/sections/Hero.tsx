// components/sections/Hero.tsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center justify-between min-h-[50vh] lg:min-h-[70vh] w-full mb-10 relative">
      {/* Floating Icons — hidden on mobile to prevent overflow */}
      <div className="hidden sm:block absolute top-10 right-[10%] text-zinc-800 animate-float" style={{ animationDelay: '0s' }}><span className="material-symbols-outlined text-4xl opacity-20">memory</span></div>
      <div className="hidden sm:block absolute bottom-20 left-[5%] text-zinc-800 animate-float" style={{ animationDelay: '1.5s' }}><span className="material-symbols-outlined text-4xl opacity-20">code_blocks</span></div>
      <div className="hidden sm:block absolute top-1/2 left-[45%] text-zinc-800 animate-float" style={{ animationDelay: '2.5s' }}><span className="material-symbols-outlined text-2xl opacity-10">hub</span></div>

      {/* Text Content */}
      <div className="flex flex-col gap-8 z-10 text-left order-2 lg:order-1">
        {/* Status Badge */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
            <span className="text-xs font-medium text-emerald-400">Open to Work</span>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-br from-white via-zinc-200 to-zinc-600 leading-[1.1]">
            Logika Kokoh, Tampilan Mengalir.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-light max-w-lg leading-relaxed">
            Mengubah kompleksitas kode dan perangkat keras menjadi pengalaman pengguna yang <span className="text-zinc-100 font-medium typewriter">mudah dan menyenangkan</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-6 flex-wrap">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-white/5 border border-white/8 text-zinc-300 text-xs sm:text-sm font-medium hover:bg-white/15 hover:border-white/20 transition-all duration-300"
          >
            <span className="material-symbols-outlined group-hover:translate-x-0 transition-transform duration-300" style={{ fontSize: '18px' }}>work</span>
            Lihat Archive
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300" style={{ fontSize: '17px' }}>arrow_forward</span>
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-white/5 border border-white/8 text-zinc-300 text-xs sm:text-sm font-medium hover:bg-white/15 hover:border-white/20 transition-all duration-300"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
            Hubungi Saya
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative flex items-center justify-center order-1 lg:order-2 group perspective-1000">
        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-purple-600/20 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition duration-1000 transform scale-90 group-hover:scale-105"></div>
        <div className="relative w-full max-w-md aspect-square rounded-[2.5rem] p-2 bg-linear-to-br from-white/10 to-transparent backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-700 group-hover:rotate-1 animate-tilt">
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-[2.5rem] opacity-50 pointer-events-none"></div>
          <div className="w-full h-full rounded-[2rem] overflow-hidden relative z-10 bg-zinc-900/80">
            <Image 
              alt="Portrait" 
              src="/simerah.png"
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              priority
              className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-100 filter grayscale group-hover:grayscale-0" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse"></div>
              <span className="text-xs font-medium text-zinc-200">Baju merah dengan muka flat</span>
            </div>
          </div>
        </div>
        <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-zinc-800/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-20 sm:w-32 h-20 sm:h-32 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
}