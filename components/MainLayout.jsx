import React from 'react';
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <section>{children}</section>
      <Footer />
    </>
  );
}

export default MainLayout;
