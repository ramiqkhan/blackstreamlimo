import React from 'react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg className="w-4 h-4 text-[#cda250]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Professional Chauffeurs',
      desc: 'Licensed, background-checked, and rigorously trained to the absolute highest standards of discretion, protective safety, and white-glove hospitality.'
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#cda250]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      title: 'Real-Time Flight Tracking',
      desc: 'We continuously monitor commercial and private arrivals. No matter if your flight is early or delayed, your chauffeur is on-site before you touch down.'
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#cda250]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '24/7 Dispatch Availability',
      desc: 'Late-night arrivals, early morning board meetings, or impromptu adjustments—our dedicated dispatch team operations are live 365 days a year.'
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#cda250]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Immaculate Fleet',
      desc: 'Every luxury sedan, SUV, and sprinter is meticulously detailed, sanitized, and fully provisioned with premium refreshments and connectivity.'
    }
  ];

  return (
    /* 
      Top Zinc -> Mid Black -> Bottom Zinc Gradient Flow
      Refined border styling to separate your landing sections seamlessly.
    */
    <section className="border-t border-b border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-zinc-100 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900 py-24 text-zinc-800 dark:text-stone-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Narrative & Interactive Features List */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-[#cda250] font-semibold block mb-4">
                Why Choose Us
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white font-light tracking-tight mb-6">
                Where Every Ride is First-Class
              </h2>
              <div className="w-16 h-[1px] bg-[#cda250] mb-6" />
              <p className="text-zinc-500 dark:text-stone-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
                At Blackstream Limo, we believe luxury is far more than a premium vehicle—it is a thoroughly integrated, stress-free transit experience tailored to your exact pacing.
              </p>
            </div>

            {/* Custom Interactive Features List */}
            <div className="space-y-4">
              {features.map((item, idx) => (
                <div 
                  key={idx}
                  className="group flex items-start space-x-5 p-5 bg-white/50 dark:bg-zinc-950/20 hover:bg-white dark:hover:bg-zinc-950/60 border border-transparent hover:border-zinc-200/80 dark:hover:border-zinc-900/50 rounded-md transition-all duration-500 ease-out hover:shadow-xl hover:shadow-[#cda250]/5"
                >
                  {/* Icon Box with Gold Border Accents */}
                  <div className="w-10 h-10 rounded bg-[#cda250]/5 dark:bg-[#cda250]/10 border border-zinc-200 dark:border-zinc-800/80 group-hover:border-[#cda250] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    {item.icon}
                  </div>

                  {/* Feature Content */}
                  <div className="space-y-1">
                    <h4 className="text-sm uppercase tracking-[0.15em] font-bold text-zinc-900 dark:text-stone-100 group-hover:text-[#e5c07b] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 dark:text-stone-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Immersive Cinematic Image Frame */}
          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-900 shadow-2xl shadow-black/80">
              
              {/* Outer Glow Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#cda250] z-10 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#cda250] z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

              {/* Main Photo (Tall Portrait Architecture / Fleet Mix) */}
              <div className="relative h-[480px] md:h-[620px] w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop" 
                  alt="Elite City Car Service" 
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 filter brightness-90 dark:brightness-75 contrast-110"
                />
                
                {/* Custom Gradient overlay to maximize contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                
                {/* Discrete overlay text */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#cda250] block mb-2 font-semibold">
                    The Gold Standard
                  </span>
                  <h4 className="font-serif text-2xl font-light tracking-wide leading-tight">
                    Flawless arrivals, <br />every single time.
                  </h4>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}