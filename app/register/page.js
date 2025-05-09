import MainButton from '@/components/MainButton';
import { CTA } from '@/utils/enums';
import Link from 'next/link';

import LoginForm from '@/components/forms/LoginForm';
import Copyright from '@/components/Copyright';
import RegisterForm from '@/components/forms/RegisterForm';

function Login() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[linear-gradient(345deg,rgba(101,156,246,0.3),rgba(246,246,246,0.2))] md:relative md:flex-row">
      <div className="container mx-auto hidden max-w-4xl flex-col gap-6 px-30 text-neutral-700 md:flex md:w-3/5">
        <h1 className="text-3xl font-semibold">A cool base line goes here!</h1>
        <h2 className="text-xl font-semibold">Another catch phrase to punch the message</h2>
        <p className="font-base w-auto pb-5 text-lg">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean comodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus
        </p>
        <MainButton variant="secondary" text={CTA.LEARN_MORE} />
      </div>
      <div className="flex flex-col justify-center gap-4 rounded bg-white p-4 shadow-2xl md:min-h-screen md:w-2/5 md:rounded-s-xl md:p-20">
        <Link href="/">
          <h2 className="text-primary text-base font-bold">
            Classs<span className="font-black">Aid</span>
          </h2>
        </Link>
        <div className="pb-7 text-neutral-700">
          <h3 className="pb-2 text-xl font-medium md:pb-4">
            Welcome, <br /> let's get started!!
          </h3>
          <p className="text-sm">
            Please add your information to register. <br />
            If you are a member, please{' '}
            <a className="text-primary cursor-pointer font-medium" href="/register">
              login
            </a>
            .
          </p>
        </div>
        <RegisterForm />
      </div>
      <div className="w-full px-4 pb-4 opacity-30 md:absolute md:bottom-0 md:left-0 md:px-0 md:pb-0">
        <Copyright variant="sm" />
      </div>
    </section>
  );
}

export default Login;
