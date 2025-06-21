'use client';

import { getToken } from '../token';

class ApiClass {
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

  async getClassInfo() {
    try {
      const response = await fetch(`${this.baseUrl}/classes`, {
        method: 'GET',
        headers: this.getHeaders(),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching class:', error);
    }
  }
  async createClass(classData) {
    try {
      const response = await fetch(`${this.baseUrl}/classes`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(classData),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating class:', error);
    }
  }
  async updateClass(classData) {
    try {
      const response = await fetch(`${this.baseUrl}/classes`, {
        method: 'PATCH',
        headers: this.getHeaders(),
        body: JSON.stringify(classData),
      });

      const data = await response.json();
      return data;
    } catch (error) {}
  }
  async deleteCLass() {
    try {
      const response = await fetch(``, {
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
throw new Error(`HTTP error! status: ${response.status}`);
