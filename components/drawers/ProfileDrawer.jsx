'use-client';

import MainButton from '../MainButton';
import { CTA } from '@/utils/enums';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import Link from 'next/link';
import BaseDrawer from './BaseDrawer';
import {
  helpItems,
  helpMenu,
  menuItems,
  PROTECTED_ROUTES,
  subscriptionMenu,
} from '@/utils/constants';
import { cn } from '@/utils/functions';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SpinnerLoader from '../loaders/SpinnerLoader';
import BouncyLoader from '../loaders/BouncyLoader';
import UserContext from '@/context/UserContext';
import AuthContext from '@/context/AuthContext';
import { usePathname } from 'next/navigation';

function Drawer({ toggleMenu, isMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { authenticated } = useContext(AuthContext);
  const { handleLogout } = useContext(AuthContext);
  const { userData, loading } = useContext(UserContext);
  const router = useRouter();
  const pathname = usePathname();
  const profileDrawer = menuItems.filter((item) => item.isProfileDrawer);
  const helpItems = helpMenu.filter((item) => item.isHelp);
  const subscriptionItems = subscriptionMenu.filter((item) => item.isSubscription);
  const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));

  const getUserInitials = (name, lastName) => {
    let initials = '';

    if (name) {
      initials += name.trim()[0] || '';
    }

    if (lastName && initials.length < 2) {
      initials += lastName.trim()[0] || '';
    }

    return initials.toUpperCase().slice(0, 2);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router]);

  return (
    <>
      <BaseDrawer toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}>
        <div>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300"></div>
          <div
            className={cn(
              'fixed top-0 right-0 z-31 h-full w-[320px] gap-4 bg-white shadow-lg transition-transform duration-300',
            )}
          >
            <div className="flex h-full flex-col">
              <div
                className={cn(
                  'profile bg-third text-primary flex flex-col gap-3 pt-20 pb-6',
                  isScrolled && 'shadow-lg',
                )}
              >
                <div className="outline-primary m-auto mb-4 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white p-6 outline outline-offset-6">
                  {loading ? (
                    <BouncyLoader size="lg" color="border-primary" />
                  ) : (
                    <p className="text-primary text-4xl">
                      {userData ? getUserInitials(userData.name, userData.lastName) : '...'}
                    </p>
                  )}
                </div>

                {loading ? (
                  <BouncyLoader size="md" color="border-gray-500" />
                ) : (
                  <p className="text-center text-lg font-bold">
                    {userData
                      ? `${userData.name || ''} ${userData.lastName || ''}`.trim() ||
                        'No name available'
                      : 'No name available'}
                  </p>
                )}

                <div className="flex items-center justify-center gap-1">
                  <div className="text-center text-xs">
                    User ID:{' '}
                    {loading ? (
                      <SpinnerLoader size="sm" color="border-gray-500" />
                    ) : (
                      userData?._id || 'No id available'
                    )}
                  </div>
                  <div className="group relative">
                    <button className="flex cursor-pointer items-center justify-center pb-1">
                      <HelpOutlineOutlinedIcon sx={{ fontSize: '14px' }} />
                      <p
                        className={cn(
                          'absolute top-5 right-[-25] w-[280px] rounded-lg bg-white p-3 text-left text-[10px] shadow-xl/20',
                          'invisible group-hover:visible',
                          'opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                        )}
                      >
                        This is your unique identification number in ClassAid. <br />
                        <br />
                        It will be useful for our customer support team to identify you with this
                        number, especially when you reach us.
                      </p>
                    </button>
                  </div>
                </div>
                <p className="text-center text-xs">
                  Institution: <span className="font-semibold">UAGro</span>
                </p>
              </div>
              <div className={cn('flex-1 overflow-y-auto', isProtectedRoute && 'overflow-hidden')}>
                <div className="flex justify-center gap-2 py-5">
                  <MainButton
                    variant="primary"
                    size="sm"
                    text={CTA.PROFILE}
                    type="button"
                    href="profile"
                  />
                  <MainButton
                    onClick={handleLogout}
                    variant="secondary"
                    size="sm"
                    text={CTA.LOGOUT}
                    type="button"
                  />
                </div>
                <>
                  <div className="m-auto mb-6 flex w-[80%] justify-items-end gap-2 border-b-1 border-neutral-300 pb-6">
                    {profileDrawer.map((item) => (
                      <Link
                        key={item.text}
                        href={item.href}
                        className={cn(
                          'w-full p-2 text-center duration-300 hover:z-10 hover:scale-[1.12]',
                        )}
                      >
                        {item.icon && (
                          <item.icon
                            sx={{ fontSize: '1.5em' }}
                            onClick={toggleMenu}
                            className="text-primary h-5 w-5"
                          />
                        )}
                      </Link>
                    ))}
                  </div>

                  <div className="m-auto mb-6 flex w-[80%] flex-col gap-2 border-b-1 border-neutral-300 pb-6">
                    <p className="text-primary text-md pb-2 font-bold">SUBSCRIPTION</p>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 text-neutral-700">
                      {subscriptionItems.map((item) => (
                        <Link
                          key={item.text}
                          href={item.href}
                          className={cn(
                            'text-md w-sm cursor-pointer',
                            item.text === 'UPGRADE' &&
                              'font-semibold text-blue-700 underline underline-offset-1',
                          )}
                        >
                          {item.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="m-auto mb-6 flex w-[80%] flex-col justify-items-end gap-2 border-b-1 border-neutral-300 pb-6">
                    <p className="text-primary text-md pb-2 font-bold">NEED HELP?</p>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 text-neutral-700">
                      {helpItems.map((item) => (
                        <Link
                          key={item.text}
                          href={item.href}
                          className={cn('flex w-full flex-row gap-1 text-center')}
                        >
                          {item.icon && (
                            <item.icon
                              sx={{ fontSize: '1.5em' }}
                              onClick={toggleMenu}
                              className="h-5 w-5 text-neutral-700"
                            />
                          )}
                          <p>{item.text}</p>
                        </Link>
                      ))}
                      {/* <Link
                        href="/dashboard"
                        className="text-md col-start-1 row-start-1 flex cursor-pointer items-center gap-2"
                      >
                        <SupportAgentOutlinedIcon className="" sx={{ fontSize: '1.5em' }} /> Talk
                        with us
                      </Link>

                      <Link
                        href="/pricing"
                        className="text-md col-start-2 row-start-1 flex cursor-pointer items-center gap-2"
                      >
                        <ReceiptLongOutlinedIcon sx={{ fontSize: '1.5em' }} /> Billing
                      </Link>

                      <Link
                        href="/pricing"
                        className="text-md col-start-1 row-start-2 flex cursor-pointer items-center gap-2"
                      >
                        <EmailOutlinedIcon sx={{ fontSize: '1.5em' }} /> Email us
                      </Link>

                      <Link
                        href="/pricing"
                        className="text-md col-start-2 row-start-2 flex cursor-pointer items-center gap-2"
                      >
                        <LayersOutlinedIcon sx={{ fontSize: '1.5em' }} /> Resources
                      </Link> */}
                    </div>
                  </div>
                </>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </BaseDrawer>
    </>
  );
}

export default Drawer;
