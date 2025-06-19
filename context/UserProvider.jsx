'use client';

import { useContext, useEffect, useState } from 'react';
import UserContext from './UserContext';
import AuthContext from './AuthContext';

function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { token, authenticated, tokenData, handleLogout } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!token || !tokenData?.id) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/users/${tokenData.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching user data');
        }

        const result = await response.json();
        setUserData(result.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.message === 'Error fetching user data') {
          handleLogout();
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token, tokenData?.id, handleLogout]);

  return <UserContext.Provider value={{ userData, loading }}>{children}</UserContext.Provider>;
}

export default UserProvider;
