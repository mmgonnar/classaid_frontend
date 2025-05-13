import React from 'react';
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
