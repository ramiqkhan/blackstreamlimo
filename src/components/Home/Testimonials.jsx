import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      initials: 'J',
      name: 'J.',
      date: 'May 2026',
      rating: 5,
      text: '"Wow. What a memorable ride with a young handsome guy Zee. He was well presented, polite and entertaining. He made our ride so exciting we wanted to keep him longer. Best service I have received in ages. It felt really comfortable. Would recommend everyone to give it a try and feel my experience. Thanks Zee"',
      link: '#',
    },
    {
      initials: 'PA',
      name: 'Pamela Akins',
      date: 'May 2026',
      rating: 5,
      text: '"Very professional clean and luxury style had it for my mothers funeral and it made my day a little at ease will defly recommend"',
      link: '#',
    },
    {
      initials: 'AW',
      name: 'Anisa Woods',
      date: 'May 2026',
      rating: 5,
      text: '"Wonderful service i would recommend this company for any occasion. Very professional and prompt."',
      link: '#',
    },
  ];

  return (
    /* 
      Top Zinc -> Mid Black -> Bottom Zinc Gradient Flow
      Perfect match for your premium brand ecosystem.
    */
    <section id="reviews" className="border-t border-b border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-zinc-100 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900 py-24 text-zinc-800 dark:text-stone-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-[#cda250] font-semibold block mb-4">
            Client Reviews
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white font-light tracking-tight mb-6">
            What Our Clients Say
          </h2>
          <div className="w-12 h-[1px] bg-[#cda250] mx-auto mb-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="group flex flex-col justify-between p-8 bg-white/70 dark:bg-zinc-950/30 border border-zinc-200/80 dark:border-zinc-900/50 rounded-md transition-all duration-500 ease-out hover:border-[#cda250]/40 dark:hover:border-[#cda250]/40 hover:shadow-xl hover:shadow-[#cda250]/5 hover:-translate-y-1"
            >
              <div>
                {/* Review Header (Avatar & Platform) */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    {/* Monogram Avatar */}
                    <div className="w-11 h-11 rounded-full bg-[#cda250]/10 border border-[#cda250]/30 flex items-center justify-center">
                      <span className="text-[#cda250] font-serif text-sm font-semibold tracking-wide">
                        {review.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-white">
                        {review.name}
                      </h4>
                      {/* Interactive Gold Stars */}
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg 
                            key={i} 
                            className="w-3 h-3 text-[#cda250] fill-current" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clean Google Logo Icon */}
                  <div className="flex items-center space-x-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-semibold tracking-tight text-zinc-400 dark:text-stone-400">Google</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="font-serif italic text-sm md:text-base text-zinc-600 dark:text-stone-300 leading-relaxed font-light mb-8">
                  {review.text}
                </p>
              </div>

              {/* Card Footer Info */}
              <div className="flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-zinc-900/60 text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                <span>{review.date}</span>
                <a 
                  href={review.link} 
                  className="flex items-center space-x-1 text-[#cda250] hover:text-[#b88f40] font-semibold transition-colors duration-300"
                >
                  <span>View on Google</span>
                  <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Row */}
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 dark:text-stone-500 font-semibold">
            Loved your ride with us?
          </p>
          <div className="flex justify-center">
            <button className="flex items-center space-x-2 px-10 py-4 bg-[#cda250] hover:bg-[#b88f40] text-white dark:text-neutral-950 text-xs font-bold uppercase tracking-[0.25em] rounded shadow-lg shadow-[#cda250]/15 hover:shadow-xl hover:shadow-[#cda250]/20 transition-all duration-300 ease-out">
              <span className="text-sm">★</span>
              <span>Leave Us A Google Review</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}