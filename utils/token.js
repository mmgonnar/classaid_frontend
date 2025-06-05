import Cookies from 'js-cookie';

const TOKEN_KEY = 'token';

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  });
};

export const getToken = () => {
  return Cookies.get(TOKEN_KEY);
};

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY, {
    path: '/',
  });
};
