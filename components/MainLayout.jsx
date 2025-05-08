import React from 'react';
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        <section>{children}</section>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
