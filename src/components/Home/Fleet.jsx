import React from 'react';
import { Users, Briefcase } from 'lucide-react';

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-stone-100 dark:bg-zinc-900/40 border-y border-zinc-200 dark:border-zinc-900/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] text-xs uppercase tracking-widest block mb-2">Our Rolling Standards</span>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-900 dark:text-white tracking-wide">The Executive Fleet</h2>
          <div className="w-16 h-[1px] bg-[#d4af37] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sedan */}
          <div className="bg-stone-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 p-6 hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">Prestige Executive Sedan</h3>
              <span className="text-xs text-[#d4af37] uppercase tracking-widest block mb-4">Mercedes-Benz S-Class</span>
              <p className="text-xs leading-relaxed text-zinc-500 mb-6">Designed to accommodate corporate travelers with dynamic active climate controls, active soundproofing, and full workspace panels.</p>
            </div>
            <div className="flex gap-4 items-center pt-4 border-t border-zinc-200 dark:border-zinc-900 text-xs">
              <span className="flex items-center gap-1"><Users size={14} className="text-[#d4af37]" /> 3 PAX</span>
              <span className="flex items-center gap-1"><Briefcase size={14} className="text-[#d4af37]" /> 3 Bags</span>
              <span className="ml-auto font-semibold text-zinc-900 dark:text-white">$95 / hr</span>
            </div>
          </div>

          {/* SUV */}
          <div className="bg-stone-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 p-6 hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">First-Class Premium SUV</h3>
              <span className="text-xs text-[#d4af37] uppercase tracking-widest block mb-4">Cadillac Escalade ESV</span>
              <p className="text-xs leading-relaxed text-zinc-500 mb-6">Commanding presence with exceptional cabin clearance. Built for dynamic executive teams requiring transit with full utility luggage space.</p>
            </div>
            <div className="flex gap-4 items-center pt-4 border-t border-zinc-200 dark:border-zinc-900 text-xs">
              <span className="flex items-center gap-1"><Users size={14} className="text-[#d4af37]" /> 6 PAX</span>
              <span className="flex items-center gap-1"><Briefcase size={14} className="text-[#d4af37]" /> 6 Bags</span>
              <span className="ml-auto font-semibold text-zinc-900 dark:text-white">$135 / hr</span>
            </div>
          </div>

          {/* Stretch */}
          <div className="bg-stone-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 p-6 hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">Ultra-Stretch Limousine</h3>
              <span className="text-xs text-[#d4af37] uppercase tracking-widest block mb-4">Lincoln Custom Stretch</span>
              <p className="text-xs leading-relaxed text-zinc-500 mb-6">The definitive flagship limousine experience. Features customized internal wrap-around seating, champagne controls, and integrated dynamic media panels.</p>
            </div>
            <div className="flex gap-4 items-center pt-4 border-t border-zinc-200 dark:border-zinc-900 text-xs">
              <span className="flex items-center gap-1"><Users size={14} className="text-[#d4af37]" /> 10 PAX</span>
              <span className="flex items-center gap-1"><Briefcase size={14} className="text-[#d4af37]" /> 5 Bags</span>
              <span className="ml-auto font-semibold text-zinc-900 dark:text-white">$185 / hr</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}