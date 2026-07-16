import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
// Replace this path with the actual location of your logo JPG
import logoImg from '../../src/assets/logo.png'

export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track the scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Occasions', href: '#occasions' },
    { label: 'Our Fleet', href: '#fleet' },
    { label: 'Areas Serviced', href: '#areas' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-stone-50/75 dark:bg-zinc-950/70 backdrop-blur-md border-zinc-200/50 dark:border-zinc-900/50 shadow-sm' 
          : 'bg-stone-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        
        {/* 1. DESKTOP LAYOUT (3-Column Grid for Perfect Center Logo) */}
        <div className="hidden md:grid grid-cols-3 items-center w-full">
          
          {/* Left Column: Navigation Links */}
          <nav className="flex items-center gap-6 lg:gap-8 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-800 dark:text-zinc-300">
            {navLinks.slice(0, 4).map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="hover:text-[#cda250] transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Center Column: Perfectly Centered Brand Logo */}
          <div className="flex justify-center">
            <a 
              href="#" 
              className="flex items-center gap-3 text-xl lg:text-2xl font-sans font-semibold tracking-[0.25em] text-zinc-900 dark:text-white hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              <img 
                src={logoImg} 
                alt="Blackstream Logo" 
                className="w-20 h-20 rounded-sm object-cover" // Keeps the logo neat and aligned
              />
              <span>
                BLACK<span className="text-[#cda250] font-light">STREAM</span>
              </span>
            </a>
          </div>

          {/* Right Column: Theme & Actions */}
          <div className="flex items-center justify-end gap-4">
            {/* Secondary navigation links */}
            <nav className="flex items-center gap-6 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-800 dark:text-zinc-300 mr-2">
              {navLinks.slice(4).map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="hover:text-[#cda250] transition-colors duration-200 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button 
              onClick={toggleTheme}
              className="p-2 border border-zinc-200 dark:border-zinc-900 hover:border-[#cda250] dark:hover:border-[#cda250] transition-all rounded cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun size={15} className="text-[#cda250]" />
              ) : (
                <Moon size={15} className="text-[#cda250]" />
              )}
            </button>
            
            <a 
              href="/book" 
              className="px-5 py-2.5 border border-[#cda250] hover:bg-[#cda250] hover:text-black dark:hover:text-neutral-950 text-[11px] uppercase tracking-widest text-[#cda250] transition-all duration-300 font-semibold rounded-sm"
            >
              Book Limo
            </a>
          </div>

        </div>

        {/* 2. MOBILE LAYOUT (Centering optimized for small screens) */}
        <div className="flex md:hidden justify-between items-center w-full">
          
          {/* Mobile Left: Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-zinc-900 dark:text-white p-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Center: Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 text-lg font-sans font-semibold tracking-[0.2em] text-zinc-900 dark:text-white"
          >
            <img 
              src={logoImg} 
              alt="Blackstream Logo" 
              className="w-6 h-6 rounded-sm object-cover"
            />
            <span>
              BLACK<span className="text-[#cda250] font-light">STREAM</span>
            </span>
          </a>

          {/* Mobile Right: Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 border border-zinc-200 dark:border-zinc-900 rounded cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun size={15} className="text-[#cda250]" />
            ) : (
              <Moon size={15} className="text-[#cda250]" />
            )}
          </button>

        </div>

      </div>

      {/* 3. MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-6 flex flex-col gap-4 text-xs font-bold tracking-widest uppercase transition-all">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-800 dark:text-zinc-300 hover:text-[#cda250] py-2.5 border-b border-zinc-200/50 dark:border-zinc-800/50"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="/book" 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3.5 bg-[#cda250] text-white dark:text-neutral-950 text-xs font-semibold uppercase tracking-widest rounded-sm"
          >
            Book Limo
          </a>
        </div>
      )}
    </header>
  );
}