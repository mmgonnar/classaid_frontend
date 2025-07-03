'use client';

import { getToken } from '../token';

class ApiClass {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getHeaders() {
    const token = getToken();
    console.log(getToken(), 'xxxxxxxxxxx');

    return {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  }

  async getClassInfo() {
    try {
      const response = await fetch(`${this.baseUrl}/classes`, {
        method: 'GET',
        credentials: 'include',
        headers: this.getHeaders(),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching class:', error);
      throw error;
    }
  }

  async createClass(classData) {
    try {
      const response = await fetch(`${this.baseUrl}/classes`, {
        method: 'POST',
        credentials: 'include',
        headers: this.getHeaders(),
        body: JSON.stringify(classData),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API Error creating class:', error);
      throw error;
    }
  }

  async updateClass(id, classData) {
    try {
      if (!id || !userData) throw new Error('ID and user data are required');

      const response = await fetch(`${this.baseUrl}/classes${id}`, {
        method: 'PATCH',
        headers: this.getHeaders(),
        body: JSON.stringify(classData),
      });

      const data = await response.json();
      return data;
    } catch (error) {}
  }
  async deleteCLass(id) {
    try {
      const response = await fetch(`${this.baseUrl}/classes/${id}`, {
        method: 'DELETE',
        headers: this.getHeaders(),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(`Error deleting class! status: ${response.status}`);
      }
      return data;
    } catch (error) {
      console.error('Error deleting cards:', error);
      throw error;
    }
  }
  async deleteAllCLasses() {}
}

const api = new ApiClass('/api');

export default api;
