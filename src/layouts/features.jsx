import React from 'react';
import { useTranslation } from 'react-i18next';
import { TbHeadset } from 'react-icons/tb';
import { IoCarSportOutline } from 'react-icons/io5';
import { FaMoneyBill1Wave } from 'react-icons/fa6';

function Features() {
  const { t } = useTranslation();
  return (
    <div className="w-[100vw] h-[30vh] bg-[#E8E8EF] dark:bg-[#212128] flex p-[3vh]">
      <div className="flex-1 flex items-center justify-center gap-[1vw] border-r border-black dark:border-[#515158] ">
        <div className="icon-container p-[2vh] flex items-center justify-center dark:bg-[#111118] bg-[#BBBBCD]  rounded-full">
          <TbHeadset size="64" />
        </div>
        <div className="text-4xl w-[20vw]">{t('home.features.text1')}</div>
      </div>
      <div className="flex-1 flex items-center justify-center gap-[1vw] border-r border-black dark:border-[#515158] ">
        <div className="icon-container p-[2vh] flex items-center justify-center dark:bg-[#111118] bg-[#BBBBCD]  rounded-full">
          <IoCarSportOutline size="64" />
        </div>
        <div className="text-4xl w-[20vw]">{t('home.features.text2')}</div>
      </div>
      <div className="flex-1 flex items-center justify-center gap-[1vw]">
        <div className="icon-container p-[2vh] flex items-center justify-center dark:bg-[#111118] bg-[#BBBBCD]  rounded-full">
          <FaMoneyBill1Wave size="64" />
        </div>
        <div className="text-4xl w-[21vw]">{t('home.features.text3')}</div>
      </div>
    </div>
  );
}

export default Features;
