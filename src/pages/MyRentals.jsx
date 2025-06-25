import React, { useState } from 'react';
import Header from '@/layouts/header.jsx';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '@/layouts/footer.jsx';
import { useAuth } from '@/context/AuthContext.jsx';
import Reservations from '@/temp-data/Reservations.json';
import Vehicles from '@/temp-data/Vehicles.json';
import Locations from '@/temp-data/Locations.json';
import { Button } from '@/components/ui/button.jsx';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.jsx';

function MyRentals() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const links = [
    {
      name: 'profile',
      link: '/profile/me',
    },
    {
      name: 'myRes',
      link: '/profile/my-rentals',
    },
    {
      name: 'changePass',
      link: '/profile/change-password',
    },
  ];
  const [activeTab, setActiveTab] = useState('active');

  const CancelBtn = ({ vehicle }) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive" className="mt-[2vh] !px-[5vh]">
            İptal Et
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cancel Reservation</DialogTitle>
            <DialogDescription>
              You're about to cancel the reservation. Are you sure?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">No</Button>
            </DialogClose>
            <Button variant="destructive" onClick={() => cancelRes(vehicle)}>
              Yes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };

  function cancelRes(Vehicle) {
    window.alert(Vehicle.id);
  }
  return (
    <div>
      <Header animation={false} />
      <div className="main w-[100vw] h-[90vh] mt-[10vh] flex p-[3vh_10vw] gap-[3vh]">
        <div className="bg-card rounded-lg flex-1 h-[20vh] flex flex-col gap-[1vh] p-[2vh] shadow-md">
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.link}
              className="flex-1 hover:bg-white rounded-md p-[1vh] flex items-center hover:bg-opacity-10"
            >
              {t(`profile.links.${link.name}`)}
            </NavLink>
          ))}
        </div>
        <div className="bg-card flex flex-col gap-[2vh] flex-[4] h-full rounded-lg p-[2vh] shadow-md">
          <div className="tabs flex p-[1vh] relative gap-[2vh] bg-background rounded-lg">
            <button className="flex-1 h-[5vh] relative z-10" onClick={() => setActiveTab('active')}>
              Aktif Rezervasyonum
            </button>
            <button className="flex-1 h-[5vh] relative z-10" onClick={() => setActiveTab('past')}>
              Geçmiş Rezervasyonlarım
            </button>
            <button
              className="flex-1 h-[5vh] relative z-10"
              onClick={() => setActiveTab('cancelled')}
            >
              İptal Ettiklerim
            </button>
            <div
              className={`absolute bg-secondary top-2 rounded-md bottom-2 z-0 transition-all duration-500 ${activeTab === 'active' ? 'left-2 right-[70%]' : activeTab === 'past' ? 'left-[33%] right-[33%]' : 'left-[70%] right-2'}`}
            ></div>
          </div>
          <div className="flex-1 flex flex-col">
            {activeTab === 'active' ? (
              <div>
                {Reservations.filter(
                  (res) => res['customer_id'] === user.id && res['status'] === 'active'
                ).map((res, idx) => {
                  const Vehicle = Vehicles.find((vehicle) => vehicle.id === res['vehicle_id']);
                  console.log(Vehicle);
                  const pickupLoc = Locations.find(
                    (location) => location.id === res['pickup_location']
                  );
                  const dropoffLoc = Locations.find(
                    (location) => location.id === res['dropoff_location']
                  );
                  return (
                    <div key={idx} className="w-full border-b flex p-[1vw]">
                      <div className="flex-[3] flex flex-col gap-[1vh]">
                        <div className="title text-2xl font-semibold">
                          {Vehicle.brand} {Vehicle.model} {Vehicle.year}
                        </div>
                        <div className="infos flex flex-row gap-[5vh]">
                          <div className="flex flex-col">
                            <div className="start flex justify-start ">
                              <div className="font-semibold">Start Date :</div> {res['start_date']}
                            </div>
                            <div className="end flex justify-start">
                              <div className="font-semibold">End Date :</div> {res['end_date']}
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="start flex">
                              <div className="font-semibold">Pickup Location :</div>{' '}
                              {pickupLoc['district_name']}, {pickupLoc['city_name']}
                            </div>
                            <div className="end flex">
                              <div className="font-semibold">Drop Off Location:</div>{' '}
                              {dropoffLoc['district_name']}, {dropoffLoc['city_name']}
                            </div>
                          </div>
                        </div>
                        <div>
                          <CancelBtn vehicle={Vehicle} />
                        </div>
                      </div>
                      <div className="flex-1 flex items-center">
                        <img src={`/vehicles/${Vehicle['model']}.png`} alt="" />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : activeTab === 'past' ? (
              <div>
                {Reservations.filter(
                  (res) => res['customer_id'] === user.id && res['status'] === 'past'
                ).map((res, idx) => {
                  const Vehicle = Vehicles.find((vehicle) => vehicle.id === res['vehicle_id']);
                  const pickupLoc = Locations.find(
                    (location) => location.id === res['pickup_location']
                  );
                  const dropoffLoc = Locations.find(
                    (location) => location.id === res['dropoff_location']
                  );
                  return (
                    <div key={idx} className="w-full border-b flex p-[1vw]">
                      <div className="flex-[3] flex flex-col gap-[1vh]">
                        <div className="title text-2xl font-semibold">
                          {Vehicle.brand} {Vehicle.model} {Vehicle.year}
                        </div>
                        <div className="infos flex flex-row gap-[5vh]">
                          <div className="flex flex-col">
                            <div className="start flex justify-start ">
                              <div className="font-semibold">Start Date :</div> {res['start_date']}
                            </div>
                            <div className="end flex justify-start">
                              <div className="font-semibold">End Date :</div> {res['end_date']}
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="start flex">
                              <div className="font-semibold">Pickup Location :</div>{' '}
                              {pickupLoc['district_name']}, {pickupLoc['city_name']}
                            </div>
                            <div className="end flex">
                              <div className="font-semibold">Drop Off Location:</div>{' '}
                              {dropoffLoc['district_name']}, {dropoffLoc['city_name']}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex items-center">
                        <img
                          src={`/vehicles/${Vehicle['model']}.png`}
                          alt=""
                          className="h-[15vh]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                {Reservations.filter(
                  (res) => res['customer_id'] === user.id && res['status'] === 'cancelled'
                ).map((res, idx) => {
                  const Vehicle = Vehicles.find((vehicle) => vehicle.id === res['vehicle_id']);
                  const pickupLoc = Locations.find(
                    (location) => location.id === res['pickup_location']
                  );
                  const dropoffLoc = Locations.find(
                    (location) => location.id === res['dropoff_location']
                  );
                  return (
                    <div key={idx} className="w-full border-b flex p-[1vw]">
                      <div className="flex-[3] flex flex-col gap-[1vh]">
                        <div className="title text-2xl font-semibold">
                          {Vehicle.brand} {Vehicle.model} {Vehicle.year}
                        </div>
                        <div className="infos flex flex-row gap-[5vh]">
                          <div className="flex flex-col">
                            <div className="start flex justify-start ">
                              <div className="font-semibold">Start Date :</div> {res['start_date']}
                            </div>
                            <div className="end flex justify-start">
                              <div className="font-semibold">End Date :</div> {res['end_date']}
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="start flex">
                              <div className="font-semibold">Pickup Location :</div>{' '}
                              {pickupLoc['district_name']}, {pickupLoc['city_name']}
                            </div>
                            <div className="end flex">
                              <div className="font-semibold">Drop Off Location:</div>{' '}
                              {dropoffLoc['district_name']}, {dropoffLoc['city_name']}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex items-center">
                        <img
                          src={`/vehicles/${Vehicle['model']}.png`}
                          alt=""
                          className="h-[15vh]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyRentals;
