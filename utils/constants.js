import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import { CTA } from './enums';

export const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5}$/;

export const PROTECTED_ROUTES = ['/dashboard'];
export const PUBLIC_ROUTES = ['/login', '/signup', '/', '/signin', '/api/users/'];

export const menuItems = [
  { text: 'Pricing', href: '/pricing', isHeader: true, isAuthenticated: true },
  { text: 'Dashboard', href: '/dashboard', isHeader: true, isAuthenticated: true },
  { text: 'Sign In', href: '/signin', isHeader: true },
  { text: 'Create Account', href: '/register', isButton: true, isHeader: true },
  // {
  //   text: 'Enter',
  //   href: '/',
  //   icon: ExitToAppIcon,
  //   isButton: true,
  //   isAuthenticated: true,
  // },
  { text: 'About', href: '/about', isFooter: true, icon: '' },
  { text: 'Privacy', href: '/privacy', isFooter: true, icon: '' },
  { text: 'Terms', href: '/terms', isFooter: true, icon: '' },
  { text: 'Contact', href: '/contact', isFooter: true },
  { text: 'Add', href: '/dashboard', icon: AddIcon, isDashboard: true, isProfileDrawer: true },
  {
    text: 'Calendar',
    href: '',
    icon: CalendarTodayIcon,
    isDashboard: true,
  },
  {
    text: 'Notifications',
    href: '',
    icon: NotificationsNoneOutlinedIcon,
    isDashboard: true,
    isProfileDrawer: true,
  },
  {
    text: 'Account',
    href: '',
    icon: AssignmentIndIcon,
    // isDashboard: true,
    isButton: true,
    // isAuthenticated: true,
  },
  {
    text: 'Profile',
    href: '',
    icon: AccountCircleIcon,
    isDashboard: true,
    isButton: true,
    isAuthenticated: true,
  },
  {
    text: 'Logout',
    href: '',
    icon: LogoutIcon,
    // isDashboard: true,
    isButton: true,
    // isAuthenticated: true,
  },
  { text: 'Dashboard', href: '/dashboard', icon: DashboardIcon, isSidebar: true },
  { text: 'Classes', href: '/dashboard/classes', icon: SchoolOutlinedIcon, isSidebar: true },
  { text: 'Groups', href: '/dashboard/groups', icon: Groups2OutlinedIcon, isSidebar: true },
  {
    text: 'Attendance',
    href: '/dashboard/attendance',
    icon: AssignmentTurnedInOutlinedIcon,
    isSidebar: true,
  },
  { text: 'Calendar', href: '/dashboard/calendar', icon: CalendarTodayIcon, isSidebar: true },
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

export const helpMenu = [
  {
    text: 'Talk with us',
    href: '/help',
    icon: SupportAgentOutlinedIcon,
    className: 'col-start-1 row-start-1',
    isHelp: true,
  },
  {
    text: 'Email us',
    href: '/help',
    icon: EmailOutlinedIcon,
    className: 'col-start-1 row-start-2 ',
    isHelp: true,
  },
  {
    text: 'Biling',
    href: '/pricing',
    icon: ReceiptLongOutlinedIcon,
    className: 'col-start-2 row-start-1 ',
    isHelp: true,
  },
  {
    text: 'Resources',
    href: '/dashboard',
    icon: LayersOutlinedIcon,
    className: 'col-start-2 row-start-2 ',
    isHelp: true,
  },
];

export const subscriptionMenu = [
  {
    text: 'Free edition',
    href: '',
    className: 'col-start-1 row-start-1',
    isSubscription: true,
  },
  {
    text: 'UPGRADE',
    href: '/pricing',
    className: 'col-start-1 row-start-2 text-blue-700 underline underline-offset-1',
    isSubscription: true,
  },
  {
    text: 'Try another version',
    href: '/pricing',
    className: 'col-start-2 row-start-1 ',
    isSubscription: true,
  },
  {
    text: '',
    href: '',
    className: 'col-start-2 row-start-2 ',
    isSubscription: true,
  },
];

export const routeNames = {
  '/dashboard': 'Home | Dashboard',
  '/dashboard/classes': 'Home | Classes',
  '/dashboard/attendance': 'Attendance',
  '/dashboard/groups': 'Groups',
};
