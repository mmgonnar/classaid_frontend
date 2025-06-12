'use client';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { menuItems } from '@/utils/constants';
import { useState } from 'react';

function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header>
        <Navbar menuItems={menuItems} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </Header>
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
