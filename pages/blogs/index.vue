<template>
    <Header />
    <main class="w-full h-full">
        <div class="flex justify-center my-10">
            <h1 class="title-page">
                Blogs
            </h1>
        </div>
        <Card :blogList="blogList" />
    </main>
</template>

<script lang="ts" setup>
    import blog from '@/assets/blogs-list/blog.json';

    const blogList = blog.blogs.filter(item => (item.id));
</script>

<style scoped>

</style>