import React from 'react';
import img3 from '../../assets/cars/img3.jpg';
import img5 from '../../assets/cars/img5.jpg';
import img6 from '../../assets/cars/img6.jpg';
import exs from '../../assets/cars/exsprinter.jpg';
import shuttle from '../../assets/cars/shuttlesp.jpg';
import party from '../../assets/cars/party.jpg';
import { Link } from 'react-router-dom';

export default function FleetSection() {
  const fleet = [
    {
      id: 'escalade',
      name: 'Luxury SUV – Escalade',
      tagline: 'Flagship Premium Comfort',
      image: img3,
      desc: 'Our flagship Cadillac Escalade offers a bold presence and pristine comfort. Perfect for executive transfers, airport arrivals, and VIP client service.',
      specs: { pax: '6 Passengers', luggage: '5 Bags', class: 'First Class' }
    },
    {
      id: 'stretch-limo',
      name: 'Stretch Limousine',
      tagline: 'Timeless Luxury Statement',
      image: img5,
      desc: 'Featuring a custom star-ceiling ambiance, crystal bar, and integrated LED lighting. The ultimate statement for weddings, prom nights, and VIP galas.',
      specs: { pax: '10 Passengers', luggage: '4 Bags', class: 'Ultra Luxury' }
    },
    {
      id: 'limo-sprinter',
      name: 'Limo Sprinter',
      tagline: 'Mobile Lounge Environment',
      image: img6,
      desc: 'Full-size LED color-changing ceiling, widescreen television array, quilted leather sofa seating, and private cabin configuration for up to 14 guests.',
      specs: { pax: '14 Passengers', luggage: '12 Bags', class: 'Premium VIP' }
    },
    {
      id: 'executive-sprinter',
      name: 'Executive Sprinter',
      tagline: 'Corporate Road-Office',
      image: exs,
      desc: 'Equipped with diamond-quilted leather captain seats, worktables, dynamic mood lighting, and USB-C connectivity. Ideal for corporate mobile meetings.',
      specs: { pax: '13 Passengers', luggage: '10 Bags', class: 'Executive' }
    },
    {
      id: 'shuttle-sprinter',
      name: 'Shuttle Sprinter',
      tagline: 'Group Transit Refined',
      image: shuttle,
      desc: 'Efficient 14-passenger luxury interior featuring high-back premium leather seats. Designed specifically for corporate retreats and dynamic airport runs.',
      specs: { pax: '14 Passengers', luggage: '14 Bags', class: 'Business Class' }
    },
    {
      id: 'party-bus',
      name: 'Party Bus',
      tagline: 'The Ultimate Celebration',
      image: party,
      desc: 'Teal & purple custom LED ceiling panels, premium club sound system, geometric light-up dancefloor, and wraparound leather lounge seating for up to 20 guests.',
      specs: { pax: '14 Passengers', luggage: '15 Bags', class: 'VIP Club Class' }
    }
  ];

  return (
    <section id="fleet" className="border-t border-b border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-zinc-100 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900 py-24 text-zinc-800 dark:text-stone-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Section Title */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-[#cda250] font-semibold block mb-4">
            Our Vehicles
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white font-light tracking-tight mb-6">
            The Elite Fleet
          </h2>
          <div className="w-12 h-[1px] bg-[#cda250] mx-auto mb-6" />
          <p className="text-zinc-500 dark:text-stone-400 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Every vehicle is meticulously engineered, sanitized, and outfitted to deliver the absolute peak of private transit safety, elegance, and comfort.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="group/card flex flex-col bg-white/90 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-900/60 rounded-md overflow-hidden hover:border-[#cda250]/40 dark:hover:border-[#cda250]/40 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-zinc-300/40 dark:hover:shadow-black/70"
            >
              {/* Image Box */}
              <div className="relative h-64 w-full overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent opacity-90" />
                
                {/* Float Category/Class Label */}
                <span className="absolute top-4 right-4 bg-white/95 dark:bg-zinc-950/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/80 text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded text-[#cda250]">
                  {vehicle.specs.class}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  {/* Tagline & Title */}
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#cda250] font-medium block mb-1">
                    {vehicle.tagline}
                  </span>
                  <h3 className="font-serif text-2xl text-zinc-900 dark:text-white font-light tracking-wide mb-4 group-hover/card:text-[#e5c07b] transition-colors duration-300">
                    {vehicle.name}
                  </h3>
                  
                  {/* Vehicle Technical Specifications Indicators */}
                  <div className="flex items-center space-x-4 mb-5 pb-5 border-b border-zinc-100 dark:border-zinc-900 text-xs text-zinc-500 dark:text-stone-400">
                    <div className="flex items-center space-x-1.5">
                      <svg className="w-4 h-4 text-[#cda250]/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>{vehicle.specs.pax}</span>
                    </div>
                    <div className="w-[1px] h-3 bg-zinc-200 dark:bg-zinc-800" />
                    <div className="flex items-center space-x-1.5">
                      <svg className="w-4 h-4 text-[#cda250]/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                      <span>{vehicle.specs.luggage}</span>
                    </div>
                  </div>

                  <p className="text-zinc-500 dark:text-stone-400 text-sm font-light leading-relaxed mb-8">
                    {vehicle.desc}
                  </p>
                </div>

                {/* Fixed Route Tag Component */}
                <Link 
                  to="/book" 
                  className="w-full flex items-center justify-center space-x-2 border border-[#cda250]/40 text-[#cda250] hover:bg-[#cda250] hover:text-neutral-950 group-hover/card:bg-[#cda250] group-hover/card:text-white dark:group-hover/card:text-neutral-950 py-3.5 rounded text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 ease-out text-center"
                >
                  <span>Book Ride</span>
                  <svg className="w-4 h-4 transform group-hover/card:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}