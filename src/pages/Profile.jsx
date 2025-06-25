import React, { useEffect, useState } from 'react';
import Header from '@/layouts/header.jsx';
import { NavLink } from 'react-router-dom';
import Footer from '@/layouts/footer.jsx';
import { FaIdCard, FaRegCircleUser } from 'react-icons/fa6';
import { Input } from '@/components/ui/input.jsx';
import { Button } from '@/components/ui/button.jsx';
import { enqueueSnackbar } from 'notistack';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '@/components/ui/Alert.jsx';
import { Label } from '@/components/ui/Label.jsx';
import { useAuth } from '@/context/AuthContext.jsx';
import Users from '@/temp-data/users.json';

function Profile() {
  const [activeTab, setActiveTab] = useState('personal');
  const { user } = useAuth();
  console.log(user);
  const links = [
    {
      name: 'profile',
      link: '/profile/me',
    },
    {
      name: 'myRes',
      link: '/profile/my-rentals',
    },
    {
      name: 'changePass',
      link: '/profile/change-password',
    },
  ];
  const { t } = useTranslation();

  const personal = z.object({
    firstname: z.string().min(2).max(64),
    lastname: z.string().min(2).max(64),
    personalID: z
      .string()
      .length(11)
      .regex(/^\d{11}$/),
    birthdate: z.string(),
    phone: z.string().regex(/^\+?\d{10,15}$/),
    email: z
      .string()
      .min(6, { message: t('signup.errors.email.tooShort') })
      .max(128, { message: t('signup.errors.email.tooLong') })
      .email({ message: t('signup.errors.email.invalidFormat') }),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(personal),
  });

  useEffect(() => {
    if (errors) {
      for (const key in errors) {
        enqueueSnackbar(<Alert message={errors[key].message} type="error" />, {
          anchorOrigin: { horizontal: 'right', vertical: 'top' },
        });
      }
    }
  }, [errors]);

  const renderProfile = () => {
    if (user) {
      const userData = Users.find((usr) => usr.id === user.id);
      return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify- gap-[8vh]">
          <div className="flex gap-[2vh]">
            <div className="flex-1">
              <Label htmlFor="firstname">İsim *</Label>
              <Input
                {...register('firstname')}
                id="firstname"
                defaultValue={userData['first_name']}
                className="!text-lg !h-[6vh]"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="lastname">Soyisim *</Label>
              <Input
                id="lastname"
                {...register('lastname')}
                defaultValue={userData['last_name']}
                className="!text-lg !h-[6vh]"
              />
            </div>
          </div>
          <div className="flex gap-[2vh]">
            <div className="flex-1">
              <Label htmlFor="id">Kimlik No *</Label>
              <Input
                id="id"
                {...register('personalID')}
                defaultValue={userData['personal_id']}
                disabled
                className="!text-lg !h-[6vh]"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="date">Doğum Tarihi *</Label>
              <Input
                id="date"
                {...register('birthdate')}
                defaultValue={userData['birth_date']}
                disabled
                className="!text-lg !h-[6vh]"
              />
            </div>
          </div>
          <div className="flex gap-[2vh]">
            <div className="flex-1">
              <Label htmlFor="phone">Telefon *</Label>
              <Input
                id="phone"
                {...register('phone')}
                defaultValue={userData['phone']}
                className="!text-lg !h-[6vh]"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="email">Eposta *</Label>
              <Input
                id="email"
                {...register('email')}
                defaultValue={userData['email']}
                className="!text-lg !h-[6vh]"
              />
            </div>
          </div>
          <div className="self-end">
            <Button type="submit" className="self-start">
              {t('profile.save')}
            </Button>
          </div>
        </form>
      );
    }
  };
  const renderDriver = () => {
    if (user) {
      const userData = Users.find((usr) => usr.id === user.id);
      return (
        <div className="flex flex-col justify-start w-2/3">
          <div className="h-[17vh]">
            <Label htmlFor="driverNo">Ehliyet Numarası *</Label>
            <Input
              id="driverNo"
              defaultValue={userData['driver_licence_no']}
              className="!text-lg !h-[6vh]"
              disabled
            />
          </div>
          <div className="h-[17vh]">
            <Label htmlFor="driverDate">Ehliyet Veriliş Tarihi *</Label>
            <Input
              id="driverDate"
              defaultValue={userData['driver_licence_date']}
              className="!text-lg !h-[6vh]"
              disabled
            />
          </div>
        </div>
      );
    }
  };

  const onSubmit = () => {
    enqueueSnackbar(<Alert message={t('profile.updated')} type="success" />, {
      anchorOrigin: { horizontal: 'right', vertical: 'top' },
    });
  };
  return (
    <div>
      <Header animation={false} />
      <div className="main w-[100vw] h-[90vh] mt-[10vh] flex p-[3vh_10vw] gap-[3vh]">
        <div className="bg-card rounded-lg flex-1 h-[20vh] flex flex-col gap-[1vh] p-[2vh] shadow-md">
          {links.map((link) => (
            <NavLink
              to={link.link}
              className="flex-1 hover:bg-white rounded-md p-[1vh] flex items-center hover:bg-opacity-10"
            >
              {t(`profile.links.${link.name}`)}
            </NavLink>
          ))}
        </div>
        <div className="bg-card flex flex-col gap-[2vh] flex-[4] h-full rounded-lg p-[2vh] shadow-md">
          <div className="tabs flex p-[1vh] relative gap-[2vh] bg-background rounded-lg">
            <button
              className="flex-1 h-[5vh] relative z-10"
              onClick={() => setActiveTab('personal')}
            >
              {t('profile.titles.personal')}
            </button>
            <button
              className="flex-1 h-[5vh] relative z-10"
              onClick={() => setActiveTab('license')}
            >
              {t('profile.titles.driver')}
            </button>
            <div
              className={`absolute bg-secondary top-2 rounded-md bottom-2 z-0 transition-all duration-500 ${activeTab === 'personal' ? 'left-2 right-[50%]' : 'left-[50%] right-2'}`}
            ></div>
          </div>
          <div className="flex-1 flex flex-col">
            {activeTab === 'personal' ? (
              <div className="flex flex-1 flex-col">
                <div className="title flex items-center gap-[1vh]">
                  <div className="icon bg-secondary rounded-md flex items-center justify-center size-[5vh]">
                    <FaRegCircleUser size={28} />
                  </div>
                  <div className="text text-xl">{t('profile.titles.personal')}</div>
                </div>
                <div className="infos flex h-full flex-1 p-[3vh]">{renderProfile()}</div>
              </div>
            ) : (
              <div className="flex flex-1 flex-col">
                <div className="title flex items-center gap-[1vh]">
                  <div className="icon bg-secondary rounded-md flex items-center justify-center size-[5vh]">
                    <FaIdCard size={28} />
                  </div>
                  <div className="text text-xl">{t('profile.titles.driver')}</div>
                </div>
                <div className="infos flex h-full flex-1 p-[3vh]">{renderDriver()}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
