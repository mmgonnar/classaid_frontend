import { formInputs } from '@/utils/constants';
import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { CTA } from '@/utils/enums';
import Link from 'next/link';
import MainButton from './MainButton';

function SubmitForm() {
  const submitInputs = formInputs.filter((item) => item.isLogin);

  return (
    <div>
      <form action="submit" className="flex flex-col gap-3">
        {submitInputs.map((item) => (
          <div
            key={item.id}
            className="flex w-[250px] items-center rounded-md border border-neutral-400 p-1 text-xs"
          >
            {item.icon && <item.icon className="texr mr-1 h-5 w-5 text-neutral-400" />}

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
        <MainButton variant="primary" text={CTA.SIGN_IN} />
      </form>
    </div>
  );
}

export default SubmitForm;
