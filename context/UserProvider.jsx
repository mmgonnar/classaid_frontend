'use client';

import { useContext, useEffect, useState } from 'react';
import UserContext from './UserContext';
import AuthContext from './AuthContext';
import api from '@/utils/Api/ApiUser';

function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { token, tokenData, handleLogout } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!token || !tokenData?.id) {
        setLoading(false);
        return;
      }

      try {
        const result = await api.getUserById(tokenData.id);

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
