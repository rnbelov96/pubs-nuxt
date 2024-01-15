<template>
  <form @submit.prevent="submit">
    <h3>Регистрация</h3>
    <input
      v-model="login"
      type="text"
      name="login"
      placeholder="Логин"
    >
    <input
      v-model="email"
      type="email"
      name="email"
      placeholder="Email"
    >
    <input
      v-model="password"
      type="password"
      name="password"
      placeholder="Пароль"
    >
    <button :disabled="disableBtn">
      Отправить
    </button>
  </form>
</template>

<script setup>
definePageMeta({
  middleware: 'redirect-auth',
});

const authStore = useAuthStore();
const router = useRouter();

const $notification = inject('$notification');

const login = ref('');
const password = ref('');
const email = ref('');

const disableBtn = computed(() => login.value.length === 0 && password.value.length === 0);

const submit = async () => {
  const result = await authStore.signUp(login.value, email.value, password.value);

  if (result === 'ok') {
    await router.push('/');
    $notification.open({
      label: 'Успешно',
      backgroundColor: 'green',
    });
  } else {
    $notification.open({
      label: `Ошибка: ${result}`,
      backgroundColor: 'red',
    });
  }
};
</script>

<style lang="scss" scoped>

</style>
