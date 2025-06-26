'use client';
import React, { useContext, useEffect, useState } from 'react';
import ClassContext from './ClassContext';
import api from '@/utils/Api/ApiClass';
import AuthContext from './AuthContext';

function ClassProvider({ children }) {
  const [classData, setClassData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchClassData = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const result = await api.getClassInfo();

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
  }, [token]);

  useEffect(() => {
    handleCreateClass;
  }, []);

  const handleCreateClass = async () => {
    try {
      setLoading(true);
      const result = await api.createClass(classData);

      if (result.success) {
        const updatedClasses = await api.getClassInfo();
        setClassData(updatedClasses.data);
      }
    } catch (error) {
      console.error('Error creating class:', error);
      setClassData(null);
      throw error;
    } finally {
      console.log('sdasdasdas');
      setLoading(false);
    }
  };

  return (
    <ClassContext.Provider value={{ classData, loading, setClassData, handleCreateClass }}>
      {children}
    </ClassContext.Provider>
  );
}

export default ClassProvider;
