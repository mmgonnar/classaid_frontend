'use client';
import { formInputs } from '@/utils/constants';
import { CTA } from '@/utils/enums';
import MainButton from '../MainButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationFront } from '@/schemas/userSchema';
import api from '@/utils/Api/Api';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toastApiCall } from '@/utils/functions';

function RegisterForm() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();

  const registerInputs = formInputs.filter((item) => item.isRegister);

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(validationFront),
  });

  const onSubmit = async (userData) => {
    toastApiCall(api.createUser(userData), {
      loading: 'Creating user...',
      redirectTo: 'signin',
      successMessage: 'User created correctly',
      errorMessage: 'Error creating user',
      router: route,
    });

    // try {
    //   setIsLoading(true);
    //   setError(null);

    //   const response = await api.createUser(userData);

    //   if (response.success) {
    //     route.push('signin');
    //   }
    // } catch (error) {
    //   setError(error.message || 'Error');
    // }
  };

  return (
    <form
      action="submit"
      noValidate
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      {registerInputs.map((item) => (
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
          {formState.errors[item.name] && (
            <p className="text-xs text-red-500">{formState.errors[item.name].message}</p>
          )}
        </div>
      ))}
      {/* ERROR */}
      {error && <p className="text-center text-xs text-red-500">{error}</p>}
      <div className="flex justify-center pt-4 sm:justify-start">
        <MainButton
          type="submit"
          variant="primary"
          //text={CTA.SIGN_IN}
          text={isLoading ? 'Creating...' : CTA.SIGN_IN}
        />
      </div>
    </form>
  );
}

export default RegisterForm;
