// components/sections/Stack.tsx
import { TECH_STACK } from "@/data";

export default function Stack() {
  return (
    <section className="w-full max-w-4xl mb-32 scroll-mt-24" id="stack">
      <div className="flex flex-col items-center text-center gap-2 mb-12">
        <h2 className="text-2xl font-bold text-white tracking-tight">Technologies</h2>
        <div className="w-10 h-[1px] bg-zinc-800"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {TECH_STACK.map((item) => (
          <div key={item.name} className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all duration-300 cursor-default">
            <span className="material-symbols-outlined text-3xl text-zinc-600 group-hover:text-white transition-colors duration-300">{item.icon}</span>
            <span className="text-sm font-medium text-zinc-500 group-hover:text-zinc-200">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}