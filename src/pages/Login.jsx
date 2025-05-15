import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Link } from 'react-router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import Alert from '@/components/ui/Alert.jsx';
import { useTheme } from '@/components/ui/theme-provider.jsx';
import { cn } from '@/lib/utils.js';

function Login() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [show, setShow] = useState(false);

  //Form şeması
  const loginFormSchema = z.object({
    email: z
      .string()
      .min(6, { message: t('login.errors.email.min') })
      .max(128, { message: t('login.errors.email.max') })
      .email({ message: t('login.errors.email.invalid') }),
    password: z
      .string()
      .min(6, { message: t('login.errors.password.min') })
      .max(128, { message: t('login.errors.password.max') }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({ resolver: zodResolver(loginFormSchema) });

  const clearErrorMessages = useCallback(() => {
    clearErrors();
  }, [clearErrors]);

  useEffect(() => {
    if (errors.email || errors.password) {
      const timer = setTimeout(() => clearErrorMessages(), 5000);
      return () => clearTimeout(timer);
    }
  }, [errors, clearErrors]);

  useEffect(() => {
    if (errors.email) {
      enqueueSnackbar(<Alert message={errors.email.message} type="error" />, {
        anchorOrigin: { horizontal: 'right', vertical: 'top' },
      });
    }
    if (errors.password) {
      enqueueSnackbar(<Alert message={errors.password.message} type="error" />, {
        anchorOrigin: { horizontal: 'right', vertical: 'top' },
      });
    }
  }, [errors]);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  const imgClasses = useMemo(() => {
    if (theme === 'dark') {
      return show ? 'w-[40vw] top-[15vh] left-[-15vh]' : 'w-[10vw] top-[5vh] left-[-20vw]';
    } else {
      return show ? 'w-[35vw] top-[20vh] left-[-5vh]' : 'w-[10vw] top-[15vh] left-[-20vw]';
    }
  }, [theme, show]);

  function onSubmit(values) {
    window.alert(values.email + ' , ' + values.password);
    window.location = '/';
  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-row relative">
      <div className="absolute top-[2vh] left-[2vw]">
        <Link to="/" className="h-full w-fit flex gap-[1vw] items-center">
          <img
            src={theme === 'dark' ? '/darkmodelogo.png' : '/lightmodelogo.png'}
            alt=""
            className="h-[5vh]"
          />
          <div className="text-3xl">Rental Car</div>
        </Link>
      </div>
      <div className="flex-1 bg-[image:var(--bg-customGradient-3)]"></div>
      <div className="flex-[2]"></div>
      <div className="absolute overflow-hidden top-[10vh] bottom-[10vh] left-[15vw] right-[15vw] rounded-lg shadow-[0_0_1vh_1vh_rgba(0,0,0,0.15)] flex flex-row-reverse pr-[5vw] items-center">
        <img
          src={theme === 'dark' ? '/login-car-dark.png' : '/login-car.png'}
          alt=""
          className={cn('absolute transition-all duration-1000 select-none', imgClasses)}
        />
        <div className="w-1/2 p-[3vw_4vw] flex flex-col">
          <div className="title mb-[5vh] text-3xl">
            <h3>{t('login.title')}</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-foreground text-sm">
            <div className="flex">
              <Input {...register('email')} placeholder={t('login.email')} />
            </div>
            <div className="flex">
              <Input {...register('password')} placeholder={t('login.password')} />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
          <div className="mt-[2vh] flex items-center justify-center gap-[2vh]">
            {t('login.forgot-pass.text')}
            <Button variant="link" className="p-0 underline">
              <Link to="/resetpassword">{t('login.forgot-pass.button')}</Link>
            </Button>
          </div>
          <div className="text-sm flex items-center justify-center gap-[2vh]">
            {t('login.signup.text')}
            <Button variant="link" className="p-0 underline">
              <Link to="/signup">{t('login.signup.button')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
