import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/src/index.js';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { useCallback, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';
import Alert from '@/components/ui/Alert.jsx';
import { useTheme } from '@/components/ui/theme-provider.jsx';
import { cn } from '@/lib/utils.js';
function Login() {
  const { t } = useTranslation();
  const { theme } = useTheme();
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

  function onSubmit(values) {
    window.alert(values.email + ' , ' + values.password);
    window.location = '/';
  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-row relative">
      <div className="flex-1 bg-[image:var(--bg-customGradient-3)]"></div>
      <div className="flex-[2]"></div>
      <div className="absolute overflow-hidden top-[10vh] bottom-[10vh] left-[15vw] right-[15vw] rounded-lg shadow-[0_0_1vh_1vh_rgba(0,0,0,0.15)] flex flex-row-reverse">
        <img
          src={theme === 'dark' ? '/login-car-dark.png' : '/login-car.png'}
          alt=""
          className={cn(
            'absolute ',
            theme === 'dark'
              ? 'w-[40vw] top-[15vh] left-[-18vh]'
              : 'top-[20vh] left-[-5vw] w-[35vw]'
          )}
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
          <div className="h-0 w-full border-b border-b-gray-500 text-gray-500 relative my-12">
            <span className="absolute top-[-12px] bg-background left-[45%] px-1">
              {t('login.or')}
            </span>
          </div>
          <div className="loginGoogle flex justify-center items-center">
            <Button
              variant="outline"
              className="w-full border-gray-400 text-md font-[500] flex justify-center gap-3 items-center rounded-lg border py-2"
            >
              <FcGoogle />
              {t('login.google')}
            </Button>
          </div>
          <div className="forgetPassword mt-5 flex items-center justify-center">
            {t('login.forgot-pass.text')}
            <Button variant="link" className="p-0 pl-2 underline">
              <Link to="/resetpassword">{t('login.forgot-pass.button')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
