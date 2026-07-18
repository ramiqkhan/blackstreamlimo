import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sportingimg from '../../assets/sporting.jpg'; 
import quinceraimg from '../../assets/quincera.jpg'; 
import funeralImage from '../../assets/images.jpg'; 
import img5 from '../../assets/cars/limo.jpg'; 

export default function RouteCard() {
  const [activeFilter, setActiveFilter] = useState('all');

  const occasions = [
    {
      id: 'airport',
      title: 'Airport Limo Service',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop',
      size: 'md:col-span-2',
      desc: 'Seamless transfers with real-time flight tracking and professional chauffeur greeting.'
    },
    {
      id: 'wedding',
      title: 'Wedding Limo Service',
      category: 'celebration',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
      size: 'md:col-span-2',
      desc: 'Flawless coordination, red carpet entry, and pristine white-glove service for your perfect day.'
    },
    {
      id: 'quinceanera',
      title: 'Quinceañera Limo',
      category: 'celebration',
      image: quinceraimg,
      size: 'md:col-span-1',
      desc: 'Make her fairytale entrance unforgettable in absolute safety and high luxury.'
    },
    {
      id: 'anniversary',
      title: 'Anniversary Limo Service',
      category: 'celebration',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop',
      size: 'md:col-span-1',
      desc: 'Celebrate your milestone with champagne, ambient lighting, and intimate privacy.'
    },
    {
      id: 'graduation',
      title: 'Graduation Service',
      category: 'celebration',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop',
      size: 'md:col-span-1',
      desc: 'Celebrate academic milestones in a sleek, celebratory luxury ride with friends.'
    },
    {
      id: 'concert',
      title: 'Concert Limo Service',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop',
      size: 'md:col-span-1',
      desc: 'Skip the parking hassle and keep the pre-show VIP energy flowing directly to the gate.'
    },
    {
      id: 'sporting',
      title: 'Sporting Event Limo',
      category: 'events',
      image: sportingimg,
      size: 'md:col-span-1',
      desc: 'Arrive in tailgating style at the stadium, direct from your premium cabin.'
    },
    {
      id: 'prom',
      title: 'Prom Limo Service',
      category: 'celebration',
      image: img5,
      size: 'md:col-span-2',
      desc: 'Premium styling, heavy sound systems, and peace-of-mind parental safety guidelines.'
    },
    {
      id: 'birthday',
      title: 'Birthday Event Limo',
      category: 'celebration',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop',
      size: 'md:col-span-1',
      desc: 'Custom party routes, customizable dynamic lighting, and personalized luxury.'
    },
    {
      id: 'funeral',
      title: 'Funeral Service',
      category: 'corporate',
      image: funeralImage,
      size: 'md:col-span-1',
      desc: 'Dignified, highly respectful, and seamlessly coordinated transport for families.'
    }
  ];

  const filteredOccasions = activeFilter === 'all' 
    ? occasions 
    : occasions.filter(o => o.category === activeFilter);

  return (
    <section id="occasions" className="bg-neutral-950 py-24 text-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="text-center mb-16 text-stone-100">
          <span className="text-xs uppercase tracking-[0.35em] text-[#cda250] font-semibold block mb-4">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight mb-6">
            Every Occasion, Covered
          </h2>
          <div className="w-12 h-[1px] bg-[#cda250] mx-auto mb-6" />
          <p className="text-stone-400 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            From executive airport pickups to milestone dream weddings, we engineer impeccable transit logistics paired with certified professional chauffeurs.
          </p>
        </div>

        {/* Minimalist Filter Navigation */}
        <div className="w-full flex justify-center mb-16">
          <div className="flex items-center space-x-6 md:space-x-8 text-xs uppercase tracking-[0.25em] font-medium overflow-x-auto no-scrollbar max-w-full px-4 scroll-smooth">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'celebration', label: 'Celebrations' },
              { id: 'corporate', label: 'Corporate' },
              { id: 'events', label: 'Concerts & Sports' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`pb-2 border-b-2 whitespace-nowrap transition-all duration-300 ${
                  activeFilter === tab.id 
                    ? 'border-[#cda250] text-stone-100' 
                    : 'border-transparent text-stone-500 hover:text-stone-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[25rem]">
          {filteredOccasions.map((occasion) => (
            <Link
              key={occasion.id}
              to="/book" // Explicit root-relative path
              className={`relative overflow-hidden group/card rounded-sm bg-neutral-900 border border-neutral-800/40 block ${occasion.size}`}
            >
              {/* Added 'pointer-events-none' to prevent image click hijacking */}
              <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <img
                  src={occasion.image}
                  alt={occasion.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[20%] group-hover/card:grayscale-0 transition-all duration-[1200ms] ease-out scale-100 group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 opacity-70 group-hover/card:opacity-60 transition-opacity duration-500" />
              </div>

              {/* Content Overlay - already has pointer-events-none */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 pointer-events-none">
                <div className="transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 ease-out">
                  
                  {/* Small gold line accent */}
                  <span className="w-8 h-[1px] bg-[#cda250] block mb-3 scale-x-0 origin-left group-hover/card:scale-x-100 transition-transform duration-500" />
                  
                  {/* Title */}
                  <h3 className="font-serif text-2xl text-white font-light mb-2 tracking-wide">
                    {occasion.title}
                  </h3>
                  
                  {/* Dynamic description fading in on hover */}
                  <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed max-w-md h-0 opacity-0 group-hover/card:h-12 group-hover/card:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                    {occasion.desc}
                  </p>

                  {/* Minimalist interactive prompt */}
                  <div className="flex items-center space-x-2 text-[#cda250] text-[10px] uppercase tracking-[0.2em] font-semibold mt-4 translate-y-1 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <span>Reserve Route</span>
                    <svg 
                      className="w-4 h-4 transform group-hover/card:translate-x-1.5 transition-transform duration-300 ease-out" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                </div>
              </div>

              {/* Decorative Border Overlay - already has pointer-events-none */}
              <div className="absolute inset-0 border border-[#cda250]/0 group-hover/card:border-[#cda250]/20 transition-colors duration-500 pointer-events-none z-20" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}