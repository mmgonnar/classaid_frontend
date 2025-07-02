'use client';

import { getToken } from '../token';

class ApiUser {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getHeaders() {
    const token = getToken();

    return {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  }

  // async _fetch(endpoint) {
  //   try {
  //     const response = await fetch(`${this.baseUrl}${endpoint}`);
  //   } catch (error) {}
  // }

  async getUserInfo() {
    try {
      const response = await fetch(`${this.baseUrl}/users`, {
        method: 'GET',
        headers: this.getHeaders(),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const response = await fetch(`${this.baseUrl}/users/${id}`, {
        method: 'GET',
        headers: this.getHeaders(),
      });
      if (!response.ok) {
        throw new Error('Error fetching user data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  async createUser(userData) {
    try {
      if (!userData) throw new Error('User data is required');
      const response = await fetch(`${this.baseUrl}/users`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async updateUser(id, userData) {
    try {
      if (!id || !userData) throw new Error('ID and user data are required');

      const response = await fetch(`${this.baseUrl}/users/${id}`, {
        method: 'PATCH',
        headers: this.getHeaders(),
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      const response = await fetch(`${this.baseUrl}/users/${id}`, {
        method: 'DELETE',
        headers: this.getHeaders(),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error deleting user');
      }
      return data;
    } catch (error) {
      console.error('Error deleting users:', error);
      throw error;
    }
  }
}

const api = new ApiUser('/api');

export default api;
