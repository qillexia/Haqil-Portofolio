'use client';

import { CERTIFICATES_DATA } from "@/data";
import GlassCard from "@/components/ui/GlassCard";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const close = useCallback(() => setSelectedImage(null), []);

  // Close on Escape key
  useEffect(() => {
    if (!selectedImage) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [selectedImage, close]);

  return (
    <section className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-white">Certificates</h2>
          <div className="h-px flex-1 bg-zinc-800"></div>
        </div>
        <p className="text-zinc-500 text-xs leading-relaxed">
          Sertifikat kompetensi yang diperoleh dari platform pembelajaran daring. Klik gambar untuk melihat detail.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {CERTIFICATES_DATA.map((cert, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/30 cursor-pointer transition-all duration-300 hover:border-zinc-700/80"
            onClick={() => cert.image && setSelectedImage({ src: cert.image, title: cert.title })}
          >
            {/* Full image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
              {cert.image ? (
                <Image
                  alt={cert.title}
                  src={cert.image}
                  fill
                  className="object-contain object-top transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-zinc-700">
                  <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>workspace_premium</span>
                  <span className="text-[10px] font-mono">certificate</span>
                </div>
              )}

              {/* Bottom gradient overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

              {/* Zoom hint on hover */}
              {cert.image && (
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-zinc-600/40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>zoom_in</span>
                  </div>
                </div>
              )}

              {/* Date badge — top right */}
              <div className="absolute top-3 right-3 z-10">
                <span className="text-[10px] font-mono text-zinc-300 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-zinc-600/30">
                  {cert.date}
                </span>
              </div>

              {/* Info overlay — bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-4 flex items-end justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white leading-snug truncate">
                    {cert.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{cert.issuer}</p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-zinc-300 hover:text-primary hover:border-primary/30 transition-all duration-200"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal — rendered via Portal to bypass parent transform */}
      {selectedImage && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={close}
          style={{ animation: 'fadeIn 200ms ease-out' }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

          {/* Modal content */}
          <div
            className="relative z-10 w-full max-w-4xl flex flex-col gap-5"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'scaleIn 250ms ease-out' }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px' }}>workspace_premium</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">{selectedImage.title}</p>
                  <p className="text-[11px] text-zinc-500">Klik di luar atau tekan Esc untuk menutup</p>
                </div>
              </div>
              <button
                onClick={close}
                className="w-9 h-9 rounded-full bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700/80 hover:border-zinc-600 transition-all duration-200"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>close</span>
              </button>
            </div>

            {/* Image container */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-700/40 bg-zinc-900/80">
              <div className="relative w-full" style={{ aspectRatio: '16 / 10' }}>
                <Image
                  alt={selectedImage.title}
                  src={selectedImage.src}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
