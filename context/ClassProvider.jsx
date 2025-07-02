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

  // useEffect(() => {
  //   const fetchClassData = async () => {
  //     if (!token) {
  //       setLoading(false);
  //       return;
  //     }
  //     try {
  //       setLoading(true);
  //       const result = await api.getClassInfo();

  //       setClassData(result.data);
  //     } catch (error) {
  //       console.error('Error fetching class data:', error);
  //       setClassData(null);

  //       if (error.message === 'Error fetching user data') {
  //         handleLogout();
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchClassData();
  // }, [token]);

  const handleCreateClass = async (newClassData) => {
    try {
      setLoading(true);
      const result = await api.createClass(newClassData);
      setClassData([...classData, result.data]);

      // if (result.success) {
      //   const updatedClasses = await api.getClassInfo();
      //   setClassData(updatedClasses.classData);
      // }

      return result;
      //return;
    } catch (error) {
      console.error('Error creating class:', error);
      throw error;
    } finally {
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
