'use client';

import React, { useEffect, useState } from 'react';
import CurrentUserContext from './AuthContext';
import { getToken, getUserToken, removeToken } from '@/utils/token';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import auth from '@/utils/Api/Auth';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [tokenData, setTokenData] = useState(null);
  const [token, setTokenState] = useState(null);
  const router = useRouter();

  const isTokenExpired = (tokenData) => {
    if (!tokenData?.exp) return true;
    return tokenData.exp < Date.now() / 1000;
  };

  useEffect(() => {
    const currentToken = getUserToken();
    console.log(currentToken);
    if (currentToken && !authenticated) {
      try {
        const payload = JSON.parse(atob(currentToken.split('.')[1]));
        console.log(payload, 'fffffffffff');
        if (isTokenExpired(payload)) {
          console.log('jjjjjjjjjjjj');
          handleLogout();
          toast.error('Your session has expired');
          return;
        }
        console.log('ddddddddddddd');
        setTokenData(payload);
        setAuthenticated(true);
      } catch (error) {
        console.log('kkkkkkkkkkkk');
        console.error('Error decoding token:', error);
        handleLogout();
      }
    } else {
      console.log('qqqqqqqqqqqq');
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
        const payload = JSON.parse(atob(response.data.token.split('.')[1]));
        setToken(response.data.token);
        console.log(getToken(), 'set token');
        setTokenState(response.data.token);
        setTokenData(payload);
        console.log('antes de autentificar');
        setAuthenticated(true);
        console.log('despues de autentificar');
        toast.success('Welcome back!');
        router.push('/dashboard');
        //router.refresh();
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
