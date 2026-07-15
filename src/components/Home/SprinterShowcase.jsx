import React, { useState } from 'react';

export default function SprinterShowcase() {
  // Curated premium images representing different aspects of the luxury sprinter
  const gallery = [
    {
      id: 'exterior',
      title: 'The Arrival',
      subtitle: 'Sleek Executive Presence',
      url: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'ceiling',
      title: 'Full-Color LED Ceiling',
      subtitle: 'Immersive Lighting Atmosphere',
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'seating',
      title: 'Quilted Leather Seating',
      subtitle: 'Ultra-Comfort Lounge Configuration',
      url: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'entertainment',
      title: 'Widescreen Entertainment',
      subtitle: 'Premium Audio & Visual Hub',
      url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const [activeMedia, setActiveMedia] = useState(gallery[0]);

  const features = [
    {
      id: 'ceiling',
      title: 'Full-Color LED Ceiling Display',
      desc: 'Programmable RGB ceiling panels that morph to match your vibe, creating a one-of-a-kind immersive cabin atmosphere.',
      mediaIndex: 1
    },
    {
      id: 'entertainment',
      title: 'Widescreen Entertainment TV',
      desc: 'An array of large built-in smart displays paired with high-bandwidth streaming to showcase custom media or live videos.',
      mediaIndex: 3
    },
    {
      id: 'seating',
      title: 'Quilted Leather Sofa Seating',
      desc: 'Premium hand-stitched, U-shaped leather lounge seating configured for conversational comfort for up to 14 guests.',
      mediaIndex: 2
    },
    {
      id: 'sound',
      title: 'Premium Studio-Grade Sound System',
      desc: 'Club-quality acoustics, heavy-hitting subwoofers, and pristine amplifiers calibrated for absolute acoustic precision.',
      mediaIndex: 3
    }
  ];

  return (
    <section className="bg-neutral-950 py-28 text-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Section Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
          
          {/* Left: Content and Specs */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-[#cda250] font-semibold block mb-3">
                Limo Sprinter Experience
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-light tracking-tight leading-tight mb-6">
                A Party Venue <br />on Wheels
              </h2>
              <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed">
                Our bespoke Limo Sprinter is fully transformed inside—blending club-grade engineering with high-end executive aesthetics to keep your party moving.
              </p>
            </div>

            {/* Interactive Feature Accordion List */}
            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => setActiveMedia(gallery[feature.mediaIndex])}
                  className={`group p-4 rounded border transition-all duration-300 cursor-pointer ${
                    activeMedia.id === gallery[feature.mediaIndex].id
                      ? 'bg-neutral-900/60 border-[#cda250]/40'
                      : 'bg-transparent border-neutral-900 hover:border-neutral-800'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-1">
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                      activeMedia.id === gallery[feature.mediaIndex].id ? 'bg-[#cda250]' : 'bg-neutral-700 group-hover:bg-neutral-500'
                    }`} />
                    <h4 className={`text-xs uppercase tracking-wider font-semibold transition-colors duration-300 ${
                      activeMedia.id === gallery[feature.mediaIndex].id ? 'text-[#cda250]' : 'text-stone-300 group-hover:text-white'
                    }`}>
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-stone-400 text-xs font-light leading-relaxed pl-4">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <button className="relative group/btn overflow-hidden border border-[#cda250]/60 text-white hover:text-neutral-950 px-8 py-4 rounded text-xs font-semibold uppercase tracking-[0.3em] transition-colors duration-300">
                <span className="absolute inset-0 bg-[#cda250] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out z-0" />
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Book the Limo Sprinter</span>
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right: Immersive Media Frame & Gallery */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Main Stage Image with overlapping layout */}
            <div className="relative group/stage rounded-md overflow-hidden aspect-[4/3] bg-neutral-900 border border-neutral-800/40 shadow-2xl shadow-black">
              {/* Gold frame accent behind the stage */}
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#cda250]/30 -z-10" />
              
              <img
                src={activeMedia.url}
                alt={activeMedia.title}
                className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out scale-100 group-hover/stage:scale-105"
              />
              {/* Dark vignette gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
              
              {/* Dynamic Image Info HUD */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#cda250] font-semibold block mb-1">
                    {activeMedia.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-light tracking-wide">
                    {activeMedia.title}
                  </h3>
                </div>
                <div className="text-stone-500 text-xs font-mono">
                  [ 0{gallery.findIndex(m => m.id === activeMedia.id) + 1} / 0{gallery.length} ]
                </div>
              </div>
            </div>

            {/* Micro Gallery Carousel Thumbnails */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {gallery.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMedia(item)}
                  className={`relative aspect-[4/3] rounded overflow-hidden transition-all duration-300 border-2 ${
                    activeMedia.id === item.id 
                      ? 'border-[#cda250] scale-[0.98]' 
                      : 'border-transparent opacity-50 hover:opacity-100 hover:scale-[1.02]'
                  }`}
                >
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-neutral-950/20" />
                  <div className="absolute top-2 left-2 bg-neutral-950/80 px-1.5 py-0.5 rounded text-[8px] font-mono text-stone-300">
                    0{idx + 1}
                  </div>
                </button>
              ))}
            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
}