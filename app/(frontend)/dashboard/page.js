'use client';
import MainButton from '@/components/MainButton';
import MainLayout from '@/components/MainLayout';
import Sidebar from '@/components/Sidebar';
import { CTA } from '@/utils/enums';
import { removeToken, getToken } from '@/utils/token';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    console.log('Dashboard - Checking token...');
    const token = getToken();
    console.log('Dashboard - Token present:', !!token);

    if (!token) {
      console.log('Dashboard - No token found, redirecting to signin');
      router.push('/signin');
    } else {
      console.log('Dashboard - Token found, rendering dashboard');
    }
  }, [router]);

  const handleLogout = () => {
    console.log('Dashboard - Logging out...');
    removeToken();
    router.push('/dashboard');
  };

  return (
    <MainLayout>
      <div className="grid h-full grid-cols-[auto_1fr]">
        <Sidebar />
        <div className="flex flex-col p-6">
          <h1>Hola</h1>
          <MainButton type="primary" text={CTA.LOGOUT} onClick={handleLogout} />
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
