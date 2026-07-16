import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../assets/cars/img6.jpg';
import exp from '../../assets/cars/exsprinter.jpg';
import img7 from '../../assets/cars/img7.jpg';
import exp3 from '../../assets/cars/exp3.jpg';

import img3 from '../../assets/cars/img3.jpg';
import img8 from '../../assets/cars/img8.jpg';
import img9 from '../../assets/cars/img9.jpg';
import img10 from '../../assets/cars/img10.jpg';

export default function FleetShowcase() {
  const showcaseData = [
    {
      id: 'executive-sprinter',
      category: 'Executive Sprinter',
      title: 'Business Class, On the Road',
      tagline: 'The Ultimate Corporate Mobile Command Center',
      mainImage: img6,
      desc: 'Custom-fitted with diamond-quilted leather captain seats, illuminated work tables, and programmable LED mood lighting. Engineered to serve as a seamless extension of your high-profile workspace.',
      features: [
        { title: 'Diamond-Quilted Leather Seating', desc: 'First-class captain chairs with premium custom stitching.' },
        { title: 'Illuminated Work Tables', desc: 'LED-edged executive tables perfect for meetings on the move.' },
        { title: 'Full Mood Lighting Control', desc: 'Blue, purple, or warm white ambiance config via cabin touchscreen.' },
        { title: 'Premium Sound & AV', desc: 'Studio-grade acoustics paired with high-definition display arrays.' },
        { title: 'Up to 14 Passengers', desc: 'Spacious high-roof layout optimized for corporate teams.' }
      ],
      gallery: [
        exp,
        img7,
        exp3
      ]
    },
    {
      id: 'escalade-suv',
      category: 'Luxury SUV',
      title: 'First-Class Executive Escort',
      tagline: 'Bold Presence & Uncompromising Privacy',
      mainImage: img10,
      desc: 'Our flagship Cadillac Escalade represents the pinnacle of premium road comfort. Ideal for secure diplomatic transfers, VIP arrivals, and rapid metropolitan travel.',
      features: [
        { title: 'Whisper-Quiet Cabin', desc: 'Advanced active noise cancellation and acoustic-laminated glass.' },
        { title: 'Executive Row Heated Seats', desc: 'Reclining rear captain seats equipped with dynamic lumbar massage.' },
        { title: 'Tri-Zone Climate Mastery', desc: 'Individualized, hyper-filtered cabin air controls for complete comfort.' },
        { title: 'Integrated Privacy Glass', desc: 'Deep-tinted security glass to guarantee absolute personal privacy.' },
        { title: 'Rear Seat Entertainment', desc: 'Dual independent displays with streaming capability and wireless audio.' }
      ],
      gallery: [
        img8,
        img9,
        img10,
    
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(showcaseData[0].id);
  const currentVehicle = showcaseData.find(v => v.id === activeTab) || showcaseData[0];
  const [activeImage, setActiveImage] = useState(currentVehicle.mainImage);

  // Sync active image when switching tabs
  const handleTabChange = (id) => {
    setActiveTab(id);
    const target = showcaseData.find(v => v.id === id);
    if (target) setActiveImage(target.mainImage);
  };

  return (
    <section className="border-t border-b border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-zinc-100 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900 py-24 text-zinc-800 dark:text-stone-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Interactive Luxury Tab Switcher */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-16 border-b border-zinc-200/60 dark:border-zinc-900 pb-6">
          {showcaseData.map((vehicle) => (
            <button
              key={vehicle.id}
              onClick={() => handleTabChange(vehicle.id)}
              className={`px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                activeTab === vehicle.id
                  ? 'bg-[#cda250] text-white dark:text-neutral-950 shadow-lg shadow-[#cda250]/20'
                  : 'bg-white/50 dark:bg-zinc-900/30 text-zinc-400 hover:text-zinc-800 dark:hover:text-white border border-zinc-200/50 dark:border-zinc-800/40'
              }`}
            >
              {vehicle.category}
            </button>
          ))}
        </div>

        {/* Main Content Split-Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Media & Interactive Gallery Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative h-[300px] md:h-[450px] w-full rounded-md overflow-hidden border border-zinc-200/80 dark:border-zinc-800/60 shadow-xl group">
              <img 
                src={activeImage} 
                alt={currentVehicle.title} 
                className="w-full h-full object-cover transition-all duration-[1000ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[#cda250] text-xs uppercase tracking-[0.2em] font-medium mb-1">
                  {currentVehicle.category}
                </p>
                <h4 className="text-white text-lg font-serif font-light tracking-wide">
                  {currentVehicle.tagline}
                </h4>
              </div>
            </div>

            {/* Thumbnail Gallery Navigation */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-semibold mb-3">
                Explore Interior Ambiance
              </p>
              <div className="grid grid-cols-4 gap-3">
                {/* Always include the main image as the first thumbnail */}
                <button
                  onClick={() => setActiveImage(currentVehicle.mainImage)}
                  className={`relative aspect-video rounded overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === currentVehicle.mainImage
                      ? 'border-[#cda250] scale-[0.98]'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={currentVehicle.mainImage} alt="Main" className="w-full h-full object-cover" />
                </button>

                {currentVehicle.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative aspect-video rounded overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === img
                        ? 'border-[#cda250] scale-[0.98]'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block: Pure Editorial Specs Sheet */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#cda250] font-semibold block mb-4">
                {currentVehicle.category} Experience
              </span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-zinc-900 dark:text-white font-light tracking-tight leading-tight mb-6">
                {currentVehicle.title}
              </h3>
              <div className="w-16 h-[1.5px] bg-[#cda250] mb-8" />
              
              <p className="text-zinc-500 dark:text-stone-300 text-sm md:text-base font-light leading-relaxed mb-8">
                {currentVehicle.desc}
              </p>

              {/* Redesigned Minimal Specs List */}
              <div className="space-y-6 mb-10">
                {currentVehicle.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="group/item flex items-start space-x-4 border-b border-zinc-150 dark:border-zinc-900/60 pb-5 last:border-0"
                  >
                    {/* Minimal Gold Square Badge */}
                    <div className="w-2.5 h-2.5 bg-[#cda250] mt-1.5 flex-shrink-0 transition-transform duration-300 group-hover/item:rotate-45" />
                    <div className="space-y-1">
                      <h5 className="text-xs uppercase tracking-[0.15em] text-zinc-900 dark:text-stone-100 font-semibold">
                        {feature.title}
                      </h5>
                      <p className="text-xs text-zinc-400 dark:text-stone-400 font-light">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium CTA Action */}
           <Link 
  to="/book"
  state={{ selectedVehicle: currentVehicle }}
  className="w-full md:w-auto px-10 py-4 bg-[#cda250] hover:bg-[#b88f40] text-white dark:text-neutral-950 text-xs font-bold uppercase tracking-[0.25em] rounded shadow-lg shadow-[#cda250]/10 hover:shadow-xl transition-all duration-300 ease-out flex items-center justify-center space-x-3 self-start text-center cursor-pointer"
>
  <span>Book {currentVehicle.category}</span>
  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</Link>
          </div>

        </div>
      </div>
    </section>
  );
}