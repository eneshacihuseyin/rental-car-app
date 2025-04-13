import React from 'react';
import Hero from '@/layouts/hero.jsx';
import Features from '@/layouts/features.jsx';
import Testimonials from '@/layouts/testimonials.jsx';
import VehicleSwiper from '@/layouts/vehicle-swiper.jsx';

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <VehicleSwiper />
    </div>
  );
}

export default Home;
