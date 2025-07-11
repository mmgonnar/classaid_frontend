'use client';
import Sidebar from '@/components/Sidebar';
import MainLayout from './MainLayout';
import React from 'react';

function DashboardLayout({ children }) {
  //! DOUBLE check this
  const ChildrenSection = ({ children }) => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children, { className: 'pl-16' });
    }
    return <div className="pl-10">{children}</div>;
  };

  return (
    <MainLayout allowMainScroll={false}>
      <div className="bg-secondary bg-opacity-90 grid h-full grid-cols-[auto_1fr] overflow-hidden">
        <div className="flex h-full">
          <Sidebar className="overflow-y-auto" />
        </div>
        {/* <ChildrenSection>{children}</ChildrenSection> */}
        <div className="h-full overflow-y-auto p-4">{children}</div>
      </div>
    </MainLayout>
  );
}

export default DashboardLayout;
