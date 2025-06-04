import { getToken } from '../token';

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://api.sudoa.crabdance.com';

const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    return Promise.reject(data.message || data.error || 'Request failed');
  }
  return data;
};

// export const register = (userData) => {
//   return fetch(`${BASE_URL}/users`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   }).then(handleResponse);
// };

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};

export const checkToken = () => {
  const token = getToken();
  if (!token) {
    return Promise.reject('No token found');
  }

  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};

class Auth {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  async register(userData) {
    try {
      const response = await fetch(`${this.baseUrl}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error, 'ERROR');
      console.error('Error creating user');
      throw error;
    }
  }

  async login(path, body) {
    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error en la solicitud POST');
      }
      return data;
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
      throw error;
    }
  }
}

const auth = new Auth('/api');

export default auth;
