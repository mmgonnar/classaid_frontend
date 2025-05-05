import Link from 'next/link';

function Login() {
  return (
    <section className="grid grid-cols-1 grid-rows-2">
      <div className="bg-secondary flex flex-col gap-4">
        <Link href="/">
          <h2 className="text-primary text-base font-bold">
            Classs<spa className="font-black">Aid</spa>
          </h2>
        </Link>
        <div className="text-neutral-700">
          <h3 className="text-2xl">Welcome back!</h3>
          <p className="text-base">
            Please use your credentials to login. <br />
            If you are not a member, please{' '}
            <a className="text-primary cursor-pointer font-medium" href="/register">
              register
            </a>
            .
          </p>
        </div>

        <form action="submit">
          {/* Mapear inputs */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="rounded border border-neutral-400 px-4"
          />
          <Link href="/" />
          <p className="text-primary cursor-pointer text-sm"> Forgot your password?</p>
        </form>
      </div>
      <div className="w-[300px] bg-[linear-gradient(345deg,rgba(101,156,246,0.3),rgba(246,246,246,0.2))]"></div>
    </section>
  );
}

export default Login;
