'use client';

import { getToken, removeToken } from '@/utils/token';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const token = getToken();
        console.log(token);
        if (!token) {
          console.error('error aqui');
          router.push('/signin');
          return;
        }

        const tokenData = JSON.parse(atob(token.split('.')[1]));
        console.log(tokenData);
        const userId = tokenData.id;
        console.log(userId);
        //const userId = token.id;

        const response = await fetch(`/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.status, 'response');
        if (!response.ok) {
          throw new Error('Error fetching user data');
        }

        const result = await response.json();
        console.log(result.data, 'rsult');

        // if (!result.success) {
        //   throw new Error(result.message || 'Error fetching user data');
        // }

        setUserData(result.data);
        console.log(userData, 'userdata');
      } catch (error) {
        console.error('Error fetching user data:', error);
        removeToken();
        router.push('/signin');
      } finally {
        //setUserData(result.data);
        console.log(userData);
        setLoading(false);
      }
    };

    console.log('');
    fetchUserData();
  }, []);
  console.log(JSON.stringify(userData));
  console.log(userData);
  return <UserContext.Provider value={{ userData, loading }}>{children}</UserContext.Provider>;
}
// function UserContext({ children }) {

// }

export default UserProvider;
