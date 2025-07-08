'use client';
import React, { useContext, useEffect, useState } from 'react';
import ClassContext from './ClassContext';
import api from '@/utils/Api/ApiClass';
import AuthContext from './AuthContext';

function ClassProvider({ children }) {
  const [classData, setClassData] = useState(null);
  const [favoritesData, setFavoritesData] = useState(null);
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

  const fetchAllData = async () => {
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      //const result = await api.getClassInfo();

      const favoriteResult = await api.getFavoriteClasses();
      const allClassesData = await api.getClassInfo();
      //! separarlas despues

      //promissAll
      //o 1 .then 2. then...

      setFavoritesData(favoriteResult.data);
      setClassData(allClassesData.data);
    } catch (error) {
      console.error('Error fetching class data:', error);
      setFavoritesData(null);
      setClassData(null);

      if (error.message === 'Error fetching user data') {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    //fetchAllData();
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

  // const handleUpdateClass = async (classId, updates) => {
  //   try {
  //     setLoading(true);
  //     const response = await api.updateClass(classId, updates);
  //     if (response.success) {
  //       const updatedClass = response.data
  //         ? { ...item, ...response.data }
  //         : { ...item, ...updates };
  //       setClassData((prev) =>
  //         prev
  //           ? prev.map((item) => (item._id === classId ? { ...item, ...updatedClass } : item))
  //           : [],
  //       );
  //       return { success: true, data: updatedClass };
  //     }
  //     return {
  //       success: true,
  //       data: response,
  //     };
  //   } catch (error) {
  //     console.error('Error updating class:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleUpdateClass = async (classId, updates) => {
    setLoading(true);
    try {
      const response = await api.updateClass(classId, updates);

      if (!response.success) {
        return {
          success: false,
          error: response.error || 'Error updating class',
        };
      }

      setClassData(
        (prev) =>
          prev?.map((item) =>
            item._id === classId
              ? {
                  ...item,
                  ...(response.data || updates),
                }
              : item,
          ) || [],
      );

      return {
        success: true,
        data: response.data || { ...updates, _id: classId },
      };
    } catch (error) {
      console.error('Update failed:', error);
      return {
        success: false,
        error: error.message,
      };
    } finally {
      setLoading(false);
    }
  };

  return (
    <ClassContext.Provider
      value={{
        classData,
        favoritesData,
        loading,
        setClassData,
        setFavoritesData,
        handleCreateClass,
        handleUpdateClass,
      }}
    >
      {children}
    </ClassContext.Provider>
  );
}

export default ClassProvider;
