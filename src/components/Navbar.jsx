import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 const navLinks = [
    { label: 'About', href: '#about' },            // Maps to <AboutSection /> / <WhyChooseUs />
    { label: 'Occasions', href: '#occasions' },    // Maps to <OccasionsSection />
    { label: 'Our Fleet', href: '#fleet' },        // Maps to <FleetSection /> / <SprinterShowcase /> / <FleetShowcase />
    { label: 'Areas Serviced', href: '#areas' },   // Maps to <AreasWeServe />
    { label: 'Reviews', href: '#reviews' },        // Maps to <Testimonials />
    { label: 'Reserve', href: '#booking' },        // Maps to <BookingEngine />
  ];
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-900 bg-stone-50/90 dark:bg-zinc-950/90 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a href="#" className="text-xl font-sans font-semibold tracking-[0.25em] text-zinc-900 dark:text-white hover:opacity-90 transition-opacity">
          BLACK<span className="text-[#d4af37] font-light">STREAM</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-800 dark:text-zinc-300">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="hover:text-[#d4af37] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 border border-zinc-200 dark:border-zinc-900 hover:border-[#d4af37] dark:hover:border-[#d4af37] transition-all rounded cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun size={16} className="text-[#d4af37]" />
            ) : (
              <Moon size={16} className="text-[#b2902b]" />
            )}
          </button>
          
          <a 
            href="#booking" 
            className="px-5 py-2 border border-[#d4af37] hover:bg-[#d4af37] hover:text-black text-xs uppercase tracking-widest text-[#d4af37] transition-all duration-300 font-medium"
          >
            Book Limo
          </a>
        </div>

        {/* Mobile Controls (Menu Trigger & Theme Toggle) */}
        <div className="md:hidden flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 border border-zinc-200 dark:border-zinc-900 rounded cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun size={15} className="text-[#d4af37]" />
            ) : (
              <Moon size={15} className="text-[#b2902b]" />
            )}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-zinc-900 dark:text-white p-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-6 flex flex-col gap-4 text-xs font-bold tracking-widest uppercase transition-all">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-800 dark:text-zinc-300 hover:text-[#d4af37] py-2 border-b border-zinc-200/50 dark:border-zinc-800/50"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#booking" 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-widest"
          >
            Book Limo
          </a>
        </div>
      )}
    </header>
  );
}