import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

function MainLayout({ children }) {
  return (
    <div className="grid min-h-dvh grid-rows-[auto,1fr,auto]">
      <Header />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
