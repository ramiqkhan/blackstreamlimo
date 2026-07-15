import React, { useState } from 'react';
import { MapPin, Calendar, Clock4, ArrowRight } from 'lucide-react';

export default function BookingEngine() {
  const [serviceType, setServiceType] = useState('hourly');
  const [selectedVehicle, setSelectedVehicle] = useState('sedan');
  const [hours, setHours] = useState(3);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  const rates = {
    sedan: { name: 'Executive Sedan', hourlyRate: 95 },
    suv: { name: 'Premium SUV', hourlyRate: 135 },
    stretch: { name: 'Ultra Stretch Limo', hourlyRate: 185 }
  };

  const calculateEstimate = () => {
    const base = rates[selectedVehicle].hourlyRate * hours;
    return serviceType === 'airport' ? base + 45 : base; 
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation request received! Your total estimate is $${calculateEstimate()}.`);
  };

  return (
    <section id="booking" className="py-20 max-w-5xl mx-auto px-6">
      <div className="text-center mb-12">
        <span className="text-[#d4af37] text-xs uppercase tracking-widest block mb-2">Live Estimate Pricing</span>
        <h2 className="text-2xl md:text-4xl font-light tracking-wide text-zinc-900 dark:text-white uppercase">Instant Booking Form</h2>
        <div className="w-12 h-[1px] bg-[#d4af37] mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <form onSubmit={handleBookingSubmit} className="lg:col-span-2 bg-stone-100 dark:bg-zinc-900/60 p-8 rounded-sm border border-zinc-200 dark:border-zinc-900/80 shadow-sm flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold mb-2 text-zinc-700 dark:text-zinc-300">Service Format</label>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  type="button" 
                  onClick={() => setServiceType('hourly')}
                  className={`py-2 text-xs uppercase tracking-widest font-bold border transition-all cursor-pointer ${serviceType === 'hourly' ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37]' : 'border-zinc-300 dark:border-zinc-800 hover:border-zinc-400'}`}
                >
                  Hourly Chauffeur
                </button>
                <button 
                  type="button" 
                  onClick={() => setServiceType('airport')}
                  className={`py-2 text-xs uppercase tracking-widest font-bold border transition-all cursor-pointer ${serviceType === 'airport' ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37]' : 'border-zinc-300 dark:border-zinc-800 hover:border-zinc-400'}`}
                >
                  Airport Transfer
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold mb-2 text-zinc-700 dark:text-zinc-300">Vehicle Type</label>
              <select 
                value={selectedVehicle}
                onChange={(e) => setSelectedVehicle(e.target.value)}
                className="w-full bg-stone-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 p-2.5 text-xs tracking-wider outline-none text-zinc-800 dark:text-zinc-200"
              >
                <option value="sedan">Executive Sedan (M-S Class)</option>
                <option value="suv">Premium SUV (Cadillac Escalade)</option>
                <option value="stretch">Stretch Limousine (Lincoln MKT)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold mb-2 text-zinc-700 dark:text-zinc-300">Pickup Location</label>
              <div className="relative">
                <MapPin size={14} className="absolute left-3 top-3.5 text-[#d4af37]" />
                <input 
                  type="text" 
                  required 
                  placeholder="e.g., Downtown Executive Hotel"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 p-2.5 pl-9 text-xs tracking-wider outline-none text-zinc-800 dark:text-zinc-200 placeholder-zinc-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold mb-2 text-zinc-700 dark:text-zinc-300">Destination</label>
              <div className="relative">
                <MapPin size={14} className="absolute left-3 top-3.5 text-[#d4af37]" />
                <input 
                  type="text" 
                  required 
                  placeholder="e.g., Int'l Airport Terminal"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 p-2.5 pl-9 text-xs tracking-wider outline-none text-zinc-800 dark:text-zinc-200 placeholder-zinc-400"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold mb-2 text-zinc-700 dark:text-zinc-300">Departure Date & Time</label>
              <div className="relative">
                <Calendar size={14} className="absolute left-3 top-3.5 text-[#d4af37]" />
                <input 
                  type="datetime-local" 
                  required 
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 p-2.5 pl-9 text-xs tracking-wider outline-none text-zinc-800 dark:text-zinc-200"
                />
              </div>
            </div>

            {serviceType === 'hourly' && (
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold mb-2 text-zinc-700 dark:text-zinc-300">Duration Needed</label>
                <div className="relative">
                  <Clock4 size={14} className="absolute left-3 top-3.5 text-[#d4af37]" />
                  <select 
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full bg-stone-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 p-2.5 pl-9 text-xs tracking-wider outline-none text-zinc-800 dark:text-zinc-200"
                  >
                    {[2, 3, 4, 5, 6, 8, 10, 12].map(h => (
                      <option key={h} value={h}>{h} Hours</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>

          <button type="submit" className="w-full mt-2 py-4 bg-[#d4af37] hover:bg-[#c59b27] text-black font-semibold tracking-widest text-xs uppercase transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer">
            Submit Reservation Request <ArrowRight size={14} />
          </button>
        </form>

        {/* Pricing Estimation Sidebar */}
        <div className="bg-stone-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-900 p-8 flex flex-col justify-between">
          <div>
            <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.3em] font-semibold block mb-2">Estimate Breakdown</span>
            <h3 className="text-lg font-light text-zinc-900 dark:text-white uppercase mb-4">Your Trip Details</h3>
            <div className="space-y-4 text-xs tracking-wider">
              <div className="flex justify-between border-b border-zinc-300 dark:border-zinc-800 pb-2">
                <span className="text-zinc-500">Vehicle Tier:</span>
                <span className="font-bold text-zinc-900 dark:text-white">{rates[selectedVehicle].name}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-300 dark:border-zinc-800 pb-2">
                <span className="text-zinc-500">Service Format:</span>
                <span className="font-bold text-zinc-900 dark:text-white uppercase">{serviceType}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-300 dark:border-zinc-800 pb-2">
                <span className="text-zinc-500">Base Hourly Rate:</span>
                <span className="font-bold text-zinc-900 dark:text-white">${rates[selectedVehicle].hourlyRate}/hr</span>
              </div>
              {serviceType === 'hourly' && (
                <div className="flex justify-between border-b border-zinc-300 dark:border-zinc-800 pb-2">
                  <span className="text-zinc-500">Duration:</span>
                  <span className="font-bold text-zinc-900 dark:text-white">{hours} Hours</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-zinc-300 dark:border-zinc-800 text-center">
            <span className="text-[10px] tracking-widest uppercase block text-zinc-500 mb-1">Estimated Total Charge</span>
            <div className="text-4xl font-light text-[#d4af37] font-mono mb-2">${calculateEstimate()}</div>
            <p className="text-[10px] leading-relaxed text-zinc-400">Gratuity and tax details calculated at check-in.</p>
          </div>
        </div>

      </div>
    </section>
  );
}