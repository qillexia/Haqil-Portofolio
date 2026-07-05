'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { NAV_LINKS } from '@/data';

function NavbarInner() {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page') || 'home';

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="nav-pill rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2 flex items-center gap-0.5 sm:gap-1">
        {NAV_LINKS.map((link) => {
          const isActive = currentPage === link.page;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"><div className="nav-pill rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2 h-10" /></div>}>
      <NavbarInner />
    </Suspense>
  );
}