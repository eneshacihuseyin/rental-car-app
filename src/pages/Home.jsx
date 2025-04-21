import React from 'react';
import Hero from '@/layouts/hero.jsx';
import Features from '@/layouts/features.jsx';
import Testimonials from '@/layouts/testimonials.jsx';
import VehicleSwiper from '@/layouts/vehicle-swiper.jsx';
import Faq from '@/layouts/faq.jsx';

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <VehicleSwiper />
      <Faq />
    </div>
  );
}

export default Home;
