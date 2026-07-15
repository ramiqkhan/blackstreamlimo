import React, { useState } from 'react';
import { Shield, Star, Clock, HeartHandshake } from 'lucide-react';
import BookingEngine from '../components/Home/BookingEngine';

export default function BookingPage() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // Sync class list on the document root for Tailwind's class-based dark mode
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-950 text-zinc-100' : 'bg-stone-50 text-zinc-900'}`}>
      
      {/* 1. Header Navigation */}

      {/* 2. Page Hero Header */}
      <section className="relative py-20 overflow-hidden border-b border-zinc-200 dark:border-zinc-900">
        {/* Subtle background ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(205,162,80,0.03),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#cda250] mb-3 block">
            Secure Private Hire
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-zinc-900 dark:text-white mb-6">
            Reserve Your Journey
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            Experience chauffeured transit at its absolute peak. Complete our brief digital reservation system below to secure your vehicle and coordinate your chauffeur assignment.
          </p>
        </div>
      </section>

      {/* 3. Interactive Multi-Step Booking Engine */}
      <BookingEngine theme={theme} />

      {/* 4. Guarantee / Trust Badges Section */}
      <section className="py-16 border-t border-zinc-200 dark:border-zinc-900 bg-stone-100/50 dark:bg-zinc-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#cda250]/10 flex items-center justify-center text-[#cda250] mb-4">
                <Shield size={20} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-800 dark:text-white mb-2">
                Secure SSL Protocol
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light">
                Your payment data and personal travel schedules are encrypted end-to-end.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#cda250]/10 flex items-center justify-center text-[#cda250] mb-4">
                <Clock size={20} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-800 dark:text-white mb-2">
                Punctuality Promise
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light">
                Chauffeurs arrive at least 15 minutes before your scheduled departure window.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#cda250]/10 flex items-center justify-center text-[#cda250] mb-4">
                <HeartHandshake size={20} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-800 dark:text-white mb-2">
                Flexible Cancellation
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light">
                Cancel up to 24 hours prior to your reservation for a full refund of your hold.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#cda250]/10 flex items-center justify-center text-[#cda250] mb-4">
                <Star size={20} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-800 dark:text-white mb-2">
                Elite Fleet Standards
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light">
                All vehicles undergo daily rigorous sanitization and professional mechanical detailing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Minimal Editorial Footer */}
      <footer className="py-8 border-t border-zinc-200 dark:border-zinc-900 bg-stone-50 dark:bg-zinc-950 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
          &copy; {new Date().getFullYear()} BLACKSTREAM LIMO. All Rights Reserved. Securing Premium Luxury Private Hire.
        </p>
      </footer>

    </div>
  );
}