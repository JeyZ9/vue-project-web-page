<template>
    <Header />
    <main class="w-full h-full">
        <div class="flex justify-center my-10">
            <h1 class="title-page">
                Blogs
            </h1>
        </div>
        <Card :blogList="data" />
    </main>
</template>

<script lang="ts" setup>
    import blog from '@/assets/blogs-list/blog.json';
    import { useApi } from '@/composables/useApi';

    // const blogList = blog.blogs.filter(item => (item.id));
    const { data, error, loading, fetchData } = useApi();
    fetchData('/blogs');
</script>

<style scoped>

</style>