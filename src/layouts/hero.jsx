import React from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button.jsx';
import ThemeToggle from '@/components/theme-toggle.jsx';
import LanguageToggle from '@/components/language-toggle.jsx';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/components/theme-provider.jsx';

function Hero() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <div className=" select-none">
      <div className="header fixed top-0 left-0 flex justify-between px-[2vw] items-center right-0 h-[10vh]">
        <div className="left flex-[1]">
          <Link to="/" className="h-full w-fit flex gap-[1vw] items-center">
            <img
              src={theme === 'dark' ? 'public/darkmodelogo.png' : 'public/lightmodelogo.png'}
              alt=""
              className="h-[5vh]"
            />
            <div className="text-3xl">Rental Car</div>
          </Link>
        </div>
        <div className="right flex-[1] justify-between flex items-center gap-[3vw]">
          <div className="links flex flex-[2] justify-between items-center">
            <Link to="/">{t('home.header.vehicles')}</Link>
            <Link to="/">{t('home.header.login')}</Link>
            <Button className="p-0 text-foreground!">
              <Link to="/" className="px-4 py-2">
                {t('home.header.signup')}
              </Link>
            </Button>
          </div>
          <div className="flex flex-[1.5] justify-center gap-[1vw]">
            <div className="theme">
              <ThemeToggle />
            </div>
            <div className="language">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
      <div className="hero w-[100vw] h-[100vh] p-0 m-0 bg-[url('public/hero.png')]  bg-center bg-cover flex flex-col gap-[5vh] justify-center items-start">
        <div className="title text-5xl font-bold ml-[3vw] text-white">{t('home.hero.title')}</div>
        <div className="w-[45vw] text-4xl font-[600] ml-[3vw] text-white">
          {t('home.hero.text')}
        </div>
      </div>
    </div>
  );
}

export default Hero;
