import { useAuthStore } from '../stores/auth';

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore();

  if (!authStore.user) {
    const response = await authStore.getMe();

    if (response) {
      return { path: '/' };
    }

    return true;
  }
  return { path: '/' };
});
