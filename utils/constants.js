import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

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

//TODO
// var text = {
//   texto1: 'asdasd',
// };
