import { HttpClient } from './HttpClient';
import httpProvider from './providers';

// Мы используем proxy для перенаправления запросов
// Конфикурация proxy находиться в файле vite.config.js
const BASE_URL = '/api';

class AuthService extends HttpClient {
  // Метод входа в систему
  async login(login, password) {
    try {
      return await this.post('/login', {
        data: {
          login, password,
        },
      });
    } catch (e) {
      throw Error(e);
    }
  }

  async signUp(login, email, password) {
    try {
      return await this.post('/sign-up', {
        data: {
          login, email, password,
        },
      });
    } catch (e) {
      throw Error(e);
    }
  }

  // Метод получения данных текущего пользователя
  async whoAmI() {
    try {
      return await this.get('/who-am-i');
    } catch (e) {
      throw Error(e);
    }
  }

  // Метод выхода из системы
  async logout() {
    try {
      await this.delete('/logout');
    } catch (e) {
      throw Error(e);
    }
  }
}

export default new AuthService({
  httpProvider,
  baseURL: BASE_URL,
});
