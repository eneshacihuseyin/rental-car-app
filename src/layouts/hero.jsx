import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button.jsx';
import ThemeToggle from '@/components/ui/theme-toggle.jsx';
import LanguageToggle from '@/components/ui/language-toggle.jsx';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/components/ui/theme-provider.jsx';
function Hero() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className=" select-none">
      <div
        className={`header fixed ${scrolled ? 'bg-background shadow-md' : 'bg-transparent text-white'} top-0 left-0 flex z-[1000] justify-between px-[2vw] items-center right-0 h-[10vh] transition-colors duration-300`}
      >
        <div className="left flex-[1]">
          <Link to="/" className="h-full w-fit flex gap-[1vw] items-center">
            <img
              src={theme === 'dark' ? '/darkmodelogo.png' : '/lightmodelogo.png'}
              alt=""
              className="h-[5vh]"
            />
            <div className="text-3xl">Rental Car</div>
          </Link>
        </div>
        <div className="right flex-[1] justify-between flex items-center gap-[3vw]">
          <div className="links flex flex-[2] justify-between items-center">
            <Link to="/">{t('home.header.vehicles')}</Link>
            <Link to="/login">{t('home.header.login')}</Link>
            <Button variant={scrolled ? 'default' : 'outline'} className="p-0">
              <Link to="/signup" className="px-4 py-2">
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
      <div className="hero w-[100vw] h-[100vh] p-0 m-0 bg-[url('/hero.png')] bg-center bg-cover flex pt-[15vh]">
        <div className="mt-[10vh] h-[75vh] flex flex-col items-start gap-[5vh]">
          <div className="text-6xl font-bold ml-[3vw] text-white">{t('home.hero.title')}</div>
          <div className="w-[60vw] h-[15vh] text-3xl font-[500] ml-[3vw] text-white flex flex-col items-center justify-center text-justify">
            {t('home.hero.text')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
