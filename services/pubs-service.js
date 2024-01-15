import { HttpClient } from './HttpClient';
import httpProvider from './providers';

const BASE_URL = '/api/pubs';

class PubsService extends HttpClient {
  async fetchPubs(page) {
    try {
      return this.get('/', {
        query: {
          page,
        },
      });
    } catch (e) {
      throw Error(e);
    }
  }

  async fetchPubBySlug(slug) {
    try {
      return this.get(`/${slug}`);
    } catch (e) {
      throw Error(e);
    }
  }

  async createPub(formData) {
    try {
      return this.post('/', {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: {
          formData,
        },
      });
    } catch (e) {
      throw Error(e);
    }
  }
}

export default new PubsService({
  httpProvider,
  baseURL: BASE_URL,
});
