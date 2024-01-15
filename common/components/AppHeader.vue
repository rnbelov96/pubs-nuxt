<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__left-side">
          <nuxt-link
            v-if="authStore.isAuthenticated"
            class="header__back-link"
            to="/"
          >
            На Главную
          </nuxt-link>
        </div>
        <div class="header__right-side">
          <div
            v-if="!authStore.isAuthenticated"
            class="header__auth-box"
          >
            <nuxt-link to="/login">
              Войти
            </nuxt-link>
            /
            <nuxt-link to="/sign-up">
              Регистрация
            </nuxt-link>
          </div>
          <div
            v-else
            class="header__user-box"
          >
            <nuxt-link to="/new-pub">
              Новая публикация
            </nuxt-link>
            /
            <button @click="logout">
              Выйти
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const authStore = useAuthStore();
const router = useRouter();

const logout = async () => {
  await authStore.logout();
  await router.push('/login');
};
</script>

<style lang="scss" scoped>
.header {
  min-height: rem(64);
  padding: 1rem 0;
}

.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__back-link {
  &.router-link-active {
    opacity: 0;
    pointer-events: none;
  }
}
</style>
