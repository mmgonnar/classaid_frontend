'use client';

import MainButton from '../buttons/MainButton';
import { CTA } from '@/utils/enums';
import { formInputs } from '@/utils/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginUserValidationSchema } from '@/schemas/userSchema';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';

function LoginForm() {
  const router = useRouter();
  const loginInputs = formInputs.filter((item) => item.isLogin);
  const { handleLogin } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginUserValidationSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (credentials) => {
    handleLogin(credentials);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-2">
      {loginInputs.map((item) => (
        <div key={item.id} className="mb-1">
          <div className="flex max-w-90 items-center rounded-md border border-neutral-400 p-1 text-sm">
            {item.icon && <item.icon className="mx-1 h-5 text-neutral-400" />}

            <input
              type={item.type}
              name={item.name}
              id={item.id}
              placeholder={item.placeholder}
              autoComplete={item.autoComplete}
              className="flex-1 outline-none"
              {...register(item.name)}
            />
          </div>
          {errors[item.name] && <p className="text-xs text-red-500">{errors[item.name].message}</p>}
        </div>
      ))}

      <button type="button" className="text-primary cursor-pointer text-left text-sm">
        Forgot your password?
      </button>
      <div className="flex justify-center pt-4 sm:justify-start">
        <MainButton
          type="submit"
          variant="primary"
          text={isSubmitting ? 'Signing in...' : CTA.SIGN_IN}
          disabled={isSubmitting}
          className="w-full md:w-40"
        />
      </div>
    </form>
  );
}

export default LoginForm;
