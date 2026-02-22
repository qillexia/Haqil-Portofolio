'use client';

import { useState } from 'react';
import { FAQ_DATA } from '@/data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-white">FAQ</h2>
          <div className="h-px flex-1 bg-zinc-800"></div>
        </div>
        <p className="text-zinc-500 text-xs leading-relaxed">
          Pertanyaan yang sering ditanyakan.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {FAQ_DATA.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 overflow-hidden transition-all duration-300 hover:border-zinc-700/60"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-medium text-zinc-200">{item.question}</span>
              <span
                className={`material-symbols-outlined text-zinc-500 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                style={{ fontSize: '20px' }}
              >
                expand_more
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{
                gridTemplateRows: openIndex === idx ? '1fr' : '0fr',
              }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-xs text-zinc-400 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
