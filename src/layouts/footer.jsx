import React from 'react';
import { Link } from 'react-router';
import { FaEarthAmericas, FaInstagram } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-[100vw] bg-card ">
      <div className="grid h-[23vh] py-[2vh] px-[1vw] grid-cols-4 gap-[2vh]">
        <div>
          <img src="/lightmodelogo.png" alt="" className="w-[8vw] mb-[1vh]" />
          <h2 className="text-xl font-semibold mb-[2vh]">Rental Car</h2>
          <p className="text-sm">{t('home.footer.slogan')}</p>
        </div>
        <div>
          <h3 className="font-bold mb-[2vh]">{t('home.footer.corporate.title')}</h3>
          <ul className="space-y-[1vh] text-sm">
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
          <h3 className="font-bold mb-[2vh]">{t('home.footer.corporate.title')}</h3>
          <ul className="space-y-[1vh] text-sm">
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
          <h3 className="font-semibold mb-2">{t('home.footer.social.title')}</h3>
          <div className="flex flex-col space-y-4 text-sm">
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
      <div className="w-[100vw] h-[7vh]  bg-secondary">
        <div className=" h-full z-10 text-white text-sm flex justify-center items-center text-center">
          <p className="flex text-center">© 2025. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
