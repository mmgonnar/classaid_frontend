'use client';

import MainButton from '../MainButton';
import { CTA } from '@/utils/enums';
import { formInputs } from '@/utils/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from '@/lib/schemas';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { setToken } from '@/utils/token';
import auth from '@/utils/Api/Auth';

function LoginForm() {
  const router = useRouter();
  const loginInputs = formInputs.filter((item) => item.isLogin);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (credentials) => {
    try {
      console.log(credentials.email, 'EMAIL');
      const response = await auth.login(credentials.email, credentials.password);
      console.log(response, 'RESPONSE');

      if (response.success && response.data?.token) {
        console.log(response.data.token, 'DATA TOKEN');
        setToken(response.data.token);
        toast.success('Welcome back!');
        console.log('GO TO DASHBOARD');
        router.push('/dashboard');
        router.refresh();
      } else {
        console.error(response.message, 'AAAAAA');
        toast.error(response.message || 'Error signing in');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'Error signing in');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-2">
      {loginInputs.map((item) => (
        <div key={item.id} className="mb-1">
          <div className="mx-auto flex items-center rounded-md border border-neutral-400 p-1 text-sm">
            {item.icon && <item.icon className="mr-1 h-5 w-5 text-neutral-400" />}

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
        />
      </div>
    </form>
  );
}

export default LoginForm;
