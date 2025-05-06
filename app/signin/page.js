import MainButton from '@/components/MainButton';
import { CTA } from '@/utils/enums';
import Link from 'next/link';

import LoginForm from '@/components/forms/LoginForm';
import RegisterForm from '@/components/forms/RegisterForm';

function Login() {
  return (
    <section className="m-auto flex bg-[linear-gradient(345deg,rgba(101,156,246,0.3),rgba(246,246,246,0.2))]">
      <div className="hidden text-neutral-700 md:block">
        <h1>dasdasdasdas</h1>
        <p>asdasdasdasdas</p>
      </div>
      <div className="flex flex-col gap-4 rounded rounded-s-lg bg-white p-6 md:w-[50%] md:place-self-end">
        <Link href="/">
          <h2 className="text-primary text-base font-bold">
            Classs<span className="font-black">Aid</span>
          </h2>
        </Link>
        <div className="text-neutral-700">
          <h3 className="text-xl">Welcome back!</h3>
          <p className="text-base">
            Please use your credentials to login. <br />
            If you are not a member, please{' '}
            <a className="text-primary cursor-pointer font-medium" href="/register">
              register
            </a>
            .
          </p>
        </div>

        <LoginForm />
      </div>
    </section>
  );
}

export default Login;
