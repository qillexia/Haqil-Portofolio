import Link from 'next/link';

export default function DownloadCV() {
  return (
    <section className="px-4 flex flex-col gap-8">
      <div className="flex items-center gap-4 w-full">
        <h2 className="text-2xl font-bold tracking-tight text-white">Resume</h2>
        <div className="h-px flex-1 bg-zinc-800"></div>
      </div>

      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>description</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Curriculum Vitae</p>
            <p className="text-xs text-zinc-500">PDF • Update terakhir 2025</p>
          </div>
        </div>

        <Link
          href="/cv.pdf"
          target="_blank"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
          Download CV
          <span className="material-symbols-outlined text-xs group-hover:translate-y-0.5 transition-transform duration-300" style={{ fontSize: '14px' }}>arrow_downward</span>
        </Link>
      </div>
    </section>
  );
}
