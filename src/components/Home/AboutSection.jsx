import React from 'react';
import { ShieldCheck, Clock, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-stone-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-hidden border-b border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        
        {/* LEFT SIDE: Clean Asymmetric Image Grid (Matches your layout perfectly) */}
        <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6 w-full">
          
          {/* 1. TOP IMAGE: Large Premium Executive SUV */}
          <div className="w-full h-[220px] sm:h-[300px] overflow-hidden rounded-sm shadow-lg border border-zinc-200 dark:border-zinc-900/60 group">
            <img 
              src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800" 
              alt="Premium Black Cadillac Escalade Executive SUV" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>

          {/* BOTTOM ROW: Two Side-by-Side Images */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
            
            {/* 2. BOTTOM LEFT: Luxury Sprinter / Client Boarding */}
            <div className="w-full h-[150px] sm:h-[300px] overflow-hidden rounded-sm shadow-lg border border-zinc-200 dark:border-zinc-900/60 group">
              <img 
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800" 
                alt="Elite passengers boarding luxury black transport" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>

            {/* 3. BOTTOM RIGHT: Private Jet Runway Meetup */}
            <div className="w-full h-[150px] sm:h-[300px] overflow-hidden rounded-sm shadow-lg border border-zinc-200 dark:border-zinc-900/60 group">
              <img 
                src=" https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200" 
                alt="Chauffeur service waiting next to a private jet on tarmac" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>

          </div>

        </div>

        {/* RIGHT SIDE: Elevated Brand Narrative */}
        <div className="lg:col-span-6 flex flex-col items-start">
          
          {/* Category Tag & Est. Badge */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#cda250]"></span>
              <span className="text-[#cda250] text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em]">
                Elite Chauffeur Standards
              </span>
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 border-l border-zinc-300 dark:border-zinc-800 pl-4 uppercase">
              Est. Chicagoland
            </span>
          </div>

          {/* Main Serif Header */}
          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-6 uppercase">
            Beyond Transit <br />
            <span className="font-semibold italic text-[#cda250] normal-case">An Uncompromising</span> <br />
            Standard of Travel
          </h2>

          {/* Elevated Copy */}
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base font-light leading-relaxed mb-6">
            We don't simply manage routes; we curate seamless transitions. Designed for those who demand absolute punctuality, discretion, and a flawless cabin experience, our bespoke service redefines the architecture of your travel day.
          </p>

          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-8">
            From private aviation arrivals to multi-stop corporate schedules across Chicago, our impeccably maintained fleet and highly trained chauffeurs ensure you arrive prepared, rested, and precisely on time.
          </p>

          {/* Brand Promise Pillars */}
          <div className="grid grid-cols-3 gap-4 w-full border-t border-b border-zinc-200 dark:border-zinc-900 py-6 mb-8">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck size={18} className="text-[#cda250] mb-2" />
              <span className="text-[10px] font-semibold tracking-wider uppercase text-zinc-800 dark:text-zinc-300">Vetted</span>
            </div>
            <div className="flex flex-col items-center text-center border-x border-zinc-200 dark:border-zinc-900">
              <Clock size={18} className="text-[#cda250] mb-2" />
              <span className="text-[10px] font-semibold tracking-wider uppercase text-zinc-800 dark:text-zinc-300">On-Time</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award size={18} className="text-[#cda250] mb-2" />
              <span className="text-[10px] font-semibold tracking-wider uppercase text-zinc-800 dark:text-zinc-300">Bespoke</span>
            </div>
          </div>

          {/* Modern Premium Button */}
          <a 
            href="#booking" 
            className="px-10 py-4 bg-[#cda250] hover:bg-[#b88e3d] text-zinc-950 font-bold tracking-[0.25em] text-xs uppercase transition-colors duration-300 rounded-sm shadow-md"
          >
            Request Private Car
          </a>
        </div>

      </div>
    </section>
  );
}