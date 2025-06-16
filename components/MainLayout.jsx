'use client';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { menuItems } from '@/utils/constants';
import { useState } from 'react';
import BaseContext from '@/context/BaseContext';

function MainLayout({ children }) {
  const pruebaContexto = useState(true);
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      {/* <BaseContext.Provider value={pruebaContexto}> */}
      <Header>
        <Navbar menuItems={menuItems} />
      </Header>
      {/* </BaseContext.Provider> */}
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
