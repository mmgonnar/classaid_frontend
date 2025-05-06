'use client';
import { formInputs } from '@/utils/constants';
import { CTA } from '@/utils/enums';
import MainButton from '../MainButton';

function RegisterForm() {
  const registerInputs = formInputs.filter((item) => item.isRegister);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('x');
  };

  return (
    <div className="flex flex-col gap-10">
      <form action="submit" className="flex flex-col gap-3" onSubmit={handleSubmit}>
        {loginInputs.map((item) => (
          <div
            key={item.id}
            className="flex w-[250px] items-center rounded-md border border-neutral-400 p-1 text-sm"
          >
            {item.icon && <item.icon className="mr-1 h-5 w-5 text-neutral-400" />}

            <input
              type={item.type}
              name={item.name}
              id={item.id}
              placeholder={item.placeholder}
              autoComplete={item.autoComplete}
              className="flex-1 outline-none"
            />
          </div>
        ))}
      </form>
      <button className="text-primary cursor-pointer text-left text-sm">
        Forgot your password?
      </button>
      <MainButton type="submit" variant="primary" text={CTA.SIGN_IN} />
    </div>
  );
}

export default RegisterForm;
