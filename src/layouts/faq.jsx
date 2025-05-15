import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router';
function Faq() {
  const { t } = useTranslation();
  return (
    <div className="w-[100vw] h-[40vh] p-[2vh] flex items-center justify-center">
      <div className="w-full h-full flex justify-end relative">
        <div className="absolute w-full h-full flex flex-col p-[2vw] bg-[image:var(--bg-customGradient-1)] shadow-md">
          <h2 className="font-bold text-3xl">{t('home.sss.title')}</h2>
          <p className="w-3/5 mt-[2vh] text-xl leading-7">{t('home.sss.text')}</p>
          <div className="mt-[4vh]">
            <Button variant="default" className="p-[3.3vh] text-md rounded-full">
              <Link to="/frequently-asked-questions">{t('home.sss.button')}</Link>
            </Button>
          </div>
        </div>
        <img src="/sss-bg.jpg" alt="Background" className="h-full" />
      </div>
    </div>
  );
}

export default Faq;
