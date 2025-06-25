import React, { useCallback, useEffect } from 'react';
import Header from '@/layouts/header.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button.jsx';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { enqueueSnackbar } from 'notistack';
import Alert from '@/components/ui/Alert.jsx';

function ChangePassword() {
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
  function sendCode() {
    window.alert('Kod Gönderildi. Epostanızı Kontrol Edin');
  }
  const formSchema = z
    .object({
      emailCode: z.string().min(6, 'Kod en az 6 karakter olmalı'),
      oldPassword: z.string().min(6, 'Eski şifre en az 6 karakter olmalı'),
      newPassword: z
        .string()
        .min(8, 'Yeni şifre en az 8 karakter olmalı')
        .regex(/[A-Z]/, 'En az bir büyük harf içermeli')
        .regex(/[0-9]/, 'En az bir rakam içermeli'),
      confirmNewPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
      path: ['confirmNewPassword'],
      message: 'Şifreler eşleşmiyor',
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data) {}

  let clearErrorMessages = useCallback(() => {
    clearErrors();
  }, [clearErrors]);

  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => clearErrorMessages(), 3000);
      return () => clearTimeout(timer);
    }
  }, [errors, clearErrors]);

  useEffect(() => {
    if (errors) {
      for (const key in errors) {
        enqueueSnackbar(<Alert message={errors[key].message} type="error" />, {
          anchorOrigin: { horizontal: 'right', vertical: 'top' },
        });
      }
    }
  }, [errors]);
  return (
    <div>
      <Header animation={false} />
      <div className="main w-[100vw] h-[90vh] mt-[10vh] flex p-[3vh_10vw] gap-[3vh] ">
        <div className="bg-card rounded-lg flex-1 h-[20vh] flex flex-col gap-[1vh] p-[2vh] shadow-md">
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.link}
              className="flex-1 hover:bg-white rounded-md p-[1vh] flex items-center hover:bg-opacity-10"
            >
              {t(`profile.links.${link.name}`)}
            </NavLink>
          ))}
        </div>
        <div className="bg-card flex flex-col gap-[2vh] flex-[4] h-full rounded-lg p-[2vh] shadow-md">
          <div className="title text-2xl font-semibold">Şifre Değiştir</div>
          <div className="form w-2/3">
            <form className="flex flex-col gap-[5vh] " onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="code" className="text-lg">
                  Kod
                </Label>
                <div className="flex gap-[3vh]">
                  <Input id="code" type="number" className="flex-1" {...register('emailCode')} />
                  <Button type="button" variant="" onClick={sendCode} className="flex-1">
                    Kod Gönder
                  </Button>
                </div>
              </div>
              <div>
                <Label htmlFor="oldPass" className="text-lg">
                  Eski Şifre
                </Label>
                <Input type="password" id="oldPass" {...register('oldPassword')} />
              </div>
              <div>
                <Label htmlFor="newPass" className="text-lg">
                  Yeni Şifre
                </Label>
                <Input type="password" id="newPass" {...register('newPassword')} />
              </div>
              <div>
                <Label htmlFor="oldPass" className="text-lg">
                  Yeni Şifre (Tekrar)
                </Label>
                <Input type="password" id="newPassAgain" {...register('confirmNewPassword')} />
              </div>
              <div>
                <Button type="submit" className="w-1/2 self-center">
                  Değiştir
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
