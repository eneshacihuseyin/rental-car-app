import React from 'react';
import { useTranslation } from 'react-i18next';
import { Rating } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
function Testimonials() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[45vh] flex p-[2vh] gap-[2vh]">
      <div className="flex-1 p-[2vh]  bg-card flex flex-col ">
        <div className="flex-[1] px-[3vw] flex justify-start gap-[3vh]">
          <div className=" size-[13vh]">
            <img
              src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="pt-[1vh]">
            <div className="text-xl">John Doe</div>
            <div className="rating h-[3vh]">
              <Rating
                name="half-rating-read"
                defaultValue={5}
                precision={0.5}
                readOnly
                emptyIcon={<StarBorderIcon fontSize="inherit" className="dark:text-[#414148]" />}
              />
            </div>
          </div>
        </div>

        <div className="flex-[3] p-[3vh] text-justify">{t('home.testimonials.comment1')}</div>
      </div>
      <div className="flex-1 p-[2vh] bg-card flex flex-col ">
        <div className="flex-[1] px-[3vw] flex justify-start gap-[3vh]">
          <div className=" size-[13vh]">
            <img
              src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/78e88f76-29bf-4289-9624-719aec0f7bcb/e516f677-4846-4a28-9707-ba00ffa49479.png"
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="pt-[1vh]">
            <div className="text-xl">Jane Doe</div>
            <div className="rating h-[3vh]">
              <Rating
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                readOnly
                emptyIcon={<StarBorderIcon fontSize="inherit" className="dark:text-[#414148]" />}
              />
            </div>
          </div>
        </div>

        <div className="flex-[3] p-[3vh] text-justify">{t('home.testimonials.comment2')}</div>
      </div>
      <div className="flex-1 p-[2vh] bg-card flex flex-col ">
        <div className="flex-[1] px-[3vw] flex justify-start gap-[3vh]">
          <div className=" size-[13vh]">
            <img
              src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg"
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="pt-[1vh]">
            <div className="text-xl">Michael Smith</div>
            <div className="rating h-[3vh]">
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                emptyIcon={<StarBorderIcon fontSize="inherit" className="dark:text-[#414148]" />}
              />
            </div>
          </div>
        </div>

        <div className="flex-[3] p-[3vh] text-justify">{t('home.testimonials.comment3')}</div>
      </div>
    </div>
  );
}

export default Testimonials;
