import React, { useEffect, useState, useRef } from 'react';

// Highly-Optimized Smooth Counter Sub-Component
function AnimatedCounter({ target, duration = 2000, startTrigger }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  // Automatically separates numbers from symbols (e.g., "150+" -> "150" and "+", "24/7" -> "24" and "/7")
  const numericMatch = target.match(/^(\d+)/);
  const targetNumber = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = target.replace(/^\d+/, '');

  useEffect(() => {
    if (!startTrigger) return;

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Luxury easeOutExpo curve for buttery-smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeProgress * targetNumber);
      
      setCount(currentCount);

      if (progress < 1) {
        countRef.current = requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };

    countRef.current = requestAnimationFrame(step);

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current);
      }
    };
  }, [targetNumber, duration, startTrigger]);

  return (
    <span className="tabular-nums">
      {count}
      <span className="font-light text-zinc-950/80 ml-0.5">{suffix}</span>
    </span>
  );
}

export default function StatsStrip() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: '150+', label: 'Happy Clients', delay: 'delay-[100ms]' },
    { number: '15', label: 'Years Experience', delay: 'delay-[200ms]' },
    { number: '9', label: 'Fleet Vehicles', delay: 'delay-[300ms]' },
    { number: '24/7', label: 'Always Available', delay: 'delay-[400ms]' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-gradient-to-r from-[#b88e3d] via-[#cda250] to-[#e5c07b] py-16 md:py-20 text-zinc-950 overflow-hidden group/section border-y border-yellow-600/10"
    >
      {/* Premium ambient geometric background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none transition-transform duration-1000 group-hover/section:scale-105" />
      
      {/* Luxury dynamic glass shine sweep on hover */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover/section:translate-x-[100%] transition-transform duration-[2000ms] ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-0 items-center justify-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col items-center text-center group/card transition-all duration-500 ease-out hover:-translate-y-1.5
              animate-[fadeInUp_0.8s_ease-out_both] ${stat.delay}`}
            >
              {/* Stat Number */}
              <span className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-none mb-3.5 select-none transition-transform duration-300 ease-out group-hover/card:scale-105 inline-block text-zinc-950">
                <AnimatedCounter target={stat.number} duration={2200} startTrigger={isInView} />
              </span>
              
              {/* Stat Label */}
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-zinc-950/70 transition-colors duration-300 group-hover/card:text-zinc-950">
                {stat.label}
              </span>

              {/* Minimalist interactive underline indicator on hover */}
              <span className="w-0 h-[1px] bg-zinc-950/40 mt-2.5 transition-all duration-300 ease-out group-hover/card:w-10" />

              {/* Editorial Floating Divider Lines (Visible on desktop only) */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-14 bg-gradient-to-b from-transparent via-black/15 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}