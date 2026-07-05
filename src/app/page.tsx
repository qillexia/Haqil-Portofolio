'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import ProjectsPage from '@/pages/ProjectsPage';

const PAGE_META: Record<string, { title: string; desc: string }> = {
  home:     { title: 'Haqil Abdillah — Portfolio', desc: 'Portfolio mahasiswa Teknik Informatika — embedded systems, IoT, dan full-stack development.' },
  about:    { title: 'About — Haqil Abdillah', desc: 'Tentang Haqil Abdillah — latar belakang, skill, tools, dan pengalaman di bidang teknologi.' },
  contact:  { title: 'Contact — Haqil Abdillah', desc: 'Hubungi Haqil Abdillah untuk kolaborasi, project, atau sekedar diskusi.' },
  projects: { title: 'Projects — Haqil Abdillah', desc: 'Portfolio project dan sertifikat — dari embedded system hingga full-stack web.' },
};

function PageContent() {
  const searchParams = useSearchParams();
  const page = searchParams?.get('page') || 'home';

  useEffect(() => {
    const meta = PAGE_META[page] || PAGE_META.home;
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.desc);
  }, [page]);

  return (
    <div key={page} className="animate-[fadeIn_0.35s_ease-out] w-full">
      {page === 'about' ? <AboutPage /> :
       page === 'contact' ? <ContactPage /> :
       page === 'projects' ? <ProjectsPage /> :
       <HomePage />}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
      <PageContent />
    </Suspense>
  );
}
