import React from 'react';
import Header from '@/layouts/header.jsx';
import { useTranslation } from 'react-i18next';
import coupons from '../temp-data/coupons.json';
import { useLanguage } from '@/components/ui/language-provider.jsx';
import { LuCopy } from 'react-icons/lu';
import Footer from '@/layouts/footer.jsx';
import Animation from '@/layouts/Animation.jsx';
import ScrollToTop from '@/components/ui/scrolToTop.jsx';

function Campaigns() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  return (
    <Animation>
      <ScrollToTop />
      <div className="hero select-none">
        <Header />
        <div className="hero w-[100vw] h-[40vh] bg-[url('/campaigns/campaigns-bg.jpg')] bg-center bg-cover bg-no-repeat flex pt-[15vh] relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-0 bg-[rgba(0,0,0,.25)]"></div>
        </div>
      </div>
      <div className="w-[100vw] h-[30vh] border-b p-[1vh_0_3vh_2vw] flex flex-col justify-center gap-[2vh]">
        <div className="title text-4xl font-bold">{t('campaigns.title')}</div>
        <div className="title text-2xl w-3/4">{t('campaigns.text')} </div>
      </div>
      <div className="campaigns w-[100vw] flex flex-col gap-[3vh] justify-center p-[3vh]">
        {coupons.map((coupon, index) => (
          <div key={index} className="h-[30vh] w-full flex bg-card shadow-md">
            <div className="h-full flex-[1.2] flex flex-col justify-evenly  p-[1vw_2vw] ">
              <h2 className="text-3xl font-bold">
                {language === 'tr' ? coupon['title_tr'] : coupon['title_en']}
              </h2>
              <p className="text-xl mt-[2vh] leading-6">
                {language === 'tr' ? coupon['description_tr'] : coupon['description_en']}
              </p>
              <div className="mt-[2vh]">
                <div className="inline-flex items-center gap-2 bg-muted rounded-xl text-lg font-mono">
                  <span className="tracking-widest font-semibold">
                    {t('campaigns.coupon')} {coupon.code}
                  </span>
                  <span
                    className="flex gap-[1vh] text-sm cursor-pointer p-[1vh_2vh] rounded-lg  hover:bg-primary hover:text-background transition-all duration-200"
                    onClick={() => {
                      navigator.clipboard.writeText(coupon.code);
                    }}
                  >
                    <LuCopy size={20} />
                    {t('campaigns.copy')}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="h-full flex-1"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)' }}
            >
              <img src={`/campaigns/${index}.jpg`} alt="" className="h-full w-full" />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </Animation>
  );
}

export default Campaigns;
