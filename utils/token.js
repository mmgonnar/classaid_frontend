import Cookies from 'js-cookie';

const TOKEN_KEY = 'token';

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax', // tenia strict
    path: '/',
    expires: 7,
  });
};

export const getToken = () => {
  if (typeof window === 'undefined') return null;
  return Cookies.get(TOKEN_KEY);
};

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY, {
    path: '/',
  });
};

export const getUserToken = () => {
  if (typeof window !== 'undefined') {
    return Cookies.get(TOKEN_KEY);
  }
  return null;
};
