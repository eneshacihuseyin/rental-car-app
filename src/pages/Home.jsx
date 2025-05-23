import React from 'react';
import Hero from '@/layouts/hero.jsx';
import Features from '@/layouts/features.jsx';
import Testimonials from '@/layouts/testimonials.jsx';
import VehicleSwiper from '@/layouts/vehicle-swiper.jsx';
import Faq from '@/layouts/faq.jsx';
import Footer from '@/layouts/footer.jsx';
import Campaigns from '@/layouts/campaigns.jsx';
import Animation from '@/layouts/Animation.jsx';
function Home() {
  return (
    <Animation>
      <Hero />
      <Features />
      <Campaigns />
      <Testimonials />
      <VehicleSwiper />
      <Faq />
      <Footer />
    </Animation>
  );
}

export default Home;
