import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
// import Footer from './components/Footer';

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
    <Router>
      <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 transition-colors duration-300 flex flex-col justify-between">
        
        {/* Navigation Bar */}
        {/* <Navbar theme={theme} toggleTheme={toggleTheme} /> */}

        {/* Main Content Area handled by Router */}
        <main className="flex-grow animate-fadeIn">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookingPage />} />
          </Routes>
        </main>

        {/* Footer */}
        {/* <Footer /> */}
        
      </div>
    </Router>
  );
}