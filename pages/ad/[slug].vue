<template>
  <div v-if="pub">
    <h2>Публикация № {{ pub.id }}</h2>
    <p>Название: <b>{{ pub.name }}</b></p>
    <p>Автор: {{ pub.userName }}</p>
    <p>Фотографии:</p>
    <ul>
      <li
        v-for="image, index in pub.images"
        :key="`${image}-${index}`"
      >
        <img :src="image">
      </li>
    </ul>
  </div>
</template>

<script setup>
import { pubsService } from '../../services';

definePageMeta({
  middleware: 'is-authenticated',
});

const route = useRoute();
const router = useRouter();

const pub = await pubsService.fetchPubBySlug(route.params.slug);

if (!pub) {
  router.push('/');
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
