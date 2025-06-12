'use-client';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MainButton, { ButtonSection } from './MainButton';
import { CTA } from '@/utils/enums';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import Link from 'next/link';
import SocialMedia from './SocialMedia';
import BaseDrawer from './drawers/BaseDrawer';
import { menuItems } from '@/utils/constants';
import { cn } from '@/utils/functions';
import { useEffect, useState } from 'react';

function Drawer({ toggleMenu, isMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const profileDrawer = menuItems.filter((item) => item.isProfileDrawer);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <BaseDrawer toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}>
        <div>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300"></div>
          <div className="fixed top-0 right-0 z-60 h-full w-[320px] gap-4 bg-white shadow-lg transition-transform duration-300">
            <div className="flex h-full flex-col">
              <div
                className={cn(
                  'profile bg-third text-primary flex flex-col gap-3 pt-20 pb-6',
                  isScrolled && 'shadow-lg',
                )}
              >
                <div className="outline-primary m-auto mb-4 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white p-6 outline outline-offset-6">
                  <p className="text-primary text-4xl">MG</p>
                </div>
                <p className="text-center text-lg font-bold">Mariela González</p>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-center text-xs">Id: 5345457465786</p>
                  <button className="cursor-pointer">
                    <HelpOutlineOutlinedIcon sx={{ fontSize: '14px' }} />
                  </button>
                </div>
                <p className="text-center text-xs">
                  Institution: <span className="font-semibold">UAGro</span>
                </p>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="flex justify-center gap-2 py-5">
                  <MainButton variant="primary" size="sm" text={CTA.PROFILE} type="button" />
                  <MainButton variant="secondary" size="sm" text={CTA.LOGOUT} type="button" />
                </div>

                <div className="m-auto mb-6 flex w-[80%] justify-items-end gap-2 border-b-1 border-neutral-300 pb-6">
                  {profileDrawer.map((item) => (
                    <Link
                      key={item.text}
                      href={item.href}
                      className={cn('w-full p-2 text-center hover:bg-gray-100')}
                    >
                      {item.icon && (
                        <item.icon onClick={toggleMenu} className="text-primary h-5 w-5" />
                      )}
                    </Link>
                  ))}
                </div>

                <div className="m-auto mb-6 flex w-[80%] flex-col gap-2 border-b-1 border-neutral-300 pb-6">
                  <p className="text-primary text-md pb-2 font-bold">SUBSCRIPTION</p>
                  <div className="flex items-center gap-10 text-neutral-700">
                    <p className="text-md cursor-pointer text-center">Free Edition</p>
                    <Link
                      href="/pricing"
                      className="text-md text-center font-semibold text-blue-700 underline underline-offset-1"
                    >
                      UPGRADE
                    </Link>
                  </div>
                  <Link href="/pricing" className="text-md cursor-pointer">
                    Try another version
                  </Link>
                </div>
                <div className="m-auto mb-6 flex w-[80%] flex-col justify-items-end gap-2 border-b-1 border-neutral-300 pb-6">
                  <p className="text-primary text-md pb-2 font-bold">NEED HELP?</p>
                  <div className="grid grid-cols-2 grid-rows-2 gap-4 text-neutral-700">
                    <Link
                      href="/dashboard"
                      className="text-md col-start-1 row-start-1 flex cursor-pointer items-center gap-2"
                    >
                      <SupportAgentOutlinedIcon className="" sx={{ fontSize: '1.5em' }} /> Talk with
                      us
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseDrawer>
    </>
  );
}

export default Drawer;
