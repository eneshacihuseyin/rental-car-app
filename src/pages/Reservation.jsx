import React, { useEffect, useState } from 'react';
import Header from '@/layouts/header.jsx';
import ReservationPicker from '@/layouts/ReservationPicker.jsx';

function Reservation(props) {
  useEffect(() => {
    localStorage.setItem('reservation', '');
  }, []);
  const handleSelectionChange = (selection) => {
    localStorage.setItem('reservation', selection);
  };

  return (
    <div>
      <div className="select-none">
        <Header />
        <div className="hero w-[100vw] h-[100vh] p-0 m-0 bg-[url('/res-bg.jpg')] bg-center bg-cover flex pt-[15vh]">
          <div className="w-full flex items-center justify-center">
            <ReservationPicker onChange={handleSelectionChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
