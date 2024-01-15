<template>
  <div v-if="data">
    <h2>Список публикаций</h2>
    <ul>
      <li
        v-for="pub in data.items"
        :key="pub.id"
      >
        <nuxt-link :to="`/ad/${pub.slug}`">
          <p>{{ pub.name }}</p>
          <p>{{ pub.userName }}</p>
          <img :src="pub.images[0]">
        </nuxt-link>
      </li>
    </ul>
    <div class="pubs__nav-btn-list">
      <button
        class="pubs__btn"
        :disabled="!data.prevPage"
      >
        <nuxt-link :to="`/?page=${data.prevPage}`">
          Назад
        </nuxt-link>
      </button>
      <button
        class="pubs__btn"
        :disabled="!data.nextPage"
      >
        <nuxt-link :to="`/?page=${data.nextPage}`">
          Вперед
        </nuxt-link>
      </button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'is-authenticated',
});

const route = useRoute();

const currentPage = computed(() => route.query.page);

const { data } = await useFetch(() => `/api/pubs?page=${currentPage.value}`);
</script>

<style lang="scss" scoped>
.pubs__nav-btn-list {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
.pubs__btn {
  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
}

ul {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}
</style>
