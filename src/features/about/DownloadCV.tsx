import Link from 'next/link';

export default function DownloadCV() {
  return (
    <section className="w-full max-w-3xl mx-auto">
      <Link
        href="/cv.pdf"
        target="_blank"
        className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-primary transition-colors duration-200"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>download</span>
        Download CV (PDF)
        <span className="material-symbols-outlined group-hover:translate-y-0.5 transition-transform duration-200" style={{ fontSize: '12px' }}>arrow_downward</span>
      </Link>
    </section>
  );
}
