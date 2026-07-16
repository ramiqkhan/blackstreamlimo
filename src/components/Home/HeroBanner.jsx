import React from 'react';

export default function HeroBanner() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center bg-zinc-950 overflow-hidden"
    >
      {/* 1. Cinematic Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      >
        <source src="/banner.mp4" type="video/mp4" />
        {/* Fallback dark color is already handled by the bg-zinc-950 on the section tag */}
      </video>

      {/* 2. Dark Tint Overlay (Increased contrast for video motion) */}
      <div className="absolute inset-0 bg-black/65 md:bg-black/60 z-10" />

      {/* 3. Content Container */}
      <div className="relative z-25 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        
        {/* Top Accent Sub-header */}
        <span className="text-[#cda250] text-[10px] md:text-xs font-semibold uppercase tracking-[0.35em] mb-6">
          America's Premier Chauffeur Service
        </span>

        {/* Elegant Serif Main Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight max-w-4xl leading-[1.1] mb-6">
          Executive Transportation <br className="hidden sm:inline" />
          Service in Chicago
        </h1>

        {/* Clean, readable description */}
        <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-light max-w-2xl leading-relaxed mb-8">
          We go beyond driving — we deliver an experience. Whether it's a business meeting, 
          a special event, or a city night out, every ride is smooth, stylish, and unforgettable.
        </p>

        {/* Highlighted Phone Number */}
        <a 
          href="tel:+18334296111" 
          className="text-[#cda250] hover:text-[#e5ba69] text-base md:text-lg font-semibold tracking-widest mb-10 transition-colors duration-300"
        >
          +1 (833) 429-6111
        </a>

        {/* Flat Gold Action Button */}
        <a 
          href="/book" 
          className="px-10 py-4 bg-[#cda250] hover:bg-[#b88e3d] text-zinc-950 font-bold tracking-[0.2em] text-xs md:text-sm uppercase transition-colors duration-300 rounded-sm shadow-lg shadow-black/30"
        >
          Book Your Ride
        </a>

      </div>
    </section>
  );
}