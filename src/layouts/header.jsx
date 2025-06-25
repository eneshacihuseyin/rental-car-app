import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '@/components/ui/theme-toggle.jsx';
import LanguageToggle from '@/components/ui/language-toggle.jsx';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/components/ui/theme-provider.jsx';
import { Button } from '@/components/ui/button.jsx';
import { useAuth } from '@/context/AuthContext.jsx';
import ProfileDropdown from '@/components/ui/profile-dropdown.jsx';
import Users from '@/temp-data/users.json';

function Header({ animation = true }) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (!animation) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animation]);
  const logoSrc = animation
    ? scrolled
      ? theme === 'light'
        ? '/GO-Rentals-Transparent-Light.png'
        : '/GO-Rentals-Transparent-Dark.png'
      : '/GO-Rentals-Transparent-Dark.png'
    : theme === 'light'
      ? '/GO-Rentals-Transparent-Light.png'
      : '/GO-Rentals-Transparent-Dark.png';

  const linkColor = animation && !scrolled ? 'text-white' : 'text-foreground';

  const renderUserSection = () => {
    if (user) {
      const userData = Users.find((usr) => usr.id === user.id);
      return (
        <div className="flex w-1/3 justify-evenly">
          <div className="flex items-center justify-end">
            <Button variant="link" className={`p-0 font-light ${linkColor}`}>
              <Link to="/reservation" className="p-[1vh] text-lg">
                {t('home.header.reservation')}
              </Link>
            </Button>
          </div>
          <div className="profile flex items-center gap-[1vh] text-xl">
            <div>{userData['first_name']}</div>
            <ProfileDropdown />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex w-1/3 justify-evenly">
          <div className="login flex items-center justify-end">
            <Button variant="link" className={`p-0 font-light ${linkColor}`}>
              <Link to="/login" className="p-[1vh] text-lg">
                {t('home.header.login')}
              </Link>
            </Button>
          </div>
          <div className="signup flex items-center">
            <Button variant="default" className="p-0 font-normal text-white">
              <Link to="/signup" className="p-[2vh] text-lg">
                {t('home.header.signup')}
              </Link>
            </Button>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className={`header fixed ${
        animation && !scrolled ? 'bg-transparent text-white' : 'bg-card shadow-md'
      } top-0 left-0 right-0 z-[1000] flex items-center h-[10vh] transition-colors duration-150 px-[2vw]`}
    >
      <div className="left flex-1 h-full flex items-center justify-start gap-[2vw]">
        <div className="logo relative h-full flex-1 flex items-center justify-start">
          <Link to="/" className="flex items-center gap-[1vw]">
            <img src={logoSrc} alt="Logo" className="transition-all duration-100 w-[15vw]" />
          </Link>
        </div>
        <div className="links flex flex-[1.1] justify-between">
          <div className="vehicles flex-1">
            <Button variant="link" className={`p-0 font-light ${linkColor}`}>
              <Link to="/vehicles" className="p-[1vh] text-lg">
                {t('home.header.vehicles')}
              </Link>
            </Button>
          </div>
          <div className="campaigns flex-[1.2]">
            <Button variant="link" className={`p-0 font-light ${linkColor}`}>
              <Link to="/campaigns" className="p-[1vh] text-lg">
                {t('home.header.campaigns')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="right flex-[1.3] flex items-center justify-end gap-[5vw]">
        {renderUserSection()}
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
