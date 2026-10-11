import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Offer from '../components/Offer';
import Coaches from '../components/Coaches';
import Reviews from '../components/Reviews';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import Booking from '../components/Booking';

export default function Home() {
  return (
    <>
      {/* Тут просто викликаються всі секції твого лендінгу по черзі */}
      <Hero />
      <About />
      <Offer />
      <Coaches />
      <Reviews />
      <Pricing />
      <Faq />
      <Booking />
    </>
  );
}
