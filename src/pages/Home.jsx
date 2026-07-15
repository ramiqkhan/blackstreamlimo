import React from 'react';
import Hero from '../components/Home/Hero';
import BookingEngine from '../components/Home/BookingEngine';
import Fleet from '../components/Home/Fleet';
import ValuePillars from '../components/Home/ValuePillars';
import PromoBanner from '../components/Home/PromoBanner';
import HeroBanner from '../components/Home/HeroBanner';
import AboutSection from '../components/Home/AboutSection';
import StatsStrip from '../components/Home/StatsStrip';
import OccasionsSection from '../components/Home/OccasionsSection';
import FleetSection from '../components/Home/FleetSection';
import SprinterShowcase from '../components/Home/SprinterShowcase';
import FleetShowcase from '../components/Home/FleetShowcase';
import AreasWeServe from '../components/Home/AreasWeServe';
import Testimonials from '../components/Home/Testimonials';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import ContactCTA from '../components/Home/ContactCTA';


export default function Home() {
  return (
    <main>
        <PromoBanner />
        <HeroBanner/>
        <AboutSection />
        <StatsStrip/>
        <OccasionsSection/>
        <FleetSection/>
        <FleetShowcase/>
        <SprinterShowcase/>
        <AreasWeServe/>
        <Testimonials/>
        <WhyChooseUs/>
      <BookingEngine />
        <ContactCTA/>
      {/* 1. Hero Landing Block */}
      <Hero />

      {/* 2. Interactive Booking Widget */}

      {/* 3. Vehicles Fleet Showroom */}
      <Fleet/>

      {/* 4. Core Corporate Values */}
      <ValuePillars />
    </main>
  );
}