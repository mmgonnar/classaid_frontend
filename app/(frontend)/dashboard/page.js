'use client';
import MainButton from '@/components/MainButton';
import { CTA } from '@/utils/enums';
import { removeToken } from '@/utils/token';
import { useRouter } from 'next/navigation';
import React from 'react';

function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    console.log('click');
    removeToken();
    //router.push('signin');
  };

  return (
    <div>
      <h1>Hola</h1>
      <MainButton type="primary" text={CTA.LOGOUT} onClick={handleLogout} />
    </div>
  );
}

export default Dashboard;
