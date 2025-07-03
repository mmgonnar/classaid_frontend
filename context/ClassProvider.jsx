'use client';
import React, { useContext, useEffect, useState } from 'react';
import ClassContext from './ClassContext';
import api from '@/utils/Api/ApiClass';
import AuthContext from './AuthContext';

function ClassProvider({ children }) {
  const [classData, setClassData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { token } = useContext(AuthContext);

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

  useEffect(() => {
    fetchClassData();
  }, [token]);

  const handleCreateClass = async (newClassData) => {
    try {
      setLoading(true);
      const response = await api.createClass(newClassData);

      if (!response.success) {
        throw new Error(response.message || 'Failed to create class');
      }

      setClassData([response.data, ...(classData || [])]);

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Error creating class:', error);
      setClassData((cards) => cards?.filter((item) => item._id !== response?.data?._id));
      return {
        success: false,
        error: error.message,
      };
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (classId) => {
    try {
      setLoading(true);
      const currentClass = classData.find((c) => c._id === classId);
    } catch (error) {
      console.error();
    }
  };

  return (
    <ClassContext.Provider value={{ classData, loading, setClassData, handleCreateClass }}>
      {children}
    </ClassContext.Provider>
  );
}

export default ClassProvider;
