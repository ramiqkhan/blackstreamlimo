import React, { useState } from 'react';
import { 
  Clock, MapPin, Plus, Trash2, Users, Briefcase, ChevronRight, ArrowLeft, ShieldCheck, Plane 
} from 'lucide-react';

export default function BookingEngine({ theme }) {
  const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState('hourly'); // 'hourly' | 'oneway' | 'roundtrip'
  const [pickupType, setPickupType] = useState('address'); // 'address' | 'airport'
  const [dropoffType, setDropoffType] = useState('address'); // 'address' | 'airport'
  const [stops, setStops] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Form Fields State
  const [formData, setFormData] = useState({
    duration: '3 Hours',
    orderType: 'Corporate Event',
    pickupDateTime: '',
    pickupAddress: '',
    flightNumber: '',
    airline: '',
    dropoffAddress: '',
    passengerCount: 2,
    firstName: '',
    lastName: '',
    email: '',
    optionalEmail: '',
    phone: '',
    specialInstructions: ''
  });

  const vehicles = [
    {
      id: 'suv',
      name: 'Executive SUV',
      class: 'Cadillac Escalade or Lincoln Navigator',
      capacity: '6 Passengers',
      luggage: '6 Bags',
      price: '$150/hr',
      total: '$450',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'sedan',
      name: 'Premium Sedan',
      class: 'Mercedes-Benz S-Class or BMW 7 Series',
      capacity: '3 Passengers',
      luggage: '3 Bags',
      price: '$120/hr',
      total: '$360',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'sprinter',
      name: 'Luxury Sprinter Coach',
      class: 'Mercedes-Benz Sprinter Executive',
      capacity: '14 Passengers',
      luggage: '14 Bags',
      price: '$220/hr',
      total: '$660',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addStop = () => {
    setStops([...stops, { id: Date.now(), address: '' }]);
  };

  const removeStop = (id) => {
    setStops(stops.filter(stop => stop.id !== id));
  };

  const handleStopChange = (id, value) => {
    setStops(stops.map(stop => stop.id === id ? { ...stop, address: value } : stop));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted successfully:', { formData, tripType, pickupType, dropoffType, stops, selectedVehicle });
    alert('Reservation request received! We will contact you shortly.');
  };

  const isDark = theme === 'dark';

  return (    <section className="border-t border-b border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-zinc-100 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900 py-24 text-zinc-800 dark:text-stone-100 transition-all duration-300">

    <div className={`w-full max-w-4xl mx-auto p-1 transition-colors duration-300 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
      
      {/* Progress Timeline Header */}
      <div className="mb-10">
        <div className="flex items-center justify-between max-w-lg mx-auto relative">
          <div className={`absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 z-0 ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`} />
          <div 
            className="absolute left-0 top-1/2 h-[2px] bg-[#cda250] -translate-y-1/2 transition-all duration-500 z-0" 
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />

          {/* Step 1 Indicator */}
          <div className="z-10 flex flex-col items-center">
            <button 
              type="button"
              onClick={() => setStep(1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 border ${
                step >= 1 
                  ? 'bg-[#cda250] border-[#cda250] text-neutral-950 font-bold' 
                  : isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-500' : 'bg-white border-zinc-200 text-zinc-400'
              }`}
            >
              1
            </button>
            <span className={`text-[9px] uppercase tracking-wider font-semibold mt-3 ${step === 1 ? 'text-[#cda250]' : 'text-zinc-400'}`}>
              1. Trip Details
            </span>
          </div>

          {/* Step 2 Indicator */}
          <div className="z-10 flex flex-col items-center">
            <button 
              type="button"
              onClick={() => step > 1 && setStep(2)}
              disabled={step < 2}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 border ${
                step >= 2 
                  ? 'bg-[#cda250] border-[#cda250] text-neutral-950 font-bold' 
                  : isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-500' : 'bg-white border-zinc-200 text-zinc-400'
              }`}
            >
              2
            </button>
            <span className={`text-[9px] uppercase tracking-wider font-semibold mt-3 ${step === 2 ? 'text-[#cda250]' : 'text-zinc-400'}`}>
              2. Select Vehicle
            </span>
          </div>

          {/* Step 3 Indicator */}
          <div className="z-10 flex flex-col items-center">
            <button 
              type="button"
              disabled={step < 3}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 border ${
                step === 3 
                  ? 'bg-[#cda250] border-[#cda250] text-neutral-950 font-bold' 
                  : isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-500' : 'bg-white border-zinc-200 text-zinc-400'
              }`}
            >
              3
            </button>
            <span className={`text-[9px] uppercase tracking-wider font-semibold mt-3 ${step === 3 ? 'text-[#cda250]' : 'text-zinc-400'}`}>
              3. Passenger Info
            </span>
          </div>
        </div>
      </div>

      {/* Master Steps Form Card */}
      <div className={`border rounded-lg shadow-2xl p-6 md:p-10 transition-all duration-300 ${
        isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200/80'
      }`}>
        
        {/* ================= STEP 1: TRIP DETAILS ================= */}
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h3 className={`font-serif text-2xl font-light mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Step 1: Configure Itinerary
              </h3>
              <p className={`text-xs font-light ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Provide your pickup schedule, destination coordinates, and cabin specifications.
              </p>
            </div>

            {/* Trip Type Selector */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
                Trip Type *
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'hourly', label: 'Hourly Service', icon: <Clock size={14} /> },
                  { id: 'oneway', label: 'One Way', icon: <MapPin size={14} /> },
                  { id: 'roundtrip', label: 'Round Trip', icon: <Plus size={14} /> }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setTripType(type.id)}
                    className={`flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded border transition-all duration-300 cursor-pointer ${
                      tripType === type.id
                        ? 'border-[#cda250] bg-[#cda250]/10 text-[#cda250] font-bold'
                        : isDark 
                          ? 'border-zinc-900 hover:border-zinc-700 bg-transparent text-zinc-500' 
                          : 'border-zinc-200 hover:border-zinc-400 bg-transparent text-zinc-500'
                    }`}
                  >
                    {type.icon}
                    <span className="hidden sm:inline">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Input Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Duration (For hourly service) */}
              {tripType === 'hourly' && (
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
                    Duration Required *
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className={`border rounded p-3 text-xs focus:outline-none focus:border-[#cda250] transition-colors duration-300 ${
                      isDark ? 'bg-zinc-950 border-zinc-900 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
                    }`}
                  >
                    <option value="3 Hours">3 Hours (Minimum)</option>
                    <option value="4 Hours">4 Hours</option>
                    <option value="5 Hours">5 Hours</option>
                    <option value="8 Hours">8 Hours (Full Day)</option>
                    <option value="12 Hours">12 Hours</option>
                  </select>
                </div>
              )}

              {/* Order Type */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
                  Order Type *
                </label>
                <select
                  name="orderType"
                  value={formData.orderType}
                  onChange={handleInputChange}
                  className={`border rounded p-3 text-xs focus:outline-none focus:border-[#cda250] transition-colors duration-300 ${
                    isDark ? 'bg-zinc-950 border-zinc-900 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
                  }`}
                >
                  <option value="Corporate Event">Corporate Travel</option>
                  <option value="Airport Transfer">Airport Arrival / Departure</option>
                  <option value="Wedding">Wedding Celebration</option>
                  <option value="Private Occasion">Private Occasion</option>
                </select>
              </div>

              {/* Date & Time Selection */}
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
                  Pick-up Date & Time *
                </label>
                <input
                  type="datetime-local"
                  name="pickupDateTime"
                  value={formData.pickupDateTime}
                  onChange={handleInputChange}
                  className={`w-full border rounded p-3 text-xs focus:outline-none focus:border-[#cda250] transition-colors duration-300 ${
                    isDark ? 'bg-zinc-950 border-zinc-900 text-zinc-100 scheme-dark' : 'bg-white border-zinc-200 text-zinc-800 scheme-light'
                  }`}
                />
              </div>
            </div>

            {/* Pickup Address & Optional Flight info */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
                  Pick-Up Location *
                </label>
                <div className={`flex border rounded overflow-hidden ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`}>
                  <button
                    type="button"
                    onClick={() => setPickupType('address')}
                    className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      pickupType === 'address' ? 'bg-[#cda250]/15 text-[#cda250]' : 'text-zinc-500'
                    }`}
                  >
                    Address
                  </button>
                  <button
                    type="button"
                    onClick={() => setPickupType('airport')}
                    className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      pickupType === 'airport' ? 'bg-[#cda250]/15 text-[#cda250]' : 'text-zinc-500'
                    }`}
                  >
                    Airport
                  </button>
                </div>
              </div>

              <input
                type="text"
                name="pickupAddress"
                placeholder={pickupType === 'airport' ? 'Enter Airport Code (e.g., ORD, LAX, JFK)' : 'Enter Pick-Up Location'}
                value={formData.pickupAddress}
                onChange={handleInputChange}
                className={`w-full border rounded p-3 text-xs focus:outline-none focus:border-[#cda250] placeholder-zinc-400 transition-colors duration-300 ${
                  isDark ? 'bg-zinc-950 border-zinc-900 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
                }`}
              />

              {pickupType === 'airport' && (
                <div className={`grid grid-cols-2 gap-4 p-4 border rounded ${
                  isDark ? 'border-[#cda250]/20 bg-[#cda250]/5' : 'border-[#cda250]/30 bg-[#cda250]/5'
                }`}>
                  <div className="flex flex-col space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-[#cda250] font-bold flex items-center gap-1.5">
                      <Plane size={10} /> Airline Carrier
                    </span>
                    <input
                      type="text"
                      name="airline"
                      placeholder="e.g. United Airlines"
                      value={formData.airline}
                      onChange={handleInputChange}
                      className={`border rounded p-2.5 text-xs focus:outline-none focus:border-[#cda250] transition-colors duration-300 ${
                        isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
                      }`}
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-[#cda250] font-bold flex items-center gap-1.5">
                      <Plane size={10} /> Flight Number
                    </span>
                    <input
                      type="text"
                      name="flightNumber"
                      placeholder="e.g. UA 1402"
                      value={formData.flightNumber}
                      onChange={handleInputChange}
                      className={`border rounded p-2.5 text-xs focus:outline-none focus:border-[#cda250] transition-colors duration-300 ${
                        isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
                      }`}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Drop-off Location */}
            {tripType !== 'hourly' && (
              <div className={`space-y-4 pt-4 border-t ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`}>
                <div className="flex items-center justify-between">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
                    Drop-Off Location *
                  </label>
                  <div className={`flex border rounded overflow-hidden ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`}>
                    <button
                      type="button"
                      onClick={() => setDropoffType('address')}
                      className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        dropoffType === 'address' ? 'bg-[#cda250]/15 text-[#cda250]' : 'text-zinc-500'
                      }`}
                    >
                      Address
                    </button>
                    <button
                      type="button"
                      onClick={() => setDropoffType('airport')}
                      className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        dropoffType === 'airport' ? 'bg-[#cda250]/15 text-[#cda250]' : 'text-zinc-500'
                      }`}
                    >
                      Airport
                    </button>
                  </div>
                </div>

                <input
                  type="text"
                  name="dropoffAddress"
                  placeholder={dropoffType === 'airport' ? 'Enter Destination Airport Code (e.g. ORD)' : 'Enter Destination Address'}
                  value={formData.dropoffAddress}
                  onChange={handleInputChange}
                  className={`w-full border rounded p-3 text-xs focus:outline-none focus:border-[#cda250] placeholder-zinc-400 transition-colors duration-300 ${
                    isDark ? 'bg-zinc-950 border-zinc-900 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
                  }`}
                />
              </div>
            )}

            {/* Stops management */}
            <div className="space-y-4">
              {stops.map((stop, index) => (
                <div key={stop.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#cda250]">
                      Stop #{index + 1} Address
                    </label>
                    <button 
                      type="button"
                      onClick={() => removeStop(stop.id)}
                      className="text-red-500 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Midway Stop Location"
                    value={stop.address}
                    onChange={(e) => handleStopChange(stop.id, e.target.value)}
                    className={`w-full border rounded p-3 text-xs focus:outline-none focus:border-[#cda250] placeholder-zinc-400 transition-colors duration-300 ${
                      isDark ? 'bg-zinc-950 border-zinc-900 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
                    }`}
                  />
                </div>
              ))}

              <button 
                type="button"
                onClick={addStop}
                className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-[#cda250] hover:text-[#b88f40] transition-colors cursor-pointer"
              >
                <Plus size={14} />
                <span>Add Intermediate Stop</span>
              </button>
            </div>

            {/* Passenger Counter Selector */}
            <div className={`flex items-center justify-between pt-6 border-t ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`}>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
                Passenger Count *
              </span>
              <div className="flex items-center space-x-4">
                <button 
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, passengerCount: Math.max(1, prev.passengerCount - 1) }))}
                  className={`w-8 h-8 rounded border flex items-center justify-center hover:border-[#cda250] hover:text-[#cda250] text-zinc-500 transition-all cursor-pointer ${
                    isDark ? 'border-zinc-900' : 'border-zinc-200'
                  }`}
                >
                  -
                </button>
                <span className={`font-serif text-sm font-semibold w-6 text-center ${isDark ? 'text-zinc-100' : 'text-zinc-800'}`}>
                  {formData.passengerCount}
                </span>
                <button 
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, passengerCount: prev.passengerCount + 1 }))}
                  className={`w-8 h-8 rounded border flex items-center justify-center hover:border-[#cda250] hover:text-[#cda250] text-zinc-500 transition-all cursor-pointer ${
                    isDark ? 'border-zinc-900' : 'border-zinc-200'
                  }`}
                >
                  +
                </button>
              </div>
            </div>

            {/* Next Step Action */}
            <div className="flex justify-end pt-6">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-10 py-4 bg-[#cda250] hover:bg-[#b88f40] text-neutral-950 text-xs font-bold uppercase tracking-[0.25em] rounded transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-[#cda250]/15 cursor-pointer"
              >
                <span>Select Vehicle</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: VEHICLE FLEET SELECTION ================= */}
        {step === 2 && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className={`font-serif text-2xl font-light mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  Step 2: Choose Your Fleet
                </h3>
                <p className={`text-xs font-light ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  Select a curated premium configuration tailored to passenger volume and safety.
                </p>
              </div>
              <button 
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center space-x-2 text-xs uppercase tracking-wider text-zinc-400 hover:text-[#cda250] transition-colors cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </button>
            </div>

            {/* Vehicle Cards Grid */}
            <div className="space-y-4">
              {vehicles.map((v) => (
                <div 
                  key={v.id}
                  onClick={() => setSelectedVehicle(v)}
                  className={`group relative grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-lg cursor-pointer transition-all duration-500 ease-out border ${
                    selectedVehicle?.id === v.id
                      ? 'border-[#cda250] bg-[#cda250]/5 shadow-xl shadow-[#cda250]/5'
                      : isDark 
                        ? 'border-zinc-900 bg-zinc-900/45 hover:border-zinc-800' 
                        : 'border-zinc-200 bg-zinc-50/50 hover:border-zinc-400'
                  }`}
                >
                  <div className="md:col-span-4 h-36 md:h-24 w-full rounded overflow-hidden">
                    <img src={v.image} alt={v.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>

                  <div className="md:col-span-5 flex flex-col justify-center space-y-1.5">
                    <h4 className={`font-serif text-base group-hover:text-[#cda250] transition-colors duration-300 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                      {v.name}
                    </h4>
                    <p className="text-[11px] text-zinc-400 font-light">{v.class}</p>
                    <div className="flex items-center gap-4 text-[10px] text-zinc-400 pt-1">
                      <span className="flex items-center gap-1"><Users size={11} className="text-[#cda250]" /> {v.capacity}</span>
                      <span className="flex items-center gap-1"><Briefcase size={11} className="text-[#cda250]" /> {v.luggage}</span>
                    </div>
                  </div>

                  <div className="md:col-span-3 flex flex-col items-start md:items-end justify-center">
                    <span className="text-[10px] text-zinc-400">{v.price}</span>
                    <span className={`font-serif text-xl font-bold mt-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{v.total}</span>
                    <span className="text-[9px] uppercase tracking-widest text-[#cda250] font-bold">Est. Subtotal</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Footer */}
            <div className={`flex justify-between pt-6 border-t ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`}>
              <button
                type="button"
                onClick={() => setStep(1)}
                className={`px-6 py-4 border text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 cursor-pointer ${
                  isDark 
                    ? 'border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-zinc-100' 
                    : 'border-zinc-200 hover:border-zinc-400 text-zinc-500 hover:text-zinc-800'
                }`}
              >
                Adjust Itinerary
              </button>
              <button
                type="button"
                disabled={!selectedVehicle}
                onClick={() => setStep(3)}
                className="px-10 py-4 bg-[#cda250] hover:bg-[#b88f40] disabled:bg-zinc-200 dark:disabled:bg-zinc-900 disabled:text-zinc-400 dark:disabled:text-zinc-700 text-neutral-950 text-xs font-bold uppercase tracking-[0.25em] rounded transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-[#cda250]/15 cursor-pointer"
              >
                <span>Passenger Details</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 3: CONTACT & CONFIRMATION ================= */}
    {step === 3 && (
  <form onSubmit={handleSubmit} className="space-y-8">
    <div className="flex items-center justify-between">
      <div>
        <h3 className={`font-serif text-2xl font-light mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          Step 3: Account & Passenger Checkout
        </h3>
        <p className={`text-xs font-light ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
          Input your communication channels. Chauffeur route logs and invoice receipts are routed here.
        </p>
      </div>
      <button 
        type="button"
        onClick={() => setStep(2)}
        className="flex items-center space-x-2 text-xs uppercase tracking-wider text-zinc-400 hover:text-[#cda250] transition-colors cursor-pointer"
      >
        <ArrowLeft size={14} />
        <span>Back</span>
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* Form Fields Column */}
      <div className="lg:col-span-8 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1">
            <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">First Name *</label>
            <input 
              required
              type="text" 
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="John" 
              className={`border rounded p-2.5 text-xs focus:outline-none focus:border-[#cda250] transition-colors duration-300 ${
                isDark ? 'bg-zinc-950 border-zinc-900 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
              }`} 
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Last Name *</label>
            <input 
              required
              type="text" 
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Doe" 
              className={`border rounded p-2.5 text-xs focus:outline-none focus:border-[#cda250] transition-colors duration-300 ${
                isDark ? 'bg-zinc-950 border-zinc-900 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
              }`} 
            />
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Primary Email *</label>
          <input 
            required
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john.doe@corporate.com" 
            className={`border rounded p-2.5 text-xs focus:outline-none focus:border-[#cda250] transition-colors duration-300 ${
              isDark ? 'bg-zinc-950 border-zinc-900 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
            }`} 
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Alternative / Assistant Email</label>
          <input 
            type="email" 
            name="optionalEmail"
            value={formData.optionalEmail}
            onChange={handleInputChange}
            placeholder="assistant@corporate.com (Optional)" 
            className={`border rounded p-2.5 text-xs focus:outline-none focus:border-[#cda250] transition-colors duration-300 ${
              isDark ? 'bg-zinc-950 border-zinc-900 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
            }`} 
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Phone Number *</label>
          <input 
            required
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+1 (555) 000-0000" 
            className={`border rounded p-2.5 text-xs focus:outline-none focus:border-[#cda250] transition-colors duration-300 ${
              isDark ? 'bg-zinc-950 border-zinc-900 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
            }`} 
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Special Ride Instructions</label>
          <textarea 
            name="specialInstructions"
            rows={3}
            value={formData.specialInstructions}
            onChange={handleInputChange}
            placeholder="Let our chauffeur know of any dynamic requests, luggage parameters, or routing adjustments..." 
            className={`border rounded p-2.5 text-xs focus:outline-none focus:border-[#cda250] transition-colors duration-300 resize-none ${
              isDark ? 'bg-zinc-950 border-zinc-900 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-800'
            }`} 
          />
        </div>
      </div>

      {/* Security & Guarantees Column */}
      <div className="lg:col-span-4 space-y-6 pt-4 lg:pt-0">
        <div className="space-y-4">
          <div className="flex items-start space-x-3 text-xs">
            <ShieldCheck size={16} className="text-[#cda250] shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed text-zinc-400 font-light">
              <strong className="text-zinc-300">All-Inclusive Luxury.</strong> Dynamic fuel charges, chauffeur gratuity, and local processing tolls are pre-calculated into your fare receipt.
            </p>
          </div>
          <div className="flex items-start space-x-3 text-xs">
            <ShieldCheck size={16} className="text-[#cda250] shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed text-zinc-400 font-light">
              <strong className="text-zinc-300">Free Reservation Safeguards.</strong> Cancel your arrangement up to 24 hours prior to departure for zero premium adjustments.
            </p>
          </div>
        </div>
      </div>
  
    </div>

    {/* Final Steps Navigation & Submit */}
    <div className={`flex justify-between pt-6 border-t ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`}>
      <button
        type="button"
        onClick={() => setStep(2)}
        className={`px-6 py-4 border text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 cursor-pointer ${
          isDark 
            ? 'border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-zinc-100' 
            : 'border-zinc-200 hover:border-zinc-400 text-zinc-500 hover:text-zinc-800'
        }`}
      >
        Fleet Catalog
      </button>
      <button
        type="submit"
        className="px-10 py-4 bg-[#cda250] hover:bg-[#b88f40] text-neutral-950 text-xs font-bold uppercase tracking-[0.25em] rounded transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-[#cda250]/15 cursor-pointer"
      >
        <span>Request Booking</span>
        <ChevronRight size={14} />
      </button>
    </div>
  </form>
)}
      </div>
    </div></section>
  );
}