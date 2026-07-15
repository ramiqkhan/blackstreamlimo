import React from 'react';

export default function AreasWeServe() {
  const serviceAreas = [
    {
      state: 'Illinois',
      columns: [
        ['Chicago', 'Joliet', 'Naperville', 'Elgin'],
        ['Aurora', 'Oak Brook', 'Buffalo Grove', 'Tinley Park'],
        ['Schaumburg', 'Orland Park', 'Palos Heights', 'Elmhurst']
      ]
    },
    {
      state: 'Indiana',
      columns: [
        ['Gary', 'Valparaiso', 'Indianapolis', 'South Bend']
      ]
    },
    {
      state: 'Wisconsin',
      columns: [
        ['Milwaukee', 'Madison', 'Kenosha', 'Racine']
      ]
    },
    {
      state: 'Michigan',
      columns: [
        ['Detroit', 'Grand Rapids', 'Kalamazoo', 'Ann Arbor']
      ]
    }
  ];

  return (
    /* 
      Top Zinc -> Mid Black -> Bottom Zinc Gradient Flow 
      Tailored for an ultra-premium luxury transport presentation.
    */
    <section id="areas" className="border-t border-b border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-zinc-100 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900 py-24 text-zinc-800 dark:text-stone-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-[#cda250] font-semibold block mb-4">
            Where We Operate
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white font-light tracking-tight mb-6">
            Areas We Serve
          </h2>
          <div className="w-12 h-[1px] bg-[#cda250] mx-auto mb-6" />
          <p className="text-zinc-500 dark:text-stone-400 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Blackstream Limo provides premium, executive-tier transportation across the greater Midwest region.
          </p>
        </div>

        {/* States and Cities Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {serviceAreas.map((area, areaIdx) => {
            // Give Illinois more grid weight since it has 3 columns of cities
            const gridSpan = area.state === 'Illinois' ? 'xl:col-span-6' : 'xl:col-span-2';

            return (
              <div key={areaIdx} className={`${gridSpan} space-y-6`}>
                {/* State Title Header */}
                <div className="flex items-center space-x-4">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#cda250] font-bold">
                    {area.state}
                  </span>
                  <div className="flex-1 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
                </div>

                {/* Cities Grid columns inside the state */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-4">
                  {area.columns.map((column, colIdx) => (
                    <div key={colIdx} className="space-y-3.5">
                      {column.map((city) => (
                        <div
                          key={city}
                          className="group flex items-center space-x-3 px-4 py-3 bg-white/70 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-900/60 rounded transition-all duration-300 hover:border-[#cda250]/40 dark:hover:border-[#cda250]/40 hover:shadow-lg hover:shadow-[#cda250]/5 hover:-translate-y-[1px]"
                        >
                          {/* Minimalist Location Pin */}
                          <svg
                            className="w-4 h-4 text-[#cda250]/70 group-hover:text-[#cda250] transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-xs font-medium tracking-wide text-zinc-700 dark:text-stone-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
                            {city}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Premium CTA button */}
        <div className="flex justify-center">
          <button className="px-10 py-4 bg-[#cda250] hover:bg-[#b88f40] text-white dark:text-neutral-950 text-xs font-bold uppercase tracking-[0.25em] rounded shadow-lg shadow-[#cda250]/15 hover:shadow-xl hover:shadow-[#cda250]/20 transition-all duration-300 ease-out flex items-center space-x-3">
            <span>Book in Your Area</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}