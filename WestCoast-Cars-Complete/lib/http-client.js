import { config } from './config.js';

export default class HttpClient {
  constructor() {
    this.baseUrl = config.vehicleApiUrl;
  }

  async loadData(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'x-apikey': config.apiKey,
        },
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async findData(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'x-apikey': config.apiKey,
        },
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
