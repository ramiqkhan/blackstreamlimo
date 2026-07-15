import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-[#121212] dark:bg-black border-b border-[#d4af37]/30 text-white py-2.5 px-4 relative transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 pr-8 text-center">
        <Sparkles size={14} className="text-[#d4af37] animate-pulse shrink-0" />
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-100">
          Exclusive Summer Travel: Enjoy <span className="text-[#d4af37] font-bold">15% off</span> all hourly SUV bookings through August.
        </p>
        <a 
          href="#booking" 
          className="hidden md:inline-block text-[10px] font-bold tracking-widest text-[#d4af37] border-b border-[#d4af37] hover:text-white hover:border-white uppercase transition-colors"
        >
          Book Now
        </a>
      </div>
      
      {/* Close Button */}
      <button 
        onClick={() => setIsVisible(false)} 
        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-[#d4af37] transition-colors cursor-pointer"
        aria-label="Dismiss Banner"
      >
        <X size={15} />
      </button>
    </div>
  );
}