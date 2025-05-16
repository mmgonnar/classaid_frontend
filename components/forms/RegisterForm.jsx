'use client';
import { formInputs } from '@/utils/constants';
import { CTA } from '@/utils/enums';
import MainButton from '../MainButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema } from '@/lib/schemas';

function RegisterForm() {
  const registerInputs = formInputs.filter((item) => item.isRegister);
  const onSubmit = (data) => {
    console.log(data);
    console.log('data');
  };

  const { handleSubmit, register, formState } = useForm({ resolver: yupResolver(userSchema) });

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

      <div className="flex justify-center pt-4 sm:justify-start">
        <MainButton type="submit" variant="primary" text={CTA.SIGN_IN} />
      </div>
    </form>
  );
}

export default RegisterForm;
