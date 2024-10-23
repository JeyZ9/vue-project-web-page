<template>
  <div>
    <h1 v-if="loading">Loading...</h1>
    <h1 v-if="error">Error: {{ error.message }}</h1>
    <div v-if="data && data.length">
      <h2>Engineering Records</h2>
      <ul>
        <li v-for="item in data" :key="item.id" class="engineering-item">
          <img :src="`${config.public.urlImage}/${item.image}`" :alt="item.name" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p><strong>Field:</strong> {{ item.field }}</p>
          <p><strong>Date:</strong> {{ new Date(item.dateTime).toLocaleString() }}</p>
        </li>
      </ul>
    </div>
    <div v-else-if="data && data.length === 0">
      <h2>No Engineering Records Found</h2>
    </div>
  </div>
</template>

<script setup>
import { useApi } from '@/composables/useApi';
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();
const { data, error, loading, fetchData } = useApi();
fetchData('/blogs');
</script>

<style scoped>
.engineering-item {
  margin-bottom: 20px;
}

.engineering-item img {
  max-width: 100px; /* Adjust the size as needed */
  height: auto;
  margin-right: 10px;
  vertical-align: middle;
}
</style>
