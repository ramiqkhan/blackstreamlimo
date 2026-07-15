import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our executive newsletter.');
  };

  return (
    <footer className="bg-stone-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <a href="#" className="text-xl font-sans font-semibold tracking-[0.25em] text-zinc-900 dark:text-white uppercase">
            BLACK<span className="text-[#d4af37] font-light">STREAM</span>
          </a>
          <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed pr-4">
            First-class ground transportation and professional chauffeur services tailored for corporate, private, and airport travel.
          </p>
          {/* Custom SVG Social Icons */}
          <div className="flex gap-4 mt-2">
            {/* Instagram */}
            <a href="#" className="p-2 border border-zinc-200 dark:border-zinc-900 hover:border-[#d4af37] dark:hover:border-[#d4af37] text-zinc-600 dark:text-zinc-400 hover:text-[#d4af37] transition-all rounded" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="p-2 border border-zinc-200 dark:border-zinc-900 hover:border-[#d4af37] dark:hover:border-[#d4af37] text-zinc-600 dark:text-zinc-400 hover:text-[#d4af37] transition-all rounded" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="p-2 border border-zinc-200 dark:border-zinc-900 hover:border-[#d4af37] dark:hover:border-[#d4af37] text-zinc-600 dark:text-zinc-400 hover:text-[#d4af37] transition-all rounded" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-zinc-900 dark:text-white">
            Navigation
          </h3>
          <ul className="space-y-2.5 font-light text-zinc-600 dark:text-zinc-400">
            <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Our Services</a></li>
            <li><a href="#fleet" className="hover:text-[#d4af37] transition-colors">The Fleet</a></li>
            <li><a href="#booking" className="hover:text-[#d4af37] transition-colors">Online Booking</a></li>
            <li><a href="#about" className="hover:text-[#d4af37] transition-colors">About Blackstream</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-zinc-900 dark:text-white">
            Contact Us
          </h3>
          <ul className="space-y-3 font-light text-zinc-600 dark:text-zinc-400">
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-[#d4af37] shrink-0" />
              <a href="tel:+18005550199" className="hover:text-[#d4af37] transition-colors">+1 (800) 555-0199</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-[#d4af37] shrink-0" />
              <a href="mailto:bookings@blackstreamlimo.com" className="hover:text-[#d4af37] transition-colors">bookings@blackstreamlimo.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
              <span>725 5th Ave, New York, NY 10022</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-zinc-900 dark:text-white">
            Newsletter
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            Subscribe to receive corporate travel insights and luxury updates.
          </p>
          <form onSubmit={handleSubscribe} className="flex border border-zinc-300 dark:border-zinc-800 focus-within:border-[#d4af37] transition-colors">
            <input 
              type="email" 
              required
              placeholder="Your Business Email" 
              className="w-full bg-stone-50 dark:bg-zinc-950 px-3 py-2 text-xs outline-none text-zinc-800 dark:text-zinc-200 placeholder-zinc-400"
            />
            <button 
              type="submit" 
              className="bg-[#d4af37] text-black px-4 hover:bg-[#c59b27] transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Subscribe"
            >
              <ArrowRight size={14} />
            </button>
          </form>
        </div>

      </div>

      {/* Legal & Copyright */}
      <div className="border-t border-zinc-200 dark:border-zinc-900 py-8 bg-stone-200/50 dark:bg-zinc-950/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-zinc-500 tracking-wider">
          <div>
            © {new Date().getFullYear()} BLACKSTREAM GROUP. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Carrier Licensing</a>
          </div>
        </div>
      </div>

    </footer>
  );
}