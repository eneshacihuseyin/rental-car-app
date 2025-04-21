import React from 'react';
import { useTranslation } from 'react-i18next';
import { TbHeadset } from 'react-icons/tb';
import { IoCarSportOutline } from 'react-icons/io5';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import { LuLaptop } from 'react-icons/lu';

function Features() {
  const { t } = useTranslation();
  return (
    <div className="w-[100vw] h-[30vh] bg-card text-2xl text-card-foreground flex p-[3vh]">
      <div className="flex-1 flex items-center justify-center gap-[1vw] border-r">
        <div className="icon-container p-[1vw] flex items-center justify-center  bg-primary  rounded-full">
          <TbHeadset className="text-white size-[3vw]" />
        </div>
        <div className="w-[14vw]">{t('home.features.text1')}</div>
      </div>
      <div className="flex-1 flex items-center justify-center gap-[1vw] border-r border-black dark:border-[#515158] ">
        <div className="icon-container p-[1vw] flex items-center justify-center  bg-primary  rounded-full">
          <IoCarSportOutline className="text-white size-[3vw]" />
        </div>
        <div className="w-[14vw]">{t('home.features.text2')}</div>
      </div>
      <div className="flex-1 flex items-center justify-center gap-[1vw] border-r border-black dark:border-[#515158]">
        <div className="icon-container p-[1vw] flex items-center justify-center  bg-primary  rounded-full">
          <FaMoneyBill1Wave className="text-white size-[3vw]" />
        </div>
        <div className="w-[14vw]">{t('home.features.text3')}</div>
      </div>
      <div className="flex-1 flex items-center justify-center gap-[1vw]">
        <div className="icon-container p-[1vw] flex items-center justify-center  bg-primary  rounded-full">
          <LuLaptop className="text-white size-[3vw]" />
        </div>
        <div className="w-[14vw]">{t('home.features.text4')}</div>
      </div>
    </div>
  );
}

export default Features;
