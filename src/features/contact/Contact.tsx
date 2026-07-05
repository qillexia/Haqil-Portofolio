import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";
import { CONTACT_DATA } from "@/data";

export default function Contact() {
  return (
    <section className="w-full scroll-mt-24" id="contact">
      <div className="flex flex-col gap-3 mb-10">
        <p className="text-primary font-mono text-xs tracking-widest uppercase">$ ping me</p>
        <h2 className="text-4xl md:text-4xl font-bold tracking-tighter text-white leading-tight">Mari Terhubung</h2>
        <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
          Tertarik untuk berkolaborasi atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya melalui channel di bawah ini.
        </p>
        <div className="h-px w-full bg-gradient-to-r from-zinc-800 via-zinc-700 to-transparent mt-2"></div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
        {CONTACT_DATA.map((item, idx) => (
          <Link key={idx} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}>
            <GlassCard className="p-3 sm:p-6 flex flex-col items-center text-center gap-2 sm:gap-3 hover:border-primary/30 cursor-pointer h-full">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <span className="material-symbols-outlined text-zinc-400 group-hover:text-primary transition-colors duration-300" style={{ fontSize: '20px' }}>
                  {item.icon}
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-white">{item.label}</h3>
              <p className="text-[10px] sm:text-xs text-zinc-500 break-all sm:break-normal">{item.value}</p>
            </GlassCard>
          </Link>
        ))}
      </div>

      
    </section>
  );
}
