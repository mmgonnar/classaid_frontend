import MainButton from '@/components/MainButton';
import { CTA } from '@/utils/enums';
import Link from 'next/link';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SubmitForm from '@/components/SubmitForm';

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

        <form action="submit" className="flex flex-col gap-3">
          {/* Mapear inputs */}
          <div className="w-[250px] rounded-md border border-neutral-400">
            <AccountCircleOutlinedIcon className="mr-1 text-sm text-neutral-400" />
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>

          <Link href="/" />
          <p className="text-primary cursor-pointer text-sm"> Forgot your password?</p>
          <MainButton variant="primary" text={CTA.SIGN_IN} />
        </form>
        <SubmitForm />
      </div>
    </section>
  );
}

export default Login;
