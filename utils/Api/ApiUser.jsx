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
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }

  async getUserInfo() {
    console.log(this.getUserInfo());
    try {
      const response = await fetch(`${this.baseUrl}/users`, {
        method: 'GET',
        headers: this.getHeaders(),
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  async createUser(userData) {
    try {
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

  async updateUser(userData) {
    try {
      const response = await fetch(``, {
        method: 'PATCH',
        headers: this.getHeaders(userData),
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async deleteAllUsers() {
    try {
      const response = await fetch(`${this.baseUrl}/users/deleteAll`, {
        method: 'DELETE',
        headers: this.getHeaders(),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error deleting users');
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
