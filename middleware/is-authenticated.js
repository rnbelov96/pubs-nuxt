import { useAuthStore } from '../stores/auth';

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore();

  if (!authStore.user) {
    const response = await authStore.getMe();

    if (response) {
      return true;
    }

    return { path: '/login' };
  }
  return true;
});
