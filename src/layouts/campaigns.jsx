import React from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button.jsx';
import { useTranslation } from 'react-i18next';
function Campaigns() {
  const { t } = useTranslation();
  return (
    <div className="w-[100vw] h-[33vh] p-[2vh_2vh_0_2vh] flex items-center justify-center">
      <div className="h-full w-full flex bg-card shadow-md">
        <div className="h-full flex-[1.5] flex flex-col p-[1vw_2vw] ">
          <h2 className="text-2xl font-bold">{t('home.campaigns.title')}🎁</h2>
          <p className=" mt-[2vh] leading-6">{t('home.campaigns.text')}</p>
          <div className="mt-[2vh]">
            <Button variant="default" className="p-0 mt-[1vh]">
              <Link to="/campaigns" className="p-[2vh] text-sm ">
                {t('home.campaigns.button')}
              </Link>
            </Button>
          </div>
        </div>
        <div
          className="h-full flex-1"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)' }}
        >
          <img src="/campaign-img.jpg" alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
