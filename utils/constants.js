import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { CTA } from './enums';

export const menuItems = [
  { text: 'Pricing', href: '/pricing', isHeader: true },
  { text: 'Sign In', href: '/signin', isHeader: true },
  { text: 'Create Account', href: '/register', isButton: true, isHeader: true },
  { text: 'About', href: '/', isFooter: true, icon: '' },
  { text: 'Privacy', href: '/', isFooter: true, icon: '' },
  { text: 'Terms', href: '/', isFooter: true, icon: '' },
  { text: 'Contact', href: '/contact', isFooter: true },
];

export const formInputs = [
  {
    type: 'text',
    name: 'name',
    id: 'name',
    placeholder: 'Name',
    icon: AccountCircleOutlinedIcon,
    isRegister: true,
    autoComplete: 'off',
  },
  {
    type: 'text',
    name: 'email',
    id: 'email',
    placeholder: 'Email',
    icon: AlternateEmailOutlinedIcon,
    isLogin: true,
    isRegister: true,
    autoComplete: 'on',
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'Password',
    icon: LockOpenOutlinedIcon,
    isLogin: true,
    isRegister: true,
    autoComplete: 'current-password',
  },
  {
    type: 'password',
    name: 'confirmPassword',
    id: 'confirmPassword',
    placeholder: 'Confirm Password',
    icon: LockOpenOutlinedIcon,
    isRegister: true,
    autoComplete: 'off',
  },
];

export const pricingPlans = {
  basic: {
    plan: 'Basic',
    price: '10',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod.',
    style: 'bg-neutral-100 text-neutral-500 border-neutral-400',
    button: CTA.TRY_NOW,
  },
  plus: {
    plan: 'Plus',
    price: '15',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod.',
    style: 'bg-third text-neutral-800 border-neutral-400',
    button: CTA.TRY_FREE,
  },
  pro: {
    plan: 'Pro',
    price: '20',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod.',
    style: 'bg-primary text-white border-primary',
    button: CTA.TRY_FREE,
  },
};
// export const pricingPlans = [{ text: 'Pricing', href: '/pricing', isHeader: true }];

//TODO
// var text = {
//   texto1: 'asdasd',
// };
