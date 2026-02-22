'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Buka email client dengan data form
    const subject = encodeURIComponent(`Pesan dari ${formData.name}`);
    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:haqilabdillah@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 3000);
    }, 500);
  };

  return (
    <section className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-white">Kirim Pesan</h2>
          <div className="h-px flex-1 bg-zinc-800"></div>
        </div>
        <p className="text-zinc-500 text-xs leading-relaxed">
          Punya pertanyaan atau ingin berkolaborasi? Isi form di bawah ini.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-medium text-zinc-400">
              Nama
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Nama lengkap"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-medium text-zinc-400">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-medium text-zinc-400">
            Pesan
          </label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder="Tulis pesan kamu di sini..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200 resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/40 disabled:opacity-50 transition-all duration-300"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
            {status === 'sent' ? 'check_circle' : 'send'}
          </span>
          {status === 'idle' && 'Kirim Pesan'}
          {status === 'sending' && 'Mengirim...'}
          {status === 'sent' && 'Terkirim!'}
        </button>
      </form>
    </section>
  );
}
