import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLanguage } from '@/components/ui/language-provider.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
const vehicles = [
  {
    title: { en: 'Economy', tr: 'Ekonomik' },
    image: 'car-segments/economy.png',
    car: 'Hyundai i20',
  },
  {
    title: { en: 'Compact', tr: 'Orta' },
    image: 'car-segments/compact.png',
    car: 'Toyota Corolla',
  },
  {
    title: { en: 'Premium', tr: 'Üst' },
    image: 'car-segments/premium.png',
    car: 'Mercedes C200',
  },
  {
    title: { en: 'Luxury', tr: 'Lüks' },
    image: 'car-segments/luxury.png',
    car: 'BMW M5',
  },
  {
    title: { en: 'SUV', tr: 'SUV' },
    image: 'car-segments/suv.png',
    car: 'Toyota C-HR',
  },
  {
    title: { en: 'Minibus', tr: 'Minibüs' },
    image: 'car-segments/minibus.png',
    car: 'Mercedes Vito',
  },
  {
    title: { en: 'Caravan', tr: 'Karavan' },
    image: 'car-segments/caravan.png',
    car: 'Crawler KMP',
  },
];

function VehicleSwiper() {
  const { language } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="w-full h-[75vh] dark:bg-[#212128] bg-[#E8E8EF] flex flex-col items-center p-[2vh]">
      <div className="w-full pt-[3vh]">
        <div className="title text-center text-3xl font-bold">{t('home.carousel.title')}</div>
        <div className="text text-center pt-[1vh]">{t('home.carousel.text')}</div>
        <div className="swiper w-full">
          <Swiper
            slidesPerView={3}
            loop={true}
            speed={1000}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="h-[38vh] mt-[5vh]"
          >
            {vehicles.map((vehicle, idx) => (
              <SwiperSlide key={idx}>
                <div className="h-full flex flex-col items-center">
                  <img
                    src={vehicle.image}
                    alt={vehicle.title}
                    className="h-[18vh] object-contain"
                  />
                  <div className="text-lg font-semibold mt-[3vh]">
                    {language === 'tr' ? vehicle.title.tr : vehicle.title.en}
                  </div>
                  <div className="my-[1vh]">{vehicle.car}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full flex items-center justify-center">
            <Button className="p-0 mt-[3vh] h-[6vh]">
              <Link
                to="/"
                className="text-xl w-[15vw] h-[15vh] flex text-center items-center justify-center"
              >
                {t('home.carousel.button')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleSwiper;
