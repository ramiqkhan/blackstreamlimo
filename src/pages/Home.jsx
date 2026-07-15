import React from 'react';
import BookingEngine from '../components/Home/BookingEngine';
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
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <main>
        <Navbar/>
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
      {/* <BookingEngine /> */}
        <ContactCTA/>
    <Footer/>
    </main>
  );
}