import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button.jsx';
import ThemeToggle from '@/components/ui/theme-toggle.jsx';
import LanguageToggle from '@/components/ui/language-toggle.jsx';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/components/ui/theme-provider.jsx';
import Header from '@/layouts/header.jsx';
function Hero() {
  const { t } = useTranslation();

  return (
    <div className=" select-none">
      <Header />
      <div className="hero w-[100vw] h-[100vh] p-0 m-0 bg-[url('/hero.png')] bg-center bg-cover flex pt-[15vh]">
        <div className="mt-[10vh] h-[75vh] flex flex-col items-start gap-[5vh]">
          <div className="text-6xl font-bold ml-[3vw] text-white">{t('home.hero.title')}</div>
          <div className="w-[60vw] h-[15vh] text-4xl font-[500] ml-[3vw] text-white flex flex-col items-center justify-center text-justify">
            {t('home.hero.text')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
