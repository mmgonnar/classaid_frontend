'use client';

import React, { useEffect, useState } from 'react';
import CurrentUserContext from './AuthContext';
import { getToken, removeToken } from '@/utils/token';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import auth from '@/utils/Api/Auth';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [tokenData, setTokenData] = useState(null);
  const [token, setTokenState] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const currentToken = getToken();
    console.log(currentToken);
    if (currentToken) {
      //const tokenInfo = JSON.parse(atob(token.split('.')[1]));
      setTokenData(currentToken);
      console.log(currentToken);
      setAuthenticated(true);
    } else {
      handleLogout();
      // setAuthenticated(false);
      // router.push('/signin');
      // return;
    }
  }, []);

  const handleLogin = async (credentials) => {
    try {
      const response = await auth.login(credentials.email, credentials.password);

      if (response.success && response.data?.token) {
        setToken(response.data.token);
        setTokenState(response.data.token);
        setAuthenticated(true);
        toast.success('Welcome back!');
        router.push('/dashboard');
        router.refresh();
      } else {
        toast.error(response.message || 'Error signing in');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'Error signing in');
    }
  };

  const handleLogout = () => {
    removeToken();
    setTokenState(null);
    setTokenData(null);
    setAuthenticated(false);
    router.push('/signin');
  };

  return (
    <AuthContext.Provider value={{ token, authenticated, handleLogin, handleLogout, tokenData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
