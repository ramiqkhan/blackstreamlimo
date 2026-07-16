import React, { useState, useMemo } from 'react';
import { Users, Briefcase, ShieldCheck, Sparkles, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import img2 from '../../assets/cars/img2.jpg'; 
import img4 from '../../assets/cars/img4.jpg'; 
import Eqs from '../../assets/cars/EQS.jpg'; 
import cad from '../../assets/cars/cad.jpg'; 
import img8 from '../../assets/cars/img8.jpg'; 
import img10 from '../../assets/cars/img10.jpg'; 
import exp from '../../assets/cars/exsprinter.jpg'; 
import img6 from '../../assets/cars/img6.jpg'; 
import shuttlesp from '../../assets/cars/shuttlesp.jpg'; 

// 1. Scalable Fleet Dataset (Easily expand to 10, 20, or more cars)
const FLEET_DATA = [
  // --- EXECUTIVE SEDANS ---
  {
    id: 's-class',
    category: 'Sedans',
    model: 'Mercedes-Benz S-Class',
    tagline: 'The Absolute Standard of First-Class Travel',
    description: 'A masterpiece of intelligence and comfort. Features active air ride suspension, climate-controlled massage seats, and an ultra-quiet cabin tailored for executive travel.',
    specs: { passengers: '3 Pax', luggage: '3 Bags', safety: 'Pre-Safe Assist', comfort: 'Executive Seating' },
    image: Eqs
  },
  {
    id: 'bmw-7',
    category: 'Sedans',
    model: 'BMW 7 Series',
    tagline: 'Modern Luxury Meets Dynamic Design',
    description: 'Bold styling combined with cutting-edge digital integrations. Features an panoramic glass roof, customizable ambient lighting, and next-generation rear theater capabilities.',
    specs: { passengers: '3 Pax', luggage: '3 Bags', safety: 'Active Driving Assist', comfort: 'Theater Screen' },
    image: img2
  },
  {
    id: 'eqs',
    category: 'Sedans',
    model: 'Mercedes-Benz EQS Sedan',
    tagline: 'The Future of All-Electric Luxury',
    description: 'Electric mobility elevated to premium executive standards. Whisper-quiet, emissions-free travel boasting hyper-screen dashboards and supreme aerodynamic comfort.',
    specs: { passengers: '3 Pax', luggage: '3 Bags', safety: 'Distronic Plus', comfort: 'Zero-Emission Quiet' },
    image: img4
  },

  // --- PREMIUM SUVS ---
  {
    id: 'escalade',
    category: 'SUVs',
    model: 'Cadillac Escalade ESV',
    tagline: 'The Pinnacle of Command & Presence',
    description: 'Plush, extra-long executive wheelbase with extensive cabin room. Perfectly accommodates private groups and corporate clients requiring high-security road dominance.',
    specs: { passengers: '6 Pax', luggage: '6 Bags', safety: 'AWD Secure', comfort: 'Magnetic Ride Control' },
    image: cad
  },
  {
    id: 'navigator',
    category: 'SUVs',
    model: 'Lincoln Navigator L',
    tagline: 'Serene Sanctuary for the Road Ahead',
    description: 'Crafted for VIP comfort. Features Perfect Position 30-way adjustable leather seats, Revel Ultima premium audio, and generous cargo capacity for long-distance transfers.',
    specs: { passengers: '6 Pax', luggage: '6 Bags', safety: 'Co-Pilot 360', comfort: 'Massaging Seats' },
    image: img8
  },
  {
    id: 'suburban',
    category: 'SUVs',
    model: 'Chevrolet Suburban Premier',
    tagline: 'The Classic Standard for Group Utility',
    description: 'Spacious, reliable, and premium. A luxury standard for airport shuttle missions, families, and high-capacity luggage routes across the metropolitan landscape.',
    specs: { passengers: '7 Pax', luggage: '7 Bags', safety: 'Lane Keep Assist', comfort: 'Tri-Zone Climate' },
    image: img10
  },

  // --- EXECUTIVE SPRINTERS & LIMO BUSES ---
  {
    id: 'sprinter-exec',
    category: 'Sprinters',
    model: 'Mercedes-Benz Sprinter (Executive)',
    tagline: 'Corporate Class Group Transportation',
    description: 'Designed for corporate retreats, business teams, and high-end group airport shuttle transfers. Features dynamic standing height and individual power ports.',
    specs: { passengers: '14 Pax', luggage: '14 Bags', safety: 'Crosswind Assist', comfort: 'High-Roof Standing' },
    image: exp
  },
  {
    id: 'sprinter-limo',
    category: 'Sprinters',
    model: 'Mercedes-Benz Sprinter (Limo)',
    tagline: 'A Luxury Party Lounge on Wheels',
    description: 'The ultimate entertainment vehicle. Outfitted with premium leather U-shaped seating, fiber-optic color ceilings, wet bars, and professional studio sound.',
    specs: { passengers: '14 Pax', luggage: '10 Bags', safety: 'Active Brake Assist', comfort: 'RGB Ceiling & Smart TV' },
    image: img6
  },
  {
    id: 'liner',
    category: 'Sprinters',
    model: 'Luxury Coach Bus',
    tagline: 'Grand Scale VIP Group Logistics',
    description: 'For corporate events, weddings, and long-range road excursions. Blends heavy commercial structural safety with jet-like interior luxury styling.',
    specs: { passengers: '27 Pax', luggage: '27 Bags', safety: 'Full Air Brakes', comfort: 'Onboard Lavatory' },
    image: shuttlesp
  }
];

// Helper to filter out unique categories
const CATEGORIES = ['All', 'Sedans', 'SUVs', 'Sprinters'];

export default function ScalingFleetShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Dynamically Filter Fleet list based on Selected Category
  const filteredFleet = useMemo(() => {
    setCurrentIndex(0); // Reset sliding deck position when changing tabs
    if (selectedCategory === 'All') return FLEET_DATA;
    return FLEET_DATA.filter(car => car.category === selectedCategory);
  }, [selectedCategory]);

  // Current active car from the filtered slice
  const activeCar = filteredFleet[currentIndex] || FLEET_DATA[0];

  // Paginated slider controllers
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredFleet.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredFleet.length) % filteredFleet.length);
  };

  return (
    <section className="bg-neutral-950 py-20 md:py-28 text-stone-100 overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter Controls Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[#cda250] font-semibold block mb-3">
              Elite Luxury Fleet
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-tight leading-tight uppercase">
              The <span className="font-semibold italic text-[#cda250] normal-case">Blackstream</span> Collection
            </h2>
          </div>

          {/* Luxury Fleet Filtering Tabs */}
          <div className="flex flex-wrap gap-2 bg-neutral-900/40 p-1.5 rounded border border-neutral-900 self-start">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 rounded ${
                  selectedCategory === cat
                    ? 'bg-[#cda250] text-zinc-950 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT: Information & Specifications Panel */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            
            {/* Header / Brand info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#cda250] font-bold px-2 py-0.5 bg-[#cda250]/10 border border-[#cda250]/20 rounded-sm">
                  {activeCar.category}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-white font-light tracking-wide leading-tight">
                {activeCar.model}
              </h3>
              <p className="text-[#cda250] text-xs uppercase tracking-[0.2em] font-medium">
                {activeCar.tagline}
              </p>
              <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                {activeCar.description}
              </p>
            </div>

            {/* Performance/Utility Specs Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 border-t border-b border-neutral-900 py-6">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-neutral-900 rounded">
                  <Users size={16} className="text-[#cda250]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-zinc-500 block">Capacity</span>
                  <span className="text-xs font-semibold text-stone-200">{activeCar.specs.passengers}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-neutral-900 rounded">
                  <Briefcase size={16} className="text-[#cda250]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-zinc-500 block">Luggage</span>
                  <span className="text-xs font-semibold text-stone-200">{activeCar.specs.luggage}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-neutral-900 rounded">
                  <ShieldCheck size={16} className="text-[#cda250]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-zinc-500 block">Security Specs</span>
                  <span className="text-xs font-semibold text-stone-200">{activeCar.specs.safety}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-neutral-900 rounded">
                  <Sparkles size={16} className="text-[#cda250]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-zinc-500 block">Premium Feature</span>
                  <span className="text-xs font-semibold text-stone-200">{activeCar.specs.comfort}</span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons and Booking Integration */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href={`/book?vehicle=${encodeURIComponent(activeCar.model.toLowerCase())}`}
                className="w-full sm:w-auto relative group/btn overflow-hidden border border-[#cda250]/60 text-white hover:text-neutral-950 px-8 py-4 rounded text-xs font-bold uppercase tracking-[0.25em] transition-colors duration-300 flex items-center justify-center space-x-3"
              >
                <span className="absolute inset-0 bg-[#cda250] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out z-0" />
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Reserve {activeCar.category.slice(0, -1)}</span>
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              {/* Paginated Navigation HUD */}
              <div className="flex items-center space-x-4 self-center sm:ml-auto">
                <button
                  onClick={handlePrev}
                  className="p-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-stone-400 hover:text-white rounded transition-all duration-300"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-xs font-mono text-stone-500">
                  {currentIndex + 1} <span className="text-neutral-700">/</span> {filteredFleet.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-stone-400 hover:text-white rounded transition-all duration-300"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT: High-Impact Visual Frame Deck */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            
            {/* Visual Canvas */}
            <div className="relative group/stage rounded overflow-hidden aspect-[16/10] bg-neutral-900 border border-neutral-900 shadow-2xl shadow-black">
              <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded border border-neutral-800 text-[10px] font-mono tracking-wider text-[#cda250]">
                MODEL: {currentIndex + 1} of {filteredFleet.length} ({selectedCategory})
              </div>

              <img
                key={activeCar.id}
                src={activeCar.image}
                alt={activeCar.model}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out scale-100 group-hover/stage:scale-105"
              />
              
              {/* Ground Shadow & Atmospheric fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
            </div>

            {/* Quick Horizontal Scroll Track of the Active Category's Vehicles */}
            <div className="mt-6 flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-neutral-800">
              {filteredFleet.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex-shrink-0 relative w-32 aspect-[16/10] rounded overflow-hidden transition-all duration-300 border-2 ${
                    currentIndex === idx 
                      ? 'border-[#cda250] opacity-100 scale-95' 
                      : 'border-transparent opacity-40 hover:opacity-100'
                  }`}
                >
                  <img src={item.image} alt={item.model} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute bottom-1 left-2 text-[8px] font-mono text-white truncate max-w-[90%]">
                    {item.model.split(' ').slice(-1)[0]}
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