<template>
  <form
    ref="formEl"
    @submit.prevent="submit"
  >
    <h2>Новая публикация</h2>
    <input
      v-model="name"
      type="text"
      name="name"
    >
    <input
      ref="fileInputEl"
      type="file"
      accept="image/png, image/jpeg"
      name="images"
      multiple
      @change="onImageInputChange"
    >
    <button :disabled="disableBtn">
      Сохранить
    </button>
  </form>
</template>

<script setup>
import { pubsService } from '../services';

definePageMeta({
  middleware: 'is-authenticated',
});

const name = ref('');
const filesCount = ref(0);
const formEl = ref();
const fileInputEl = ref();

const disableBtn = computed(() => name.value.length === 0 && filesCount.value === 0);

const onImageInputChange = (evt) => {
  const { files } = evt.target;

  if (files.length > 10) {
    filesCount.value = 0;
    evt.target.value = null;
    return;
  }

  filesCount.value = files.length;
};

const resetForm = () => {
  name.value = '';
  filesCount.value = 0;
  fileInputEl.value.value = null;
};

const submit = async () => {
  const formData = new FormData(formEl.value);

  const result = await pubsService.createPub(formData);

  if (result) {
    resetForm();
  }
};
</script>

<style lang="scss" scoped>

</style>
