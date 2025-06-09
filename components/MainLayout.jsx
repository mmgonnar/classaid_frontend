import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';
import Navbar from './navbars/Navbar';

function MainLayout({ children }) {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header>
        <Navbar />
      </Header>
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
