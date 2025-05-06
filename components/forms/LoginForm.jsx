'use client';
import Link from 'next/link';
import MainButton from '../MainButton';
import { CTA } from '@/utils/enums';
import { formInputs } from '@/utils/constants';

function LoginForm() {
  const submitInputs = formInputs.filter((item) => item.isLogin);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form action="submit" className="flex w-[550px] flex-col gap-3" onSubmit={handleSubmit}>
        {submitInputs.map((item) => (
          <div
            key={item.id}
            className="flex w-[250px] items-center rounded-md border border-neutral-400 p-1 text-xs"
          >
            {item.icon && <item.icon className="mr-1 h-5 w-5 text-neutral-400" />}

            <input
              type={item.type}
              name={item.name}
              id={item.id}
              placeholder={item.placeholder}
              className="flex-1 outline-none"
            />
          </div>
        ))}

        <Link href="/">
          <p className="text-primary cursor-pointer text-sm">Forgot your password?</p>
        </Link>
        <MainButton type="submit" variant="primary" text={CTA.SIGN_IN} />
      </form>
    </>
  );
}

export default LoginForm;
