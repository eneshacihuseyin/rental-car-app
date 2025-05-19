import React from 'react';
import { Link } from 'react-router-dom';
import { FaEarthAmericas, FaInstagram } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/components/ui/theme-provider.jsx';
function Footer() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <footer className="w-[100vw] bg-card ">
      <div className="grid h-[23vh] py-[2vh] px-[1vw] grid-cols-4 gap-[2vh]">
        <div>
          <img
            src={
              theme === 'light'
                ? '/GO-Rentals-Transparent-Light.png'
                : '/GO-Rentals-Transparent-Dark.png'
            }
            alt=""
            className="w-[12vw] mb-[1vh]"
          />
          <p className="">{t('home.footer.slogan')}</p>
        </div>
        <div>
          <h3 className="font-bold text-lg  mb-[2vh]">{t('home.footer.corporate.title')}</h3>
          <ul className="space-y-[1vh] ">
            <li>
              <Link to="/about-us" className="">
                {t('home.footer.corporate.link1')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="">
                {t('home.footer.corporate.link2')}
              </Link>
            </li>
            <li>
              <Link to="/frequently-asked-questions" className="">
                {t('home.footer.corporate.link3')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg  mb-[2vh]">{t('home.footer.services.title')}</h3>
          <ul className="space-y-[1vh] ">
            <li>
              <a href="#" className="">
                {t('home.footer.services.link1')}
              </a>
            </li>
            <li>
              <a href="#" className="">
                {t('home.footer.services.link2')}
              </a>
            </li>
            <li>
              <a href="#" className="">
                {t('home.footer.services.link3')}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg  mb-2">{t('home.footer.social.title')}</h3>
          <div className="flex flex-col space-y-4 ">
            <a
              href="https://www.instagram.com/igummf/"
              target="_blank"
              className="flex gap-[1vh] items-center"
            >
              <FaInstagram size={20} />
              <p>{t('home.footer.social.link1')}</p>
            </a>
            <a
              href="https://mmf.gelisim.edu.tr/tr/akademik-anasayfa"
              target="_blank"
              className="flex gap-[1vh] items-center"
            >
              <FaEarthAmericas size={20} />
              <p>{t('home.footer.social.link2')}</p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-[100vw] h-[7vh]  bg-primary">
        <div className=" h-full z-10 text-white  flex justify-center items-center text-center">
          <p className="flex text-center">
            © {new Date().getFullYear()}. {t('home.footer.bottom-line')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
