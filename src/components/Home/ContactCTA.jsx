import React from 'react';

export default function ContactCTA() {
  return (
    <section className="border-t border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-950 transition-colors duration-300">
      
      {/* 1. Upper Section: High-End Contact Information Strip */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-zinc-200/60 dark:border-zinc-900/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 md:divide-x divide-zinc-200 dark:divide-zinc-900">
          
          {/* Column 1: Call Us */}
          <a 
            href="tel:+18334296111" 
            className="group flex flex-col items-center text-center px-4 space-y-3 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-full bg-[#cda250]/10 flex items-center justify-center border border-[#cda250]/20 group-hover:border-[#cda250] group-hover:bg-[#cda250]/20 transition-all duration-300">
              <svg className="w-4.5 h-4.5 text-[#cda250]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 font-bold">
              Call Us
            </span>
            <span className="text-sm md:text-base font-semibold text-zinc-800 dark:text-stone-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
              +1 (833) 429-6111
            </span>
          </a>

          {/* Column 2: Email Us */}
          <a 
            href="mailto:info@blackstreamlimo.com" 
            className="group flex flex-col items-center text-center px-4 space-y-3 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-full bg-[#cda250]/10 flex items-center justify-center border border-[#cda250]/20 group-hover:border-[#cda250] group-hover:bg-[#cda250]/20 transition-all duration-300">
              <svg className="w-4.5 h-4.5 text-[#cda250]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 font-bold">
              Email Us
            </span>
            <span className="text-sm md:text-base font-semibold text-zinc-800 dark:text-stone-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
              info@blackstreamlimo.com
            </span>
          </a>

          {/* Column 3: Service Area */}
          <div className="group flex flex-col items-center text-center px-4 space-y-3 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-full bg-[#cda250]/10 flex items-center justify-center border border-[#cda250]/20 group-hover:border-[#cda250] transition-all duration-300">
              <svg className="w-4.5 h-4.5 text-[#cda250]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 font-bold">
              Service Area
            </span>
            <span className="text-sm md:text-base font-semibold text-zinc-800 dark:text-stone-200">
              Chicago & Chicagoland
            </span>
          </div>

        </div>
      </div>

      {/* 2. Lower Section: Cinematic Premium CTA Banner */}
      <div className="relative py-28 overflow-hidden bg-zinc-950">
        
        {/* Abstract Background Design Details */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/60 via-black to-black opacity-90" />
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#cda250]/30 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-10 z-10">
          
          {/* Header Block */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-[#cda250] font-semibold">
              Secure Your Reservation
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight leading-tight">
              Ready to Experience <br className="hidden sm:inline" />the Difference?
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto text-xs md:text-sm font-light tracking-wide leading-relaxed">
              Book your luxury private ride today and arrive exactly in the style, security, and tranquility you deserve.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            {/* Primary Solid Gold Button */}
            <button className="w-full sm:w-auto px-10 py-4 bg-[#cda250] hover:bg-[#b88f40] text-neutral-950 text-xs font-bold uppercase tracking-[0.25em] rounded-md shadow-lg shadow-[#cda250]/10 hover:shadow-xl hover:shadow-[#cda250]/20 transition-all duration-300 ease-out flex items-center justify-center space-x-2">
              <span>Book Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Ghost Border Button */}
            <a 
              href="tel:+18334296111" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 border border-zinc-700 hover:border-zinc-500 text-stone-200 text-xs font-bold uppercase tracking-[0.25em] rounded-md transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: (833) 429-6111</span>
            </a>

          </div>

        </div>
      </div>

    </section>
  );
}