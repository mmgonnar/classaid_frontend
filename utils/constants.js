import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import { CTA } from './enums';
import { SupportOutlined } from '@mui/icons-material';

export const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5}$/;

export const PROTECTED_ROUTES = ['/dashboard'];
export const PUBLIC_ROUTES = ['/login', '/signup', '/', '/signin', '/api/users/'];

export const menuItems = [
  { text: 'Pricing', href: '/pricing', isHeader: true },
  { text: 'Sign In', href: '/signin', isHeader: true },
  { text: 'Create Account', href: '/register', isButton: true, isHeader: true },
  { text: 'About', href: '/', isFooter: true, icon: '' },
  { text: 'Privacy', href: '/', isFooter: true, icon: '' },
  { text: 'Terms', href: '/', isFooter: true, icon: '' },
  { text: 'Contact', href: '/contact', isFooter: true },
  { text: 'Add', href: '/dashboard', icon: AddIcon, isDashboard: true, isProfileDrawer: true },
  {
    text: 'Calendar',
    href: '/dashboard',
    icon: CalendarTodayIcon,
    isDashboard: true,
    isProfileDrawer: true,
  },
  {
    text: 'Notifications',
    href: '/dashboard',
    icon: NotificationsNoneOutlinedIcon,
    isDashboard: true,
    isProfileDrawer: true,
  },
  {
    text: 'Profile',
    href: '/dashboard',
    icon: AccountCircleIcon,
    isDashboard: true,
    isButton: true,
  },
  { text: 'Dashboard', href: '/dashboard', icon: DashboardIcon, isSidebar: true },
  { text: 'Classes', href: '/dashboard', icon: SchoolOutlinedIcon, isSidebar: true },
  { text: 'Groups', href: '/dashboard', icon: Groups2OutlinedIcon, isSidebar: true },
  { text: 'Attendance', href: '/dashboard', icon: AssignmentTurnedInOutlinedIcon, isSidebar: true },
  { text: 'Calendar', href: '/dashboard', icon: CalendarTodayIcon, isSidebar: true },
  // { text: 'Settings', href: '/', icon: SettingsIcon, isSidebar: true },
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
    type: 'email',
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

export const helpItems = [
  {
    text: 'Tapalosda',
    href: '/dashboard',
    icon: SupportAgentOutlinedIcon,
    className: '',
  },
  {
    text: 'Email us',
    href: '/dashboard',
    icon: EmailOutlinedIcon,
  },
  {
    text: 'Biling',
    href: '/dashboard',
    icon: ReceiptLongOutlinedIcon,
  },
  {
    text: 'Resources',
    href: '/dashboard',
    icon: LayersOutlinedIcon,
  },
];
