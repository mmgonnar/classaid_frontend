'use client';

class ApiClass {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getHeaders() {}

  async getClassInfo() {}
  async createClass() {}
  async updateClass() {}
  async deleteCLass() {}
  async deleteAllCLasses() {}
}

const api = new ApiClass('/api');

export default api;
