import MainButton from '@/components/MainButton';
import { CTA } from '@/utils/enums';
import Link from 'next/link';

import LoginForm from '@/components/forms/LoginForm';
import Copyright from '@/components/Copyright';

function Login() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[linear-gradient(345deg,rgba(101,156,246,0.3),rgba(246,246,246,0.2))] md:relative md:flex-row">
      <div className="mx-auto hidden max-w-4xl flex-col gap-6 px-30 text-neutral-700 md:flex md:w-3/5">
        <h1 className="text-3xl font-semibold">A cool base line goes here!</h1>
        <h2 className="text-xl font-semibold">Another catch phrase to punch the message</h2>
        <p className="font-base w-auto pb-10 text-lg">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean comodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus
        </p>
        <MainButton variant="secondary" text={CTA.LEARN_MORE} />
      </div>
      <div className="flex flex-col justify-center gap-4 rounded rounded-s-xl bg-white p-6 shadow-2xl md:min-h-screen md:w-2/5 md:p-20">
        <Link href="/">
          <h2 className="text-primary text-base font-bold">
            Classs<span className="font-black">Aid</span>
          </h2>
        </Link>
        <div className="pb-7 text-neutral-700">
          <h3 className="pb-2 text-xl font-medium md:pb-4">Welcome back!</h3>
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
      <div className="flex justify-center opacity-30 md:absolute md:bottom-0 md:left-0">
        <Copyright variant="xs" />
      </div>
    </section>
  );
}

export default Login;
