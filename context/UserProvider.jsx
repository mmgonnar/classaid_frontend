'use client';

import { getToken, removeToken } from '@/utils/token';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UserContext from './UserContext';
import AuthContext from './AuthContext';

function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  //const router = useRouter();

  const { token, authenticated, tokenData, handleLogout } = useContext(AuthContext);
  console.log({ token, authenticated, tokenData, handleLogout });

  useEffect(() => {
    console.log('xxxxxx');

    const fetchUserData = async () => {
      if (!token) {
        console.log(authenticated);
        // if (!authenticated) {
        //   //router.push('/signin');
        //   return;
        // }
        console.log('aaaaaaa');
        setLoading(false);

        try {
          console.log(token);
          // const token = getToken();
          // console.log(token);

          // const tokenData = JSON.parse(atob(token.split('.')[1]));
          // console.log(tokenData);
          // const userId = tokenData.id;
          // console.log(userId);
          //const userId = token.id;

          const response = await fetch(`/api/users/${tokenData.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          console.log(response.status, 'response');
          if (!response.ok) {
            throw new Error('Error fetching user data');
          }

          const result = await response.json();

          setUserData(result.data);
        } catch (error) {
          handleLogout;
          console.error('Error fetching user data:', error);
          //removeToken();
          //router.push('/signin');
        } finally {
          //setUserData(result.data);
          console.log(userData);
          setLoading(false);
        }
      }

      fetchUserData();
    };
  }, [token, tokenData?.id]);

  return (
    <UserContext.Provider value={{ userData, loading, refreshUser: () => fetchUserData() }}>
      {children}
    </UserContext.Provider>
  );
}
// function UserContext({ children }) {

// }

export default UserProvider;
