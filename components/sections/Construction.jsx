'use client';

import Copyright from '@/components/Copyright';
import Logo from '@/components/Logo';
import MainButton from '@/components/buttons/MainButton';
import { CTA } from '@/utils/enums';
import { useRouter } from 'next/navigation';

function Construction() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[linear-gradient(345deg,rgba(101,156,246,0.3),rgba(246,246,246,0.2))] md:relative md:flex-row">
      <div className="mx-auto hidden max-w-4xl flex-col gap-6 px-30 text-neutral-700 md:flex md:w-3/5">
        <h1 className="text-3xl font-semibold">We’re working on it!</h1>
        <h2 className="text-xl font-semibold">This section is still under construction…</h2>
        <p className="w-auto pb-10 text-lg">
          It’ll be ready soon to make your classroom management even smoother.
        </p>
        <p className="text-sm">
          Kinda like when students say “I swear I’m almost done with the homework!” 😅
        </p>
      </div>
      <div className="flex flex-col justify-center gap-4 rounded bg-white p-6 shadow-2xl md:min-h-screen md:w-2/5 md:rounded-s-xl md:p-20">
        <Logo className="w-[100px] pb-3" />
        <div className="max-w-lg pb-4 text-neutral-700">
          <h2 className="pb-3 text-7xl">🏗️</h2>
          <h3 className="text-primary pb-2 text-3xl font-bold md:pb-4">Under construction</h3>
          <p className="pb-4 text-lg font-bold">Oops! This section is still in progress.</p>
          <p className="text-md pb-8">We’re building something helpful for your teaching tasks.</p>
          <MainButton variant="secondary" text={CTA.BACK} onClick={goBack} />
          <p className="pt-10 pb-3 text-xs font-semibold">What else can you do?</p>
          <p className="pb-1 text-xs">
            Head back to the{' '}
            <a className="text-primary cursor-pointer font-medium" href="/dashboard">
              dashboard
            </a>{' '}
            to keep your class in order.
          </p>
          <p className="text-xs">
            Report this error to tech support through the{' '}
            <a className="text-primary cursor-pointer font-medium" href="/help">
              help center
            </a>
            .
          </p>
        </div>
        {/*
      <LoginForm className="max-w-lg" /> */}
      </div>
      <div className="w-full px-4 pb-4 opacity-30 md:absolute md:bottom-0 md:left-0 md:px-0 md:pb-0">
        <Copyright variant="sm" />
      </div>
    </section>
  );
}

export default Construction;
