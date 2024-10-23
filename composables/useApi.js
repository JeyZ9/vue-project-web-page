// composables/useApi.js

import { ref } from 'vue';
import { useRuntimeConfig } from '#app';

export const useApi = () => {
  const config = useRuntimeConfig();
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const fetchData = async (endpoint) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await $fetch(`${config.public.url}${endpoint}`);
      data.value = response;
    } catch (err) {
      error.value = err;
      console.error('Error fetching data:', err);
    } finally {
      loading.value = false;
    }
  };

  const fetchField = async (field) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await $fetch(`${config.public.url}/field/${field}`);
      data.value = response;
    } catch (err) {
      error.value = err;
      console.error('Error fetching data:', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    error,
    loading,
    fetchData,
    fetchField,
  };
};
