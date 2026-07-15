import React from 'react';

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 flex items-center justify-center border-b border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-stone-50 to-stone-100 dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-4xl mx-auto text-center px-6">
        <span className="text-[#d4af37] text-xs uppercase tracking-[0.4em] block mb-4">First-Class Ground Transportation</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-zinc-900 dark:text-white mb-6 uppercase">
          Bespoke Luxury <br />
          <span className="font-semibold text-[#d4af37]">Without Compromise</span>
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Corporate events, luxury transfers, and executive airport transfers tailored exactly to your agenda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#booking" className="px-8 py-4 bg-[#d4af37] text-black hover:bg-[#c59b27] font-semibold tracking-wider text-xs uppercase transition-all">
            Make Reservation
          </a>
          <a href="#fleet" className="px-8 py-4 border border-zinc-300 dark:border-zinc-800 hover:border-[#d4af37] text-zinc-900 dark:text-white font-semibold tracking-wider text-xs uppercase transition-all">
            View Fleet
          </a>
        </div>
      </div>
    </section>
  );
}