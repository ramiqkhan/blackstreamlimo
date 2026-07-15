import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';

export default function ValuePillars() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 border border-[#d4af37]/30">
            <Shield size={28} className="text-[#d4af37]" />
          </div>
          <h3 className="text-lg font-medium tracking-widest text-zinc-900 dark:text-white uppercase mb-3">Vetted Security</h3>
          <p className="text-sm font-light text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Every chauffeur complies with executive background checks and extensive route preparation.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 border border-[#d4af37]/30">
            <Clock size={28} className="text-[#d4af37]" />
          </div>
          <h3 className="text-lg font-medium tracking-widest text-zinc-900 dark:text-white uppercase mb-3">Absolute Punctuality</h3>
          <p className="text-sm font-light text-zinc-500 dark:text-zinc-400 leading-relaxed">
            We monitor arriving commercial and charter flight tracking live. If you arrive early, we are already parked.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 border border-[#d4af37]/30">
            <Award size={28} className="text-[#d4af37]" />
          </div>
          <h3 className="text-lg font-medium tracking-widest text-zinc-900 dark:text-white uppercase mb-3">Bespoke Comfort</h3>
          <p className="text-sm font-light text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Complimentary in-car high-speed Wi-Fi network, thermal spring waters, and current executive papers.
          </p>
        </div>
      </div>
    </section>
  );
}