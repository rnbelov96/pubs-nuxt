import { defineStore } from 'pinia';
import { authService } from '../services';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated: state => !!state.user,
    getUserAttribute: state => attr => (state.user ? state.user[attr] : ''),
  },
  actions: {
    async login(login, password) {
      try {
        await authService.login(login, password);
        return 'ok';
      } catch (e) {
        return e.message;
      }
    },
    async signUp(login, email, password) {
      try {
        this.user = await authService.signUp(login, email, password);
        return 'ok';
      } catch (e) {
        return e.message;
      }
    },
    async getMe() {
      const userData = await authService.whoAmI();
      this.user = userData;

      return userData;
    },
    async logout(sendRequest = true) {
      await authService.logout();
      this.user = null;
    },
  },
});
