import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button.jsx';

function Faq() {
  const { t } = useTranslation();

  return (
    <div className="w-[100vw] h-[40vh] p-[2vh] flex items-center justify-center">
      <div className="w-full h-full flex justify-end relative overflow-hidden">
        <div className="w-full h-full flex flex-col p-[2vw] absolute bg-[image:var(--bg-linearGradient)]">
          <div className="title font-bold text-2xl">{t('home.sss.title')}</div>
          <div className="w-3/5 mt-[1vh] leading-7">{t('home.sss.text')}</div>
          <div>
            <Button variant="default" className="p-[3.3vh] text-md mt-[2vh] rounded-full">
              {t('home.sss.button')}
            </Button>
          </div>
        </div>
        <img src="/sss-bg.jpg" alt="" />
      </div>
    </div>
  );
}

export default Faq;
