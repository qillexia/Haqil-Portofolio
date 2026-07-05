'use client';

import { useEffect } from 'react';

export default function AOSLoader() {
  useEffect(() => {
    // Inject AOS CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/aos@2.3.4/dist/aos.css';
    document.head.appendChild(link);

    // Load AOS JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.4/dist/aos.js';
    script.onload = () => {
      const AOS = (window as any).AOS;
      if (AOS) {
        AOS.init({ duration: 700, easing: 'ease-out', once: true, offset: 200 });
      }
    };
    document.body.appendChild(script);
  }, []);

  return null;
}
