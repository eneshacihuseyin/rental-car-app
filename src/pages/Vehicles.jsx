import React, { useState } from 'react';
import Header from '@/layouts/header.jsx';
import vehicleList from '../temp-data/vehicles.json';
import featureList from '../temp-data/features.json';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button.jsx';
import { GiGearStickPattern } from 'react-icons/gi';
import { IoPersonOutline } from 'react-icons/io5';
import { BsFuelPump, BsSuitcaseLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/footer.jsx';

function Vehicles() {
  const { t } = useTranslation();
  const [selectedSegment, setSelectedSegment] = useState('All');
  const [vehicles, setVehicles] = useState(vehicleList);
  const filteredVehicles =
    selectedSegment === 'All'
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.segment === selectedSegment);
  const segments = ['economy', 'compact', 'premium', 'luxury', 'suv', 'minibus', 'caravan'];

  const slugify = (text) => {
    return text.toLowerCase().replace(' ', '_');
  };

  return (
    <div className="">
      <div className="hero select-none">
        <Header />
        <div className="hero w-[100vw] h-[40vh] bg-[url('/vehicle-list-bg.jpg')] bg-center bg-cover bg-no-repeat flex pt-[15vh] relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-0 bg-[rgba(0,0,0,.5)]"></div>
        </div>
      </div>
      <div className="w-[100vw] h-[30vh] border-b p-[1vh_0_3vh_2vw] flex flex-col justify-center gap-[2vh]">
        <div className="title text-4xl font-bold">Araç Filomuz</div>
        <div className="title text-2xl">
          Her ihtiyaca uygun, bakımlı ve modern araç filomuzla yolculuğunuzu kolaylaştırıyoruz
        </div>
      </div>
      <div className="filters flex gap-[3vh] py-[3vh] px-[2vw] ">
        <Button
          variant="ghost"
          className={
            selectedSegment === 'All'
              ? 'text-xl text-primary border-b border-primary rounded-none font-bold'
              : 'text-xl rounded-none'
          }
          onClick={() => setSelectedSegment('All')}
        >
          {t('vehicles.all-button')}
        </Button>
        {segments.map((segment, index) => (
          <Button
            key={index}
            variant="ghost"
            className={
              selectedSegment === segment
                ? 'text-xl text-primary border-b border-primary rounded-none font-bold'
                : 'text-xl rounded-none'
            }
            onClick={() => setSelectedSegment(segment)}
          >
            {t(`vehicles.segments.${segment}`)}
          </Button>
        ))}
      </div>
      <div className="vehicles grid grid-cols-3 gap-[5vh] p-[5vh]">
        {filteredVehicles.map((vehicle, index) => {
          const vehicleFeatures = featureList.find(
            (feature) => feature.id === vehicle['features_id']
          );
          return (
            <div
              key={index}
              className="border-b h-[70vh] flex flex-col items-center mt-[5vh] gap-[2vh] p-[2vh]"
            >
              <div className="name text-2xl font-semibold text-primary">
                {vehicle.brand} {vehicle.model} {vehicle.year}
              </div>
              <div className="segment text-lg font-medium">
                {t(`vehicles.segments.${vehicle.segment}`)}
              </div>
              <div className="image">
                <img src={`/vehicles/${vehicle.model}.png`} alt="" className="h-[25vh]  mt-[2vh]" />
              </div>
              <>
                <div className="features flex flex-row justify-between items-center gap-[1vw] w-full">
                  <div className="flex flex-col flex-1 justify-center items-center text-center">
                    <div className="font-bold text-lg text-primary">
                      {t('vehicles.features.person')}
                    </div>
                    <div className="flex gap-[1vh] items-center justify-center">
                      <IoPersonOutline size={20} />
                      {vehicleFeatures['person_capacity']}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center text-center">
                    <div className="font-bold text-lg text-primary">
                      {t('vehicles.features.bag')}
                    </div>
                    <div className="flex gap-[1vh] items-center justify-center">
                      <BsSuitcaseLg size={20} />
                      {vehicleFeatures['bag_capacity']} lt.
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center text-center">
                    <div className="font-bold text-lg text-primary">
                      {t('vehicles.features.fuel')}
                    </div>
                    <div className="flex gap-[1vh] items-center justify-center">
                      <BsFuelPump size={20} />
                      {t(`vehicles.fuels.${vehicleFeatures['fuel_type']}`)}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center h-[8vh] text-center">
                    <div className="font-bold text-lg text-primary">
                      {t('vehicles.features.gear')}
                    </div>
                    <div className="flex gap-[1vh] items-center justify-center">
                      <GiGearStickPattern size={20} />
                      {t(`vehicles.gears.${vehicleFeatures['gear_type']}`)}
                    </div>
                  </div>
                </div>
              </>
              <div className="button flex w-full">
                <Button className="p-0 flex-1 mt-[5vh]">
                  <Link
                    className="w-full p-[1vh]"
                    to={`/vehicles/${slugify(vehicle.brand)}-${slugify(vehicle.model)}`}
                  >
                    {t('vehicles.button')}
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Vehicles;
