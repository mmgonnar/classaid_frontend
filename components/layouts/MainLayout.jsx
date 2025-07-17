'use client';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { menuItems } from '@/utils/constants';
import { useState } from 'react';

function MainLayout({ children, allowMainScroll }) {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header>
        <Navbar menuItems={menuItems} />
      </Header>
      <main className={`h-full`}>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
