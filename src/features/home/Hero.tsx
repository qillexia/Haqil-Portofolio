'use client';

import Link from "next/link";
import Image from "next/image";
import { Playfair_Display, Roboto_Flex, Caveat } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-[100dvh] overflow-hidden px-4 sm:px-8 lg:px-16">
      <div className="relative z-10 flex flex-col-reverse sm:flex-row items-center sm:items-center gap-6 sm:gap-10 lg:gap-20 w-full max-w-6xl">
        {/* Left: Content */}
        <div className="flex flex-col items-start gap-4 sm:gap-7 text-left flex-1">
          {/* Name row */}
          <div className="hidden sm:flex items-center gap-3 text-zinc-500 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-light">
            <span className="h-px w-6 sm:w-8 bg-zinc-600"></span>
            Muhammad Haqil Abdillah
          </div>

          {/* Headline */}
          <h1 className={`${robotoFlex.className} text-4xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.3]`}>
            Logika Kokoh,<br className="sm:hidden" /> Tampilan Mengalir.
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base lg:text-xl text-zinc-400 font-light max-w-sm sm:max-w-lg leading-relaxed mb-2 sm:mb-0">
            Mengubah kompleksitas kode dan perangkat keras menjadi pengalaman pengguna yang mudah dan menyenangkan.
          </p>

          
        </div>

        {/* Right: Profile Card — full-bleed photo */}
        <div className="relative shrink-0 group">
          {/* Glow behind */}
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
          {/* Card — photo fills entire frame */}
          <div className="relative w-80 sm:w-72 lg:w-80 aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:border-primary/30 hover:shadow-[0_0_50px_-12px_rgba(43,75,238,0.4)]">
            {/* Photo */}
            <Image
              alt="Portrait"
              src="/Haqil.webp"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 30vw"
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7 flex flex-col items-center gap-1">
              {/* Name */}
              <p className={`${caveat.className} text-base sm:text-lg lg:text-xl font-bold text-white/80 tracking-wide`}>
                Muhammad Haqil Abdillah
              </p>
              {/* Role */}
              <p className="text-[9px] sm:text-[10px] text-white/50 tracking-[0.25em] uppercase font-light">
                Informatics Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}