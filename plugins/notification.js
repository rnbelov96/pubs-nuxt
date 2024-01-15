import { reactive } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
  let appearanceTimerId;
  let disapperanceTimerId;

  const defaultOptions = {
    backgroundColor: 'green',
    icon: 'check-icon',
    label: 'Подпись',
    delay: 3000,
  };

  const state = reactive({
    isOpen: false,
    options: defaultOptions,
  });

  const api = {
    open(options) {
      clearTimeout(appearanceTimerId);
      clearTimeout(disapperanceTimerId);

      state.isOpen = true;
      state.options = {
        ...state.options,
        ...options,
      };

      appearanceTimerId = setTimeout(() => {
        this.close();
      }, state.options.delay);
    },

    active() {
      return state.isOpen;
    },

    options() {
      return state.options;
    },

    close() {
      state.isOpen = false;

      disapperanceTimerId = setTimeout(() => {
        state.options = defaultOptions;
      }, 400);
    },
  };

  nuxtApp.vueApp.provide('$notification', api);
});
