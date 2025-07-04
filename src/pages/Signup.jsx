import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/theme-provider';
import { cn } from '@/lib/utils';
import { enqueueSnackbar } from 'notistack';
import Alert from '@/components/ui/Alert';
import { z } from 'zod';
import { DatePicker } from '@/components/ui/date-picker.jsx';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';

function Signup() {
  const { t } = useTranslation();

  const { theme } = useTheme();
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const signupSchema = () =>
    z
      .object({
        firstname: z
          .string()
          .min(2, { message: t('signup.errors.firstname.tooShort') })
          .max(64, { message: t('signup.errors.firstname.tooLong') }),

        lastname: z
          .string()
          .min(2, { message: t('signup.errors.lastname.tooShort') })
          .max(64, { message: t('signup.errors.lastname.tooLong') }),

        personalID: z
          .string()
          .length(11, { message: t('signup.errors.personalID.invalidLength') })
          .regex(/^\d{11}$/, { message: t('signup.errors.personalID.invalidFormat') }),

        birthdate: z
          .date({ message: t('signup.errors.birthdate.invalid') })
          .transform((val) => format(val, 'dd-MM-yyyy')),

        phone: z
          .string()
          .regex(/^\+?\d{10,15}$/, { message: t('signup.errors.phone.invalidFormat') }),

        email: z
          .string()
          .min(6, { message: t('signup.errors.email.tooShort') })
          .max(128, { message: t('signup.errors.email.tooLong') })
          .email({ message: t('signup.errors.email.invalidFormat') }),

        password: z
          .string()
          .min(8, { message: t('signup.errors.password.tooShort') })
          .max(128, { message: t('signup.errors.password.tooLong') }),

        confirmPassword: z
          .string()
          .min(8, { message: t('signup.errors.confirmPassword.tooShort') })
          .max(128, { message: t('signup.errors.confirmPassword.tooLong') }),

        driverLicenceNo: z
          .string()
          .min(5, { message: t('signup.errors.driverLicenceNo.tooShort') })
          .max(25, { message: t('signup.errors.driverLicenceNo.tooLong') }),

        driverLicenceDate: z
          .date({ message: t('signup.errors.driverLicenceDate.invalid') })
          .transform((val) => format(val, 'dd-MM-yyyy')),
      })
      .refine((data) => data.password === data.confirmPassword, {
        message: t('signup.errors.passwordsMismatch'),
        path: ['confirmPassword'],
      });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
    watch,
  } = useForm({
    resolver: zodResolver(signupSchema()),
  });

  const clearErrorMessages = useCallback(() => {
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

  const onSubmit = (data) => {
    enqueueSnackbar(
      <Alert message="✅ Kayıt başarılı! Geri dönüp giriş yapabilirsiniz" type="success" />,
      {
        anchorOrigin: { horizontal: 'right', vertical: 'top' },
      }
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  const imgClasses = useMemo(() => {
    if (theme === 'dark') {
      return show ? 'w-[40vw] top-[15vh] left-[-20vh]' : 'w-[10vw] top-[5vh] left-[-25vw]';
    } else {
      return show ? 'w-[30vw] top-[20vh] left-[-5vh]' : 'w-[10vw] top-[15vh] left-[-20vw]';
    }
  }, [theme, show]);

  return (
    <div className="w-[100vw] h-[100vh] flex flex-row relative">
      <div className="absolute top-[2vh] left-[2vw]">
        <Link to="/" className="h-full w-fit flex gap-[1vw] items-center">
          <img
            src={
              theme === 'dark'
                ? '/GO-Rentals-Transparent-Dark.png'
                : '/GO-Rentals-Transparent-Light.png'
            }
            alt=""
            className="h-[5vh]"
          />
        </Link>
      </div>
      <div className="flex-1 bg-[image:var(--bg-customGradient-3)]" />
      <div className="flex-[2]" />
      <div className="absolute overflow-hidden top-[10vh] bottom-[10vh] left-[15vw] right-[15vw] rounded-lg shadow-[0_0_1vh_1vh_rgba(0,0,0,0.15)] flex flex-row-reverse">
        <img
          src={theme === 'dark' ? '/login-car-dark.png' : '/login-car.png'}
          alt=""
          className={cn('absolute transition-all duration-1000 select-none', imgClasses)}
        />
        <div className="w-2/3 p-[5vw] flex flex-col">
          <div className="title mb-[3vh] text-2xl">
            <h3>{t('signup.title')}</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-x-[3vh] gap-y-[5vh]">
            <div className="flex gap-[5vh]">
              <Input {...register('firstname')} placeholder={t('signup.firstname')} />
              <Input {...register('lastname')} placeholder={t('signup.lastname')} />
            </div>
            <div className="flex gap-[5vh]">
              <Input
                {...register('personalID')}
                placeholder={t('signup.personalID')}
                className="flex-1"
              />
              <DatePicker
                selected={watch('birthdate')}
                className="flex-1"
                placeholder={t('signup.birthdate')}
                onSelect={(date) => setValue('birthdate', date)}
                startYearOffset={80}
                endYearOffset={18}
              />
            </div>
            <div className="flex gap-[5vh]">
              <Input
                {...register('driverLicenceNo')}
                placeholder={t('signup.driverLicenceNo')}
                className="flex-1"
              />
              <DatePicker
                selected={watch('driverLicenceDate')}
                placeholder={t('signup.driverLicenceDate')}
                onSelect={(date) => setValue('driverLicenceDate', date)}
                startYearOffset={65}
                endYearOffset={0}
              />
            </div>
            <div className="flex gap-[5vh]">
              <Input {...register('phone')} placeholder={t('signup.phone')} />
              <Input {...register('email')} placeholder={t('signup.email')} />
            </div>
            <div className="flex gap-[5vh]">
              <div className="relative flex-[1]">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  placeholder={t('signup.password')}
                />
                <BiSolidHide
                  size={20}
                  className={
                    'absolute right-2 top-1/2 transform -translate-y-1/2 text-xs cursor-pointer ' +
                    `${showPassword ? 'hidden' : ''}`
                  }
                  onClick={() => setShowPassword((prev) => !prev)}
                />
                <BiSolidShow
                  size={20}
                  className={
                    'absolute right-2 top-1/2 transform -translate-y-1/2 text-xs cursor-pointer ' +
                    `${showPassword ? '' : 'hidden'}`
                  }
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>

              <div className="relative flex-[1]">
                <Input
                  type={showConfirm ? 'text' : 'password'}
                  {...register('confirmPassword')}
                  placeholder={t('signup.confirmPassword')}
                />
                <BiSolidHide
                  size={20}
                  className={
                    'absolute right-2 top-1/2 transform -translate-y-1/2 text-xs cursor-pointer ' +
                    `${showConfirm ? 'hidden' : ''}`
                  }
                  onClick={() => setShowConfirm((prev) => !prev)}
                />
                <BiSolidShow
                  size={20}
                  className={
                    'absolute right-2 top-1/2 transform -translate-y-1/2 text-xs cursor-pointer ' +
                    `${showConfirm ? '' : 'hidden'}`
                  }
                  onClick={() => setShowConfirm((prev) => !prev)}
                />
              </div>
            </div>
            <Button type="submit" className="w-1/2 self-center">
              {t('signup.submit')}
            </Button>
          </form>
          <div className="text-sm flex items-center justify-center gap-[2vh]">
            {t('signup.login.text')}
            <Button variant="link" className="p-0 underline">
              <Link to="/login">{t('signup.login.button')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
