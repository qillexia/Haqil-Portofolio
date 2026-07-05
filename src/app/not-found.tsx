import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60svh] gap-6 text-center">
      <p className="text-primary font-mono text-xs tracking-widest uppercase">$ 404</p>
      <h1 className="text-5xl font-bold tracking-tighter text-white">Halaman tidak ditemukan</h1>
      <p className="text-zinc-500 text-sm max-w-md">
        Halaman yang kamu cari mungkin sudah dipindah, dihapus, atau tidak pernah ada.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
        Kembali ke Beranda
      </Link>
    </div>
  );
}
