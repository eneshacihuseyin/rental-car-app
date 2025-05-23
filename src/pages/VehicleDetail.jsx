import React from 'react';
import { Link, useParams } from 'react-router-dom';
import vehicleList from '../temp-data/vehicles.json';
import featureList from '../temp-data/features.json';
import conditionList from '../temp-data/conditions.json';

import { Button } from '@/components/ui/button.jsx';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '@/components/ui/theme-toggle.jsx';
import LanguageToggle from '@/components/ui/language-toggle.jsx';
import { useTheme } from '@/components/ui/theme-provider.jsx';
import Footer from '@/layouts/footer.jsx';
import { IoCalendarOutline, IoPersonOutline } from 'react-icons/io5';
import { BsFuelPump, BsSuitcaseLg } from 'react-icons/bs';
import { GiGearStickPattern } from 'react-icons/gi';
import { FaIdCard, FaLocationDot, FaMoneyBill1Wave } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/pagination';
import Animation from '@/layouts/Animation.jsx';

function VehicleDetail() {
  const { brandModel } = useParams();
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [brand, model] = brandModel.replace(/_/g, ' ').split('-');
  console.log(brand, model);
  const vehicle = vehicleList.find(
    (v) => v.brand.toLowerCase() === brand && v.model.toLowerCase() === model
  );

  const vehicleFeatures = featureList.find((feature) => feature.id === vehicle['features_id']);
  const vehicleConditions = conditionList.find(
    (feature) => feature.id === vehicle['conditions_id']
  );

  const slugify = (text) => {
    return text.toLowerCase().replace(' ', '_');
  };

  return (
    <Animation className="bg-background">
      <div
        className={`header  fixed bg-card dark:bg-card shadow-md top-0 left-0 right-0 z-[1000] flex items-center h-[10vh] transition-colors duration-150 px-[2vw]`}
      >
        <div className="left flex-1 h-full flex items-center justify-start gap-[2vw]">
          <div className="logo relative h-full flex-1 flex items-center justify-start">
            <Link to="/" className="flex items-center gap-[1vw]">
              <img
                src={
                  theme === 'light'
                    ? '/GO-Rentals-Transparent-Light.png'
                    : '/GO-Rentals-Transparent-Dark.png'
                }
                alt=""
                className={` transition-all duration-100 w-[15vw]`}
              />
            </Link>
          </div>
          <div className="links flex flex-[1.1] justify-between ">
            <div className="vehicles flex-1 ">
              <Button variant="link" className={`p-0 font-light text-foreground`}>
                <Link to="/vehicles" className="p-[1vh] text-lg ">
                  {t('home.header.vehicles')}
                </Link>
              </Button>
            </div>
            <div className="campaigns flex-[1.2]">
              <Button variant="link" className={`p-0 font-light text-foreground`}>
                <Link to="/campaigns" className="p-[1vh] text-lg ">
                  {t('home.header.campaigns')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="right flex-[1.3] flex items-center justify-end gap-[5vw]">
          <div className="login w-1/4 flex items-center justify-end">
            <Button variant="link" className={`p-0 font-light text-foregroundtext-white`}>
              <Link to="/login" className="p-[1vh] text-lg ">
                {t('home.header.login')}
              </Link>
            </Button>
          </div>
          <div className="signup w-1/5 flex items-center">
            <Button variant="default" className={`p-0 font-normal text-white `}>
              <Link to="/signup" className="p-[2vh] text-lg">
                {t('home.header.signup')}
              </Link>
            </Button>
          </div>
          <div className="settings w-[5vw] flex justify-end items-center gap-[1vw]">
            <div className="theme">
              <ThemeToggle />
            </div>
            <div className="language">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
      <div className="main border-b">
        <div className="mt-[10vh] h-[15vh] flex items-center pl-[2vw] text-3xl font-bold ">
          {vehicle.brand} {vehicle.model} {t(`vehicles.gears.${vehicleFeatures['gear_type']}`)}{' '}
          {t(`vehicles.fuels.${vehicleFeatures['fuel_type']}`)} {t('vehicleDetail.text')}
        </div>
        <div className="image w-[100vw] h-[75vh] relative">
          <div className="blur-sm top-[1vh] bottom-[1vh] left-[1vh] right-[1vh] bg-[url('/vehicle-detail-bg.png')] bg-cover bg-center bg-no-repeat  absolute"></div>
          <img
            src={`/vehicles/${vehicle.model}.png`}
            alt=""
            className={`absolute ${vehicle.segment === 'caravan' ? 'h-[45vh] left-[27%] top-[35%] ' : 'h-[40vh] left-[30%] top-[40%]'}  `}
          />
        </div>
        <div className="features bg-card w-[90vw] my-[15vh] h-[15vh] p-[2vh] m-auto border flex items-center justify-between">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="font-bold text-lg text-primary">{t('vehicles.features.person')}</div>
            <div className="flex gap-[1vh] items-center justify-center">
              <IoPersonOutline size={20} />
              {vehicleFeatures['person_capacity']}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="font-bold text-lg text-primary">{t('vehicles.features.bag')}</div>
            <div className="flex gap-[1vh] items-center justify-center">
              <BsSuitcaseLg size={20} />
              {vehicleFeatures['bag_capacity']} lt.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="font-bold text-lg text-primary">{t('vehicles.features.fuel')}</div>
            <div className="flex gap-[1vh] items-center justify-center">
              <BsFuelPump size={20} />
              {t(`vehicles.fuels.${vehicleFeatures['fuel_type']}`)}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="font-bold text-lg text-primary">{t('vehicles.features.gear')}</div>
            <div className="flex gap-[1vh] items-center justify-center">
              <GiGearStickPattern size={20} />
              {t(`vehicles.gears.${vehicleFeatures['gear_type']}`)}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="font-bold text-lg text-primary">{t('vehicleDetail.price')}</div>
            <div className="flex gap-[1vh] items-center justify-center">
              <FaMoneyBill1Wave size={20} />
              {vehicle['daily_price']} ₺ / {t('vehicleDetail.day')}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="font-bold text-lg text-primary">{t('vehicleDetail.age')}</div>
            <div className="flex gap-[1vh] items-center justify-center">
              <IoCalendarOutline size={20} />
              {vehicleConditions['minimum_age']}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="font-bold text-lg text-primary">{t('vehicleDetail.licence')}</div>
            <div className="flex gap-[1vh] items-center justify-center">
              <FaIdCard size={20} />
              {vehicleConditions['minimum_licence_year']} {t('vehicleDetail.year')}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="font-bold text-lg text-primary">{t('vehicleDetail.distance')}</div>
            <div className="flex gap-[1vh] items-center justify-center">
              <FaLocationDot size={20} />
              {vehicleConditions['max_distance']} km / {t('vehicleDetail.day')}
            </div>
          </div>
          {
            <div className="flex flex-col justify-center items-center text-center">
              <div className="font-bold text-lg text-primary">{t('vehicleDetail.color')}</div>
              <div className="flex gap-[1vh] items-center justify-center">
                {vehicleFeatures['color']
                  ?.filter((color) => color)
                  .map((color, index) => {
                    const colors = {
                      white: 'bg-white',
                      black: 'bg-black',
                      red: 'bg-red-500',
                      green: 'bg-green-500',
                      blue: 'bg-blue-500',
                      stone: 'bg-stone-500',
                      orange: 'bg-orange-500',
                      gray: 'bg-gray-500',
                    };
                    return (
                      <div key={index} className={`size-[2.5vh] border ${colors[color]}`}></div>
                    );
                  })}
              </div>
            </div>
          }
        </div>
        <div className="smilar-vehicles flex flex-col items-center gap-[3vh]">
          <div className="title text-3xl font-bold">{t('vehicleDetail.recommendedTitle')}</div>
          <div className="title text-xl">{t('vehicleDetail.recommendedText')}</div>
          <div className="swiper">
            <div className="h-[60vh] w-[100vw] flex justify-around">
              {vehicleList
                .filter((v) => v.segment === vehicle.segment && v.model !== vehicle.model)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
                .map((vehicle, idx) => (
                  <div key={idx}>
                    <div className="h-full pt-[1vh] flex flex-col items-center">
                      <img
                        src={`/vehicles/${vehicle.model}.png`}
                        alt=""
                        className="h-[25vh] hover:scale-105 duration-700"
                      />
                      <div className="text-lg font-semibold mt-[5vh]">
                        {vehicle.brand} {vehicle.model} {vehicle.year}
                      </div>
                      <div className="">
                        <Button className="p-0 mt-[10vh]">
                          <Link
                            className="w-[15vw] p-[1vh]"
                            to={`/vehicles/${slugify(vehicle.brand)}-${slugify(vehicle.model)}`}
                          >
                            {t('vehicles.button')}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Animation>
  );
}

export default VehicleDetail;
