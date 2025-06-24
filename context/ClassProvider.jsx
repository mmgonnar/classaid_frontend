'use client';
import React, { useContext, useEffect, useState } from 'react';
import ClassContext from './ClassContext';
import api from '@/utils/Api/ApiClass';
import AuthContext from './AuthContext';

function ClassProvider({ children }) {
  const [classData, setClassData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { token, tokenData, handleLogout } = useContext(AuthContext);

  useEffect(() => {
    const fetchClassData = async () => {
      if (!token || !tokenData?.id) {
        setLoading(false);
        return;
      }
      try {
        const result = await api.getClassInfo(tokenData?.id);
        console.log(result, 'resultado');

        setClassData(result.data);
      } catch (error) {
        console.error('Error fetching class data:', error);
        setClassData(null);

        if (error.message === 'Error fetching user data') {
          handleLogout();
        }
      } finally {
        setLoading(false);
      }
    };

    fetchClassData();
  }, [token, tokenData?.id, handleLogout]);

  return <ClassContext.Provider value={{ classData, loading }}>{children}</ClassContext.Provider>;
}

export default ClassProvider;
