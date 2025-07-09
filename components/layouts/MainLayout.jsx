'use client';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { menuItems } from '@/utils/constants';
import { useState } from 'react';

function MainLayout({ children, allowMainScroll = false }) {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header>
        <Navbar menuItems={menuItems} />
      </Header>
      <main className={`h-full ${allowMainScroll ? 'overflow-y-auto' : 'overflow-hidden'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
