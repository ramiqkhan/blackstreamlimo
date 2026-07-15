import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';


export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  // Sync Tailwind classes dynamically to documentElement
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
      
      {/* Navigation Bar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Home Page */}
      <Home />

      {/* Footer */}
      <Footer />
      
    </div>
  );
}