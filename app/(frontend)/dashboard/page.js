'use client';
import MainButton from '@/components/MainButton';
import MainLayout from '@/components/MainLayout';
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
      <div>
        <h1>Hola</h1>
        <MainButton type="primary" text={CTA.LOGOUT} onClick={handleLogout} />
      </div>
    </MainLayout>
  );
}

export default Dashboard;
