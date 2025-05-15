import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import ThemeToggle from '@/components/ui/theme-toggle.jsx';
import LanguageToggle from '@/components/ui/language-toggle.jsx';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/components/ui/theme-provider.jsx';
import { Button } from '@/components/ui/button.jsx';

function Header() {
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
    <div
      className={`header fixed ${scrolled ? 'bg-background shadow-md' : 'bg-transparent text-white'} top-0 left-0 right-0 z-[1000] flex items-center h-[10vh] transition-colors duration-150 px-[2vw]`}
    >
      <div className="left flex-1 h-full flex items-center justify-start gap-[2vw]">
        <div className="logo relative h-full flex-1 flex items-center justify-start">
          <Link to="/" className="flex items-center gap-[1vw]">
            <img
              src={
                scrolled
                  ? `${theme === 'light' ? '/GO-Rentals-Transparent-Light.png' : 'GO-Rentals-Transparent-Dark.png'}`
                  : 'GO-Rentals-Transparent-Dark.png'
              }
              alt=""
              className={` transition-all duration-100 w-[15vw]`}
            />
          </Link>
        </div>
        <div className="links flex flex-[1.1] justify-between ">
          <div className="vehicles ">
            <Button
              variant="link"
              className={`p-0 font-light ${scrolled ? 'text-foreground' : 'text-white'} `}
            >
              <Link to="/vehicles" className="p-[1vh] text-lg ">
                {t('home.header.vehicles')}
              </Link>
            </Button>
          </div>
          <div className="campaigns">
            <Button
              variant="link"
              className={`p-0 font-light ${scrolled ? 'text-foreground' : 'text-white'} `}
            >
              <Link to="/campaigns" className="p-[1vh] text-lg ">
                {t('home.header.campaigns')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="right flex-[1.3] flex items-center justify-end gap-[5vw]">
        <div className="login w-1/4 flex items-center justify-end">
          <Button
            variant="link"
            className={`p-0 font-light ${scrolled ? 'text-foreground' : 'text-white'} `}
          >
            <Link to="/login" className="p-[1vh] text-lg ">
              {t('home.header.login')}
            </Link>
          </Button>
        </div>
        <div className="signup w-1/5 flex items-center">
          <Button variant="default" className={`p-0 font-normal text-white `}>
            <Link to="/signup" className="p-[2vh] text-lg">
              {t('home.header.signup')}
            </Link>
          </Button>
        </div>
        <div className="settings w-[5vw] flex justify-end items-center gap-[1vw]">
          <div className="theme">
            <ThemeToggle />
          </div>
          <div className="language">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
